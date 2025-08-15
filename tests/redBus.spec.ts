import { test, expect , chromium } from '@playwright/test';

test('RedBusDestinationselection', async () => {

  const browser = await chromium.launch({headless: false, args: ['--disable-http2']});
    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto("https://www.redbus.in/" );
        await page.locator(`div[class*="labelCityWrapper___"] div[class*='label']`).nth(0).click();
        await page.locator('div[class*="suggestionInputWrapper___"] div div').type('Tambaram');
        await page.waitForTimeout(1000);
        await page.locator('div[role="listbox"] div div div').nth(0).click();
        await page.waitForTimeout(1000);
        const fromCityArr = await page.locator('div[class*="labelCityWrapper___"] div').nth(1).allTextContents();
        const fromCity = fromCityArr.toString();
        console.log("fromCity :" , fromCity);
        expect(fromCity).toBe("Tambaram, Chennai");
});
