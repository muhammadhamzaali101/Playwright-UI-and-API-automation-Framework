import { Given, When, Then } from "@cucumber/cucumber";
import{ Page,expect} from "@playwright/test";
import { url,user,pass,inval_pass,validationMsg,validationCode ,BookvalidationCode,BookvalidationMsg} from '../../../../Dateasets_API';
import axios, { AxiosError } from 'axios';

let apiUrl = '';
let token = '';


Given('The API base URL of DemoQA website', async function () {
    apiUrl = url;
});

When('A POST request is made to {string} with the userName and Password', async function (endpoint) {
    
    try {
        const requestData = {
            userName: user,
            password: pass,
        };
        
        const response = await axios.post(`${apiUrl}${endpoint}`, requestData);
        this.apiResponse = response;
        
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
        throw error
    }
});

Then('The response status code should be {int} and user should be created successfully', async function (statusCode) {
    await expect(this.apiResponse.status).toBe(statusCode)
    await expect(this.apiResponse.data).toMatchObject({ username: user })
});


When('A POST request is made to {string} with invalid userName and Password', async function (endpoint) {
    try {
        const requestData = {
            userName: user,
            password: inval_pass,
        };
        const response = await axios.post(`${apiUrl}${endpoint}`, requestData);
        this.apiResponse = response;
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});

Then('The response status code should be {int} and validation message is displayed', async function (statusCode) {
    await expect(this.apiResponse.status).toBe(statusCode)
    await expect(this.apiResponse.data).toMatchObject({ code: validationCode,message: validationMsg})
});


When('Token is generated using {string}', async function (endpoint) {
    try {
        const requestData = {
            userName: user,
            password: pass,
        };
        const response = await axios.post(`${apiUrl}${endpoint}`, requestData);
        this.apiResponse = response;
        token = this.apiResponse.data.token
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});


When('A POST request is made to {string} and create list of books', async function (endpoint) {
    try {
        const headers = {
            'Authorization': "Bearer "+token,
        };

        const requestBody = {
            userId: user,
            collectionOfIsbns: [
              {
                isbn: "BookA"
              }
            ]
        };
           
        const response = await axios.post(`${apiUrl}${endpoint}`, requestBody, {headers});
        this.apiResponse = response;
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});

Then('The response status code and message should be displayed', async function () {
    await expect(this.apiResponse.status).toBe(401)
    await expect(this.apiResponse.data).toMatchObject({ code: BookvalidationCode,message: BookvalidationMsg})
});

When('A POST request is made to {string} without autorization', async function (endpoint) {
    try {
        
        const requestBody = {
            userId: user,
            collectionOfIsbns: [
              {
                isbn: "BookA"
              }
            ]
        };
           
        const response = await axios.post(`${apiUrl}${endpoint}`, requestBody);
        this.apiResponse = response;
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});

Then('The response with {int} and {string} should be generated', async function (statusCode,msg) {
    await expect(this.apiResponse.status).toBe(statusCode)
    await expect(this.apiResponse.data).toMatchObject({message: msg})
});

When('A POST request is made to {string} to remove books', async function (endpoint) {
    try {
        const headers = {
            'Authorization': "Bearer "+token,
        };
           
        const response = await axios.delete(`${apiUrl}${endpoint}${user}`, {headers});
        this.apiResponse = response;
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});

When('A POST request is made to {string} to remove books without authorization', async function (endpoint) {
    try {
           
        const response = await axios.delete(`${apiUrl}${endpoint}${user}`);
        this.apiResponse = response;
    }
    catch (error) {
        const apiError = error as AxiosError;
        this.apiResponse = apiError.response
    }
});