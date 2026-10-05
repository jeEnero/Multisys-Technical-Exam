import { test, expect } from '@playwright/test';
import { LOGIN_URL, SECURE_URL,USERNAME, PASSWORD, INVALID_PASSWORD, INVALID_USERNAME, BLANK_PASSWORD, BLANK_USERNAME} from '../Util/loginUtil';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' });
  });

  test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(USERNAME, PASSWORD);
    await expect(page).toHaveURL(SECURE_URL);
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
  });

   test('User cant login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(INVALID_USERNAME, INVALID_PASSWORD);
    await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
   });

   test('User cant login with Blank Fields', async ({ page }) => {
         const loginPage = new LoginPage(page);
          await loginPage.enterUsername(BLANK_USERNAME, BLANK_PASSWORD);
          await page.click('button[type="submit"]');
          await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
   });

  });