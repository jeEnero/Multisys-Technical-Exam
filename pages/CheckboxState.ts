import {Page} from '@playwright/test';
import { checkboxInteractionLocators } from '../locators/checboxInteraction';

export class CheckboxStatePage {
  constructor(private page: Page) {
  }


async checkFirst() {
    await this.page.locator(checkboxInteractionLocators.checkbox1).check();
  }

  async uncheckSecond() {
     await this.page.locator(checkboxInteractionLocators.checkbox2).uncheck();
  }


getCheckbox(index: number) {
    return this.page.locator('#checkboxes input[type="checkbox"]').nth(index);
  }
  }

