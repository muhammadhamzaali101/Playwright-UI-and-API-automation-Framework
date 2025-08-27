import { Given, When, Then } from "@cucumber/cucumber";
import{ page,browser,assert,DemoQA} from "../../hooks/hook";
import { url,firstName,lastname,age,email,salary,department,EditFirstName,EditLastname,
        stu_fname,stu_lname,stu_gender,stu_mobile,stu_DOBDay,stu_DOBMonth,stu_DOBYear,
        stu_sub,stu_hobbies,stu_img,stu_address,stu_city,stu_state, stu_email } from '../../../../Dateasets_UI';

Given('user is on DemoQA website', async function () {
    await DemoQA.navigateToUrl(url)
});
        
        
Given('User go to {string} in {string} Screen', async function (SideNavEle,cardName) {
    await DemoQA.clickDashboardCards(cardName)
    await DemoQA.clickSideNavElement(SideNavEle)

});
When('User Add new data and submit', async function () {
    await DemoQA.clickAddInTable()
    await DemoQA.fillRegForm(firstName,lastname,email,age,salary,department)
});

Then('Verify A new row should be created in table', async function () {
    await DemoQA.verifyRegUser("4",firstName,lastname,email,age,salary,department)
});

When('User edit data and submit', async function () {
    
    await DemoQA.clickEditIcon()
    await DemoQA.fillRegForm(EditFirstName,EditLastname,email,age,salary,department)
});

Then('Verify data is edited in table', async function () {
    await DemoQA.verifyRegUser("2",EditFirstName,EditLastname,email,age,salary,department)
});

Then('Verify Image is broken', async function () {
    await DemoQA.verifyBrokenImg()
});
        
When('User Add student data with Image and Submit', async function () {
    await DemoQA.fillStudentForm(stu_fname,stu_lname,stu_email,stu_gender,
                                stu_mobile,stu_DOBDay,stu_DOBMonth,stu_DOBYear,
                                stu_sub,stu_hobbies,stu_img,stu_address,stu_state,stu_city)
});

Then('Verify form is submited with all data provided', async function () {
    await DemoQA.verifySavedStudentData(stu_fname,stu_lname,stu_email,stu_gender,
                                        stu_mobile,stu_DOBDay,stu_DOBMonth,stu_DOBYear,
                                        stu_sub,stu_hobbies,stu_img,stu_address,stu_state,stu_city)
});

When('User start progress bar', async function () {
    await DemoQA.startProgressBar()
});

Then('Verify progress bar is completed', async function () {
    await DemoQA.assertProgressBar()
});

When('User Hover on tooltip', async function () {
    await DemoQA.hoverOverToolTip()
});

Then('Verify content of tooltip', async function () {
    await DemoQA.verifyHover()
});

When('User Drag and Drop box', async function () {
    await DemoQA.dragAndDrop()
});

Then('Verify box is dropped successfully', async function () {
    await DemoQA.verifyElementDropped()
});