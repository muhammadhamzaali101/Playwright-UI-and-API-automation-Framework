const report = require("multiple-cucumber-html-reporter");

export const options = {

    jsonDir: "test-results",
    reportPath: "e2e/API/test-results/",
    reportName: "Playwright API Automation Report",
    pageTitle: "API test report",
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

            { label: "Project", value: "API Automation" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
};
report.generate(options);