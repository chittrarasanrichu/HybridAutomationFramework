import { test, expect , chromium, webkit, firefox } from '@playwright/test';

export class reusableFunction{

async browserLaunch(){
        const browser = await firefox.launch(); // {headless: true, args: ['--disable-http2']}
        const context = await browser.newContext({ ignoreHTTPSErrors: true });
        const basePage = await context.newPage();
        return basePage;
}
}
