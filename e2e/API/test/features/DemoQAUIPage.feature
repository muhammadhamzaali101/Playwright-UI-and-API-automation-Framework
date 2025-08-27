Feature: DEMOQA APi Testing

    Background:
        Given The API base URL of DemoQA website

    @API
    Scenario Outline: TC08- Scanario A - Verify creation of user account with valid data
        When A POST request is made to "Account/v1/User" with the userName and Password
        Then The response status code should be 201 and user should be created successfully
    
    @API
    Scenario Outline: TC08 - Scenario B - Verify creation of user account with invalid data
        When A POST request is made to "Account/v1/User" with invalid userName and Password
        Then The response status code should be 400 and validation message is displayed

    @API
    Scenario Outline: TC09 - Scenario A - Verify books are created
        Given Token is generated using "Account/v1/GenerateToken"
        When A POST request is made to "BookStore/v1/Books" and create list of books
        Then The response status code and message should be displayed

# ----In TC09 Scenario A---Token is generated Succesfuly authorization is done but every time it is showing message that "Incorrect User ID". Saem response even on postman----


    @API
    Scenario Outline: TC09 - Scenario B - Verify response when autorization is not made 
        Given Token is generated using "Account/v1/GenerateToken"
        When A POST request is made to "BookStore/v1/Books" without autorization
        Then The response with 401 and "User not authorized!" should be generated
    
    
    @API
    Scenario Outline: TC10 - Scenario A - Verify response when books are removed 
        Given Token is generated using "Account/v1/GenerateToken"
        When A POST request is made to "BookStore/v1/Books" and create list of books
        And A POST request is made to "BookStore/v1/Books?UserId=" to remove books
        Then The response status code and message should be displayed
        
# ----In TC10 Scenario A---Token is generated Succesfuly authorization is done but every time it is showing message that "Incorrect User ID". Saem response even on postman----

    
    @API
    Scenario Outline: TC10 - Scenario B - Verify response when books are removed without authorozation
        Given Token is generated using "Account/v1/GenerateToken"
        When A POST request is made to "BookStore/v1/Books" and create list of books
        And A POST request is made to "BookStore/v1/Books?UserId=" to remove books without authorization
        Then The response with 401 and "User not authorized!" should be generated