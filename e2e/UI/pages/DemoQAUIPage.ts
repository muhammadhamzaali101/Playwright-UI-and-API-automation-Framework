import {expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
import { fixture } from "../hooks/pageFixture";

export default class DemoQAUIPage{

    private base: PlaywrightWrapper;

    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page)
        fixture.page=page;
    }

    // Selectors
    private Elements={
        dashboardContent:"div.home-banner a img",
        dashboardCards:"div.card-body > h5",
        pageHeader:"div.pattern-backgound.playgound-header > div",
        SideNavElementList:"div.element-list > ul >li > span",
        addTableBtn:"#addNewRecordButton",
        regFormHeading:"#registration-form-modal",
        firstName:"#firstName",
        lastName:"#lastName",
        email:"#userEmail",
        age:"#age",
        salary:"#salary",
        department:"#department",
        submitForm:"#submit",
        addedDataP1:'div.rt-table > div.rt-tbody > div:nth-child(',
        addedDataP2:') > div > div:nth-child(',
        editRow:'#edit-record-2',
        brokenImg:"img:nth-child(6)",
        borkenImgLabel:'p:nth-child(5)',
        mob:"#userNumber",
        dob:"#dateOfBirthInput",
        dobDay:"div.react-datepicker__day.react-datepicker__day--",
        dobMonth:"select[class='react-datepicker__month-select']",
        dobYear:"select[class='react-datepicker__year-select']",
        subject:"#subjectsInput",
        address:"#currentAddress",
        state:"#react-select-3-input",
        city:"#react-select-4-input",
        image:"#uploadPicture",
        genMale:"#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)",
        genFemale:"#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(2)",
        genOther:"#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)",
        hobbySports:"#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)",
        hobbyRead:"#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2)",
        hobbyMusic:"#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)",
        studFormSavedDataP1:" table > tbody > tr:nth-child(",
        studFormSavedDataP2: ") > td:nth-child(2)",
        StartProgressBarBtn:"#startStopButton",
        progressBar:"#progressBar > div",
        toolTipBtn:"#toolTipButton",
        toolTip:"#buttonToolTip",
        dragableElement:"#draggable",
        dropableElement:"div.simple-drop-container > #droppable",
        textInDropaable:"div.simple-drop-container > #droppable > p"

    }


    // Functions
    async navigateToUrl(url:string){
        await this.base.goto(url);
        await this.base.waitForElement(this.Elements.dashboardContent)
        await this.base.assetElementToVisible(this.Elements.dashboardContent)
    }
    async clickDashboardCards(cardName:string){
        await this.base.clickCard(this.Elements.dashboardCards,cardName)
        await this.base.verifyElementText(this.Elements.pageHeader,cardName)
    }

    async clickSideNavElement(SidenavEle:string){
        await this.base.clickEle(this.Elements.SideNavElementList,SidenavEle)
        await this.base.verifyElementText(this.Elements.pageHeader,SidenavEle)
    }

    async clickAddInTable(){
        await this.page.locator(this.Elements.addTableBtn).click()
        await this.base.verifyElementText(this.Elements.regFormHeading,"Registration Form")
    }
    async clickSubmit(){
        await this.page.locator(this.Elements.submitForm).click()
    }
    async fillRegForm(fNam:string,lNam:string,email:string,age:string,salary:string,department:string){
        await this.base.inputValues(this.Elements.firstName,fNam)
        await this.base.inputValues(this.Elements.lastName,lNam)
        await this.base.inputValues(this.Elements.email,email)
        await this.base.inputValues(this.Elements.age,age)
        await this.base.inputValues(this.Elements.salary,salary)
        await this.base.inputValues(this.Elements.department,department)
        await this.clickSubmit()
    
    }

    async verifyRegUser(row:string,fNam:string,lNam:string,email:string,age:string,salary:string,department:string){
        let userData: any = ["",fNam,lNam,age,email,salary,department];
        for(let i = 1 ;i<=6 ; i++){
            await this.base.containsText(this.Elements.addedDataP1+row+this.Elements.addedDataP2+i+")", userData[i])
        }
    }

    async clickEditIcon(){
        await this.page.locator(this.Elements.editRow).click()
        await this.base.verifyElementText(this.Elements.regFormHeading,"Registration Form")
    }

    async verifyBrokenImg(){
        await this.base.verifyElementText(this.Elements.borkenImgLabel,"Broken image")
        await this.base.toHaveAtt(this.Elements.brokenImg,"src","/images/Toolsqa_1.jpg")
    }

    async checkGender(gender:string){
        if(gender === "Male"){
            await this.base.checkCheckBox(this.Elements.genMale)
        }
        else if(gender === "Female"){
            await this.base.checkCheckBox(this.Elements.genFemale)
        }
        else if(gender === "Other"){
            await this.base.checkCheckBox(this.Elements.genOther)
        }
    }

    async checkHobby(hobby:string){
        if(hobby === "Sports"){
            await this.base.checkCheckBox(this.Elements.hobbySports)
        }
        else if(hobby === "Reading"){
            await this.base.checkCheckBox(this.Elements.hobbyRead)
        }
        else if(hobby === "Music"){
            await this.base.checkCheckBox(this.Elements.hobbyMusic)
        }
    }
    
    async uploadImage(path:string){
        const filePaths = [path]; 
        await this.page.locator(this.Elements.image).setInputFiles(filePaths);
    }
    async zoonOut(){
        await this.page.addStyleTag({
            content: 'html { zoom: 0.6; }', // Adjust the zoom value as needed (e.g., 0.6 for 66% zoom)
          });

    }

    async fillStudentForm(fName:string,lNam:string,email:string,gender:string,mob:string,day:string,month:string,year:string,subj:string,hobb:string,img:string,address:string,state:string,city:string){
        
        await this.base.inputValues(this.Elements.firstName,fName)
        await this.base.inputValues(this.Elements.lastName,lNam)
        await this.base.inputValues(this.Elements.email,email)
        await this.base.inputValues(this.Elements.mob,mob)

        await this.page.locator(this.Elements.dob).click()
        await this.base.selectOptionLabel(this.Elements.dobMonth,month)
        await this.base.selectOptionLabel(this.Elements.dobYear,year)
        await this.page.locator(this.Elements.dobDay+"0"+day).click()

        await this.page.type(this.Elements.subject,subj)
        await this.page.keyboard.press('Enter')

        await this.base.inputValues(this.Elements.address,address)

        await this.checkGender(gender)
        await this.checkHobby(hobb)
        await this.uploadImage(img)

        // Tried zoom out because when test start then that form is not fully vivible in browser
        // await this.zoonOut()

        await this.base.inputValues(this.Elements.state,state)
        await this.page.keyboard.press('Enter')
        await this.base.inputValues(this.Elements.city,city)
        await this.page.keyboard.press('Enter')
        await this.clickSubmit()


    }

    async verifySavedStudentData(fName:string,lNam:string,email:string,gender:string,mob:string,day:string,month:string,year:string,subj:string,hobb:string,img:string,address:string,state:string,city:string){
        
        const image = img.replace(/^\.\/+/i, '')
        let userData: any = ["", fName +" "+ lNam, email, gender, mob , day+" "+month+","+year, subj, hobb, image, address, state+" "+city];
        for(let i = 1 ;i<=10 ; i++){
            await this.base.containsText(this.Elements.studFormSavedDataP1+i+this.Elements.studFormSavedDataP2, userData[i])
        }
    }

    async startProgressBar(){
        await this.base.waitForElement(this.Elements.StartProgressBarBtn)
        await this.page.locator(this.Elements.StartProgressBarBtn).click()
    }

    async assertProgressBar(){
        await this.page.waitForTimeout(13000)
        let barCount = await this.page.locator(this.Elements.progressBar).textContent()
        await this.base.toEqual(barCount,"100%")
        await this.base.toHaveAtt(this.Elements.progressBar,"aria-valuenow","100")
        await this.base.toHaveAtt(this.Elements.progressBar,"style","width: 100%;")
    }

    async hoverOverToolTip(){
        let ele = await this.page.locator(this.Elements.toolTipBtn)
        // await ele.hover() // It's not working thay's why using click 
        await ele.click()

    }
    
    async verifyHover(){
        let toolTipText = await this.page.locator(this.Elements.toolTip).textContent()
        await this.base.assetElementToVisible(this.Elements.toolTip)
        await this.base.toEqual(toolTipText,"You hovered over the Button")
    }

    async dragAndDrop(){
        await this.base.verifyElementText(this.Elements.textInDropaable,"Drop here")
        let sourceEle = await this.page.locator(this.Elements.dragableElement)
        let targetEle = await this.page.locator(this.Elements.dropableElement)
        await sourceEle.dragTo(targetEle);
    }
    
    async verifyElementDropped(){
        await this.base.verifyElementText(this.Elements.textInDropaable,"Dropped!")
    }

}