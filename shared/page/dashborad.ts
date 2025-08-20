import { Locator, Page , expect } from "@playwright/test";

export class dashboard{
    readonly fromtextBox : Locator;
    readonly page : Page;
    readonly autoSuggestionDrop : Locator;
    readonly fromCityTxt : Locator;
    readonly toCityTxtBox : Locator;
    readonly toCityTxt : Locator;
    readonly calenderIcon : Locator;

    constructor(page){
        this.page = page
        this.fromtextBox= page.locator(`div[class*="labelCityWrapper___"] div[class*='label']`).
        nth(0);
        this.toCityTxtBox = page.locator(`div[class*="labelCityWrapper___"] div[class*='label']`).
        nth(1);
        this.autoSuggestionDrop= page.locator('div[role="listbox"] div div div').nth(0);
        this.fromCityTxt=page.locator('div[class*="labelCityWrapper___"] div').nth(1);
        this.toCityTxt=page.locator('div[class*="labelCityWrapper___"] div').nth(3);
        this.calenderIcon=page.locator('div[class*="dateInputWrapper___"] i');

    }

    async fromField(page){
        await this.fromtextBox.click();
        await this.fromtextBox.type('Tambaram');
        await page.waitForTimeout(1000);
        await this.autoSuggestionDrop.click();
        await page.waitForTimeout(1000);

    }
    async textValidationFromCity(){
      const fromCityArr = await this.fromCityTxt.allTextContents();
      const fromCity = fromCityArr.toString();
      console.log("fromCity :" , fromCity);
      expect(fromCity).toBe("Tambaram, Chennai");
    }
    async toField(page){
        await this.toCityTxtBox.click();
        await this.toCityTxtBox.type('Trichy');
        await page.waitForTimeout(1000);
        await this.autoSuggestionDrop.click();
        await page.waitForTimeout(1000);

    }
    async textValidationToCity(){
      const toCityArr = await this.toCityTxt.allTextContents();
      const toCity = toCityArr.toString();
      console.log("ToCity :" , toCity);
      expect(toCity).toBe("Trichy");
    }
    async dataPicker(){
      await this.calenderIcon.click();
      
    }
    

}