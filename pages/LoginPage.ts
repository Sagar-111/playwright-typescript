import{Locator, Page} from '@playwright/test';

export class LoginPage{

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page:Page){
        this.page=page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator('input[type="submit"]');
        this.loginErrorMessage = page.locator('.error-button');
    }

    async navigate(){
        await this.page.goto('');
    }

    async login(username:string, password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}