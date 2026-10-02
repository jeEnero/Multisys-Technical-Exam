import {Page} from '@playwright/test';
import { DynamicContentLocators } from '../locators/dynamicContentLocators';


export class DynamicContentPage {
  constructor(private page: Page) {
  }

  async reloadPage() {
    await this.page.reload({
    });
  }
async getContentTexts() {
    return await this.page.locator(DynamicContentLocators.contentRows).allTextContents();
  }

}