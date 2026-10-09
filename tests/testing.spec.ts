import {test, expect} from '@playwright/test';



test('Verify the title of the page', async ({page}) => {
    await page.goto('https://www.multisyscorp.com/e-negosyo/');

    await expect(page.locator('text = Ready to transform your business today?')).toBeVisible();

   
    await expect(page.locator('text = Get in touch')).toBeVisible();
    
    await page.locator('#headlessui-listbox-button-1').click();
    await page.locator('text = General Inquiry').click();
    await page.locator('#full_name').fill('Jerome');
    await page.locator('#email').fill('Test@gmail.com')
    await page.locator('#mobile_number').fill('09123456789')
    await page.locator('#messages').fill('This is a test message');
    await page.getByRole('button', {name: 'Privacy Statement.'}).click();
    await page.locator('#accepted_tc').check();
     await page.getByRole('button', {name: 'CONTINUE'}).click();
    // // await page.getByRole('button', {name: 'Submit'}).click();   

})



