import { type Page, type Download, expect } from '@playwright/test';

export default class DownloadPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://the-internet.herokuapp.com/download");
    }

    // Locators

    downloadLink = () => this.page.getByText('Deadlock1.class');

    // Methods

    public getDownloadPromise(): Promise<Download> {
        return this.page.waitForEvent('download');
    }

    public async clickOnDownloadLink() {
        await this.downloadLink().click();
    }

    public async getDownloadPath(download: Download): Promise<string> {
        return await download.path();
    }

    public async expectDownloadPathToBeDefined(download: Download) {
        expect(await this.getDownloadPath(download)).toBeDefined();
    }


}