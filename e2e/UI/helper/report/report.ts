const report = require("multiple-cucumber-html-reporter");

export const options = {

    jsonDir: "test-results",
    reportPath: "e2e/UI/test-results/",
    reportName: "Playwright UI Automation Report",
    pageTitle: "DEMOQA App test report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Automation - PC",
        platform: {

            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Test" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
        screenshots: [] as string[],
    },
};
report.generate(options);