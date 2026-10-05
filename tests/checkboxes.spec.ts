import { test, expect } from '@playwright/test';
import { CheckboxStatePage } from '../pages/CheckboxState';
import { BASE_URL } from '../Util/checboxInteractionUtil';
test.describe('Checkboxes Tests (POM)', () => {

  test('Modify Checkbox State', async ({ page }) => {
  
    const checkboxPage = new CheckboxStatePage(page);


    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' })


    const cb1 = checkboxPage.getCheckbox(0);
    await expect(cb1).not.toBeChecked();
    
    await checkboxPage.checkFirst();
    await expect(cb1).toBeChecked();


    const cb2 = checkboxPage.getCheckbox(1);
    await expect(cb2).toBeChecked();
    
    await checkboxPage.uncheckSecond();
    await expect(cb2).not.toBeChecked();
  });

});