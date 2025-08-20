import { test, expect , chromium } from '@playwright/test';

export class reusableFunction{

async browserLaunch(){
        const browser = await chromium.launch({headless: false, args: ['--disable-http2']});
        const context = await browser.newContext();
        const basePage = await context.newPage();
        return basePage;
}
}
