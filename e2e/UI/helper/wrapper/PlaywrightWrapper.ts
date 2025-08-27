import { Locator, Page, expect } from "@playwright/test";

export default class PlaywrightWrapper {
    base: any;
    Export: any;

    constructor(private page: Page) {

    }
    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async WaitAndClick(locator: string) {
        const element = this.page.locator(locator)
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }
    async NavigateTo(link: string) {
        await Promise.all([
            this.page.click(link)
        ])
    }

    async clickCard(element: string, app: string) {
        const listItem = await this.page.locator(element, { hasText: app })
        await listItem.click()
    }

    async verifyElementText(ele:string,name:string){
        let headerName = await this.page.locator(ele).textContent()
        await this.toEqual(headerName,name)
    }

    async clickEle(element: string, app: string) {
        const listItem = this.page.locator(element, { hasText: app }).first()
        await listItem.click()
    }

    async waitForElement(element: string) {
        await this.page.locator(element).waitFor({ state: "visible" })

    }
    async assetElementToVisible(ele: string) {
        await expect(this.page.locator(ele)).toBeVisible();
    }

    async inputValues(ele:string,value:string){
        await this.page.locator(ele).fill('')
        await this.page.type(ele, value);
    }

    async checkCheckBox(ele:string){
        await this.assetElementToVisible(ele)
        await this.page.locator(ele).click()
    }

    async toEqual(recTxt: any, ExpText: any) {
        await expect(recTxt).toEqual(ExpText)
    }
    async selectOptionLabel(ele: string, label: string) {
        
        await this.page.locator(ele).selectOption({ label: label })
    }
    async assetElementNotToVisible(ele: string) {
        await expect(this.page.locator(ele)).not.toBeVisible();
    }
    async containsText(ele: string, text: string) {
        await expect(this.page.locator(ele)).toContainText(text)
    }

    async toHaveAtt(ele:string,att:string, val:string){
        await expect(this.page.locator(ele)).toHaveAttribute(att,val);
    }
    async NotToHaveAtt(ele:string,att:string, val:string){
        await expect(this.page.locator(ele)).not.toHaveAttribute(att,val);
    }
}