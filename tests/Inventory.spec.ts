import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import testData from '../fixtures/loginTestData.json';

test.describe('Inventory Page', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('should display inventory items after login', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const count = await inventoryPage.getInventoryItemCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should add item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItemToCartByIndex(0);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
  });

});