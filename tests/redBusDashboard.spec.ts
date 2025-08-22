import { test, expect , chromium } from '@playwright/test';
import { reusableFunction } from '../shared/utils/usefulMethod.ts';
import {Dataset1 as data} from '../testData/data.json'
import { pomManager } from '../shared/page/POMmanager.ts';

test.describe('ticket booking flow' , async()=>{

test('RedBusDestinationselection @TC001', async () => {

        const reusableFun = new reusableFunction();
        const page = await reusableFun.browserLaunch();
        const poManager = new pomManager(page);
        const urlObj = poManager.getUrl();
        const dashboardObj = poManager.getDashboard(); 
        await urlObj.getbaseUrl();
        await dashboardObj.fromField(page , data.fromLocation);
        await dashboardObj.textValidationFromCity(data.fromLocationExpectedTxt);
        await dashboardObj.toField(page , data.toLocation );
        await dashboardObj.textValidationToCity(data.toLocationExpectedTxt);
        await dashboardObj.tomorrowsDate();
        await dashboardObj.totalBusCount();
        
});

});
