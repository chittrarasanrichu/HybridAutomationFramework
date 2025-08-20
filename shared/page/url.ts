import { Locator, Page } from "@playwright/test";

 export class urlMethods{
    readonly page : Page;
    readonly baseUrl : Locator;
    constructor(page){
        this.baseUrl=page.goto("https://www.redbus.in/" , {
  waitUntil: 'domcontentloaded',
  timeout: 60000,
});
    }
}