import { test, expect , chromium } from '@playwright/test';
import { reusableFunction } from '../shared/useFulMethod';
import { urlMethods } from '../shared/page/url.ts';
import { dashboard } from '../shared/page/dashborad.ts';

test.describe('ticket booking flow' , async()=>{

 const reusableFun = new reusableFunction(); 

 

test('RedBusDestinationselection @TC001', async () => {

        const page = await reusableFun.browserLaunch(); 
        const urlObj = new urlMethods(page);
        const dashboardObj = new dashboard(page);
        await urlObj.baseUrl;
        await dashboardObj.fromField(page);
        await dashboardObj.textValidation(page);
        
});

});
