import {BeforeAll, AfterAll, Before, After, AfterStep, Status,} from "@cucumber/cucumber";
import { chromium, Page, Browser, test } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";
import Assert from "../helper/wrapper/assert";
import { promises as fsPromises } from "fs";
import DemoQAUI from "../pages/DemoQAUIPage";
import { options } from "../helper/report/report";


//Required Objects and Variable
let browser: Browser;
let page: Page;
let assert: Assert;
let DemoQA: DemoQAUI;
const { writeFile } = fsPromises;
let exePath = "";

// Check if an environment variable or configuration exists to override the default path
if (process.env.PLAYWRIGHT_CHROMIUM_PATH) {
  exePath = process.env.PLAYWRIGHT_CHROMIUM_PATH;
}

//cucumber default step timeout is 5s which is too quick
const DEFAULT_STEP_TIMEOUT = 90000;
setDefaultTimeout(DEFAULT_STEP_TIMEOUT);

BeforeAll(async () => {
  browser = await chromium.launch({
    executablePath: exePath,
    headless: false,
    args: ["--start-maximized"],
  });
});

Before(async () => {
  try {

    page = await browser.newPage({ viewport: null });
    await page.setViewportSize({ width: 1920, height: 1200 });
    assert = new Assert(page)
    DemoQA = new DemoQAUI(page)

  } catch (error) {
    console.log(`Before All Error: ${error}`);
    throw new Error(`Error: ${error}`);
  }
  return page;

});

AfterStep(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
      // Take a screenshot of each failed step
      const screenshotPath = `./e2e/UI/screenshots/failed-step-${Date.now()}.png`;
      await page.screenshot({ path: screenshotPath });
      options.customData.screenshots.push(screenshotPath);
    }
});

After(async (testCase) => {
  if (testCase.result && testCase.result.status === Status.PASSED) {
      // Take a screenshot at the end of each scenario (for passed tests)
      const screenshotPath = `./e2e/UI/screenshots/scenario-${Date.now()}.png`;
      await page.screenshot({ path: screenshotPath });
      options.customData.screenshots.push(screenshotPath);
      
    }
  await page.close()

})

AfterAll(async () => {
  await browser.close();
})
export { page, browser, assert, DemoQA};

