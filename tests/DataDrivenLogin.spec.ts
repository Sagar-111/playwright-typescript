import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import testData from '../fixtures/loginTestData.json'

const users = [
    { ...testData.validUser, expectSuccess: true },
    { ...testData.invalidUser, expectSuccess: false },
    { ...testData.lockedUser, expectSuccess: false }
]

test.describe('Login test Using Data from json', () => {
    for (const user of users) {
        test(`login test for ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate('/');
            await loginPage.login(user.username, user.password);

            if (user.expectSuccess) {
                await expect(page).toHaveTitle('Swag Labs');
                await expect(page).toHaveURL('/inventory.html');
            } else {
                await expect(loginPage.loginErrorMessage).toBeVisible();
            }
        });
    }
});
