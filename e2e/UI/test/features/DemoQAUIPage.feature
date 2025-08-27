Feature: DEMOQA UI Testing

    Background:
        Given user is on DemoQA website

    @UI
    Scenario Outline: TC01- Scenario A - Verify that user can enter new data in table
        Given User go to "Web Tables" in "Elements" Screen
        When User Add new data and submit
        Then Verify A new row should be created in table
    
    @UI
    Scenario Outline: TC01- Scenario A - Verify that user can enter new data in table
        Given User go to "Web Tables" in "Elements" Screen
        When User edit data and submit
        Then Verify data is edited in table

    @UI
    Scenario Outline: TC02 - Verify Broken image
        When User go to "Broken Links - Images" in "Elements" Screen
        Then Verify Image is broken
    
    @UI
    Scenario Outline: TC03- Verify that user can submit the form
        Given User go to "Practice Form" in "Forms" Screen
        When User Add student data with Image and Submit
        Then Verify form is submited with all data provided

    
    @UI
    Scenario Outline: TC04- Verify THE Progreee Bar
        Given User go to "Progress Bar" in "Widgets" Screen
        When User start progress bar
        Then Verify progress bar is completed
    
    
    @UI
    Scenario Outline: TC05- Verify the tooltip
        Given User go to "Tool Tips" in "Widgets" Screen
        When User Hover on tooltip
        Then Verify content of tooltip
    
    
    @UI
    Scenario Outline: TC06- Verify user can drag and drop
        Given User go to "Droppable" in "Interactions" Screen
        When User Drag and Drop box
        Then Verify box is dropped successfully

    