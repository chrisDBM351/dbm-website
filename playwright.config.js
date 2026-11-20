import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  workers: 2,
  timeout: 30000,
  use: { baseURL: 'http://127.0.0.1:4173', headless:true, launchOptions:{args:['--no-sandbox','--use-angle=swiftshader']} },
  webServer: { command:'npm run preview -- --port 4173 --strictPort', url:'http://127.0.0.1:4173', reuseExistingServer:false },
  reporter: [['list'],['json',{outputFile:'test-results/report.json'}]]
});
