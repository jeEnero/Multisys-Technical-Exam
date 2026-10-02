import { test, expect } from '@playwright/test';
import { BASE_URL } from '../Util/dynamicContentUtil';
import { DynamicContentPage } from '../pages/dynamicContent';



test.describe('Dynamic Content Tests ', () => {

  test('Verify that content changes on page refresh', async ({ page }) => {
    const dynamicContentPage = new DynamicContentPage(page);

    await page.goto(BASE_URL);

    const initialTexts = await dynamicContentPage.getContentTexts();


    await dynamicContentPage.reloadPage();

  
    const refreshedTexts = await dynamicContentPage.getContentTexts();

  
    expect(refreshedTexts).not.toEqual(initialTexts);

  });

});