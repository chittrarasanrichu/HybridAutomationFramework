import { test, expect , chromium } from '@playwright/test';
import { reusableFunction } from '../shared/utils/usefulMethod.ts';
import { urlMethods } from '../shared/page/url.ts';
import { dashboard } from '../shared/page/dashborad.ts';
import {Dataset1 as data} from '../shared/testData/data.json'

test.describe('ticket booking flow' , async()=>{

 const reusableFun = new reusableFunction();  

test('RedBusDestinationselection @TC001', async () => {

        const page = await reusableFun.browserLaunch();
        const urlObj = new urlMethods(page);
        const dashboardObj = new dashboard(page);
        await urlObj.baseUrl;
        await dashboardObj.fromField(page);
        await dashboardObj.textValidationFromCity();
        await dashboardObj.toField(page);
        await dashboardObj.textValidationToCity();
        await dashboardObj.tomorrowsDate();
        await dashboardObj.totalBusCount();
        
});

});
