import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', ()=>{

    test('should login with credentials', async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/');
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
    });

    test('should show error on invalid credentials', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/');
        await loginPage.login('username@incorrect.com', 'WrongPW');
        await expect(loginPage.loginErrorMessage).toBeVisible();
    });

});
