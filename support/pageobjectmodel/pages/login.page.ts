import { expect, type Page } from '@playwright/test';
import { LoginPageData } from '../../test-data/loginPage.data';
import { LoginErrorType } from '../../test-data/loginPageErrors.enum';

export default class LoginPracticePage {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }

    public async closePage() {
        await this.page.close();
    }

    // Locators

    private usernameInput = () => this.page.locator("#username");
    private passwordInput = () => this.page.locator("#password");
    private submitButton = () => this.page.locator("#submit");
    private errorElement = () => this.page.locator("#error");

    // Methods

    public async fillUsername(username: string){
        await this.usernameInput().fill(username);
    }

    public async fillPassword(password: string){
        await this.passwordInput().fill(password);
    }

    public async clickSubmit(){
        await this.submitButton().click();
    }

    public async checkErrorMessage(errorType : LoginErrorType){
        await expect(this.errorElement()).toHaveText(LoginPageData.getErrorMessage(errorType));
    }
}