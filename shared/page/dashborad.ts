import { Locator, Page , expect } from "@playwright/test";

export class dashboard{
    readonly fromtextBox : Locator;
    readonly page : Page;
    readonly autoSuggestionDrop : Locator;
    readonly fromCityTxt : Locator;
    constructor(page){
        this.page = page
        this.fromtextBox= page.locator(`div[class*="labelCityWrapper___"] div[class*='label']`).
        nth(0);
        this.autoSuggestionDrop= page.locator('div[role="listbox"] div div div').nth(0);
        this.fromCityTxt=page.locator('div[class*="labelCityWrapper___"] div').nth(1);

    }

    async fromField(page){
        await this.fromtextBox.click();
        await this.fromtextBox.type('Tambaram');
        await page.waitForTimeout(1000);
        await this.autoSuggestionDrop.click();
        await page.waitForTimeout(1000);

    }
    async textValidation(page){
      const fromCityArr = await this.fromCityTxt.allTextContents();
      const fromCity = fromCityArr.toString();
      console.log("fromCity :" , fromCity);
      expect(fromCity).toBe("Tambaram, Chennai");
    }

}