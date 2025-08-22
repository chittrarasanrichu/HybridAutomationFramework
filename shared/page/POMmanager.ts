import { Page } from "@playwright/test";
import { dashboard } from "./dashborad";
import {urlMethod} from "./url" ;

export class pomManager{
    readonly page : Page
    readonly dashBoard : dashboard;
    readonly url : urlMethod;

constructor(page :Page){
    this.page=page;
    this.dashBoard = new dashboard(this.page);
    this.url= new urlMethod(this.page);
}
getDashboard(){
    return this.dashBoard;
}
getUrl(){
    return this.url;
}
}