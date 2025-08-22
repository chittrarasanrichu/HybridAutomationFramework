import { Locator, Page , expect } from "@playwright/test";

export class dashboard{
    readonly fromtextBox : Locator;
    readonly page : Page;
    readonly autoSuggestionDrop : Locator;
    readonly fromCityTxt : Locator;
    readonly toCityTxtBox : Locator;
    readonly toCityTxt : Locator;
    readonly calenderIcon : Locator;
    readonly tomorrowDateBtn : Locator;
    readonly busCount : Locator;
    readonly searchBtn : Locator;

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
        this.tomorrowDateBtn=page.locator("//button[text()='Tomorrow']");
        this.busCount=page.locator('div[class*="invWrap__ind-search-styles-module-scss-10HIx "] div ul li');
        this.searchBtn=page.locator('button[class*="primaryButton"] i');

    }

    async fromField(page , fromCity){
        await this.fromtextBox.click();
        await this.fromtextBox.type(fromCity);
        await page.waitForTimeout(1000);
        await this.autoSuggestionDrop.click();
        await page.waitForTimeout(1000);

    }
    async textValidationFromCity(fromLocationExpectedTxt){
      const fromCityArr = await this.fromCityTxt.allTextContents();
      const fromCity = fromCityArr.toString();
      console.log("fromCity :" , fromCity);
      expect(fromCity).toBe(fromLocationExpectedTxt);
    }
    async toField(page , toLocation){
        await this.toCityTxtBox.click();
        await this.toCityTxtBox.type(toLocation);
        await page.waitForTimeout(1000);
        await this.autoSuggestionDrop.click();
        await page.waitForTimeout(1000);

    }
    async textValidationToCity(toLocationExpectedTxt){
      const toCityArr = await this.toCityTxt.allTextContents();
      const toCity = toCityArr.toString();
      console.log("ToCity :" , toCity);
      expect(toCity).toBe(toLocationExpectedTxt);
    }
    async dataPicker(){
      await this.calenderIcon.click();

      
    }
    async tomorrowsDate(){
      const btnVisibility = await this.tomorrowDateBtn.isVisible(); 
       
      if(btnVisibility){
        await this.tomorrowDateBtn.click();
      }
      else{
      console.log('btn is visible ?' , btnVisibility);
      await this.searchBtn.click();
      }
      
    }
    async totalBusCount(){
      await this.page.waitForTimeout(2000);
      const totalBus = await this.busCount.count();
      console.log('total number of available' , totalBus);   
      
    }
    

}