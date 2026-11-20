import { test, expect } from '@playwright/test';
import fs from 'node:fs';
const routes=Object.keys(JSON.parse(fs.readFileSync('src/manifest.json','utf8')));
for (const width of [1440,390]) {
  test.describe(`width ${width}`,()=>{
    test.use({viewport:{width,height:900}});
    for(const route of routes){
      test(`renders ${route}`,async({page})=>{
        const errors=[];
        page.on('pageerror',e=>errors.push(e.message));
        const response=await page.goto(route);
        expect(response.status()).toBe(200);
        await expect(page.locator('h1')).toBeVisible();
        await page.waitForFunction(()=>document.querySelector('script[src^="/behaviors/"]')?.dataset.ready==='true');
        await expect(page.locator('nav#nav')).toBeVisible();
        await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2)).toBe(true);
        expect(errors).toEqual([]);
        const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src));
        expect(broken).toEqual([]);
      });
    }
    test('navigation and demo form',async({page})=>{
      await page.goto('/');
      if(width<1180){
        await page.locator('#bg').click();
        await expect(page.locator('#mnav')).toHaveClass(/op/);
        await page.locator('#mnav a[href="/about/"]').click();
      }else{
        await page.locator('nav#nav a[href="/about/"]').click();
      }
      await expect(page).toHaveURL(/\/about\/$/);
      await expect(page.locator('.lp')).toHaveCount(4);
      if(width>1180) {
        const columns=await page.locator('.cgrid').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);
        expect(columns).toBe(4);
      }
      await expect(page.locator('footer .ptn img').first()).toHaveCSS('height','24px');
      await page.goto('/free-audit/');
      const form=page.locator('form').first();
      await form.locator('input').evaluateAll(inputs=>inputs.forEach(input=>{
        if(input.type==='checkbox')input.checked=true;
        else input.value=input.type==='email'?'qa@example.com':input.type==='tel'?'4125550100':'QA Test';
      }));
      await form.locator('select').evaluateAll(selects=>selects.forEach(s=>s.selectedIndex=Math.min(1,s.options.length-1)));
      await form.evaluate(form=>form.requestSubmit());
      await expect(page).toHaveURL(/\/thank-you\/$/);
    });
    test('homepage controls',async({page})=>{
      await page.goto('/');
      const question=page.locator('.qi button').first();
      await question.click();
      await expect(page.locator('.qi').first()).toHaveClass(/op/);
      const qualified=page.locator('[data-set="qualified"]');
      await qualified.click();
      await expect(qualified).toHaveAttribute('aria-pressed','true');
      await page.locator('a.dbx').click();
      await expect(page.locator('#dblb')).toHaveClass(/on/);
      await page.keyboard.press('Escape');
      await expect(page.locator('#dblb')).not.toHaveClass(/on/);
    });
  });
}
test('no JavaScript retains rendered content',async({browser})=>{
  const context=await browser.newContext({javaScriptEnabled:false});
  const page=await context.newPage();
  for(const route of ['/','/about/','/services/google-ads/']){
    await page.goto('http://127.0.0.1:4173'+route);
    await expect(page.locator('h1')).toBeVisible();
    expect((await page.locator('body').innerText()).length).toBeGreaterThan(1000);
  }
  await context.close();
});
