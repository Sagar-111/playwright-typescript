import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async getInventoryItemCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  async addItemToCartByIndex(index: number) {
    await this.inventoryItems.nth(index).locator('button').click();
  }

  async getCartCount(): Promise<string | null> {
    return await this.cartIcon.textContent();
  }
}