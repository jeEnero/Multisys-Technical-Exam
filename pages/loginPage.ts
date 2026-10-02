import {Page} from '@playwright/test';
import { LoginLocators } from '../locators/loginLocators';  



export class LoginPage {
  constructor(private page: Page) {
  }
    async enterUsername(username: string, password: string) {
    await this.page.fill(LoginLocators.usernameInput, username);
    await this.page.fill(LoginLocators.passwordInput, password);
    await this.page.click(LoginLocators.submitButton);
  }}