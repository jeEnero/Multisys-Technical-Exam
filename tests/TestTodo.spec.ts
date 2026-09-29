import { test, expect } from '@playwright/test';

test.describe('Todo App Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
  });

  test('user can add, complete, and filter todo items', async ({ page }) => {

    // Step 1 & 2: Add 3 todos
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.fill('Test Todo Item');
    await todoInput.press('Enter');

    await todoInput.fill('Mahal ko si Farah');
    await todoInput.press('Enter');

    await todoInput.fill('Yes Lord');
    await todoInput.press('Enter');

    // Step 3: Verify todo count
    await expect(page.locator('.todo-count')).toContainText('3');

    // Step 4: Complete ONE todo
    const todoItems = page.getByTestId('todo-item');

    await todoItems
      .filter({ hasText: 'Test Todo Item' })
      .getByRole('checkbox')
      .check();

    // Step 5: Verify completed class
    await expect(
      todoItems.filter({ hasText: 'Test Todo Item' })
    ).toHaveClass(/completed/);

    // Step 6: Filter Active
    await page.getByRole('link', { name: 'Active' }).click();

    await expect(page.getByText('Mahal ko si Farah')).toBeVisible();
    await expect(page.getByText('Yes Lord')).toBeVisible();
    await expect(page.getByText('Test Todo Item')).toBeHidden();

    // Step 7: Filter Completed
    await page.getByRole('link', { name: 'Completed' }).click();

    await expect(page.getByText('Test Todo Item')).toBeVisible();
    await expect(page.getByText('Mahal ko si Farah')).toBeHidden();
    await expect(page.getByText('Yes Lord')).toBeHidden();

  });

});