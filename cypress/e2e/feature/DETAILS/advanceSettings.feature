@XrayId_DTLS-866 @details-nightly
Feature: Royalty advance settings

    As a customer
    I want to create different advance settings
    So I can verify if the different advance settings are created

    Background: Advance settings
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category

    @advance-settings-method1
    Scenario: set template Method 1 : Fixed Percentage
        And I fill "DP1051579C0001" in the search bar contracts
        And I click on the contract "DP1051579C0001"
        And I go to the advance category
        And I click on the plus button to display the template modal
        And I click on the "Method 1 : Fixed Percentage" in the template modal
        And I fill "2020-07-01" in the field sage reporting date
        And I fill "2020-08-31" in the field payment date
        And I fill "10000.00" in the field amount currency
        And I fill "TestQA" in the field posting type
        And I fill "TestQA" in the field posting number
        And I fill "TestQA" in the field posting description
        And I fill "TestQA" in the field line description
        And I upload the files in advance
        And I click on the checkbox recoup prior periods in setup section
        And I fill "2023-01-01" in the field start date in setup section in Method 1 : Fixed Percentage
        Then the "Method 1 : Fixed Percentage" is displayed with a "10000.00" in advance page
        When I click on the "Method 1 : Fixed Percentage" in the advance page
        And the "2020-07-01" is displayed in the field sage reporting date
        And the "2020-08-31" is displayed in the field payment date
        And the "10000.00" is displayed in the field amount currency
        And the "TestQA" is displayed in the field posting type
        And the "TestQA" is displayed in the field posting number
        And the "TestQA" is displayed in the field posting description
        And the "TestQA" is displayed in the field line description
        And the "image_testQA.png" is correctly upload in advance invoice label
        And the "image_testQA.png" is correctly upload in advance spreadsheet label
        And the "2023-01-01" is displayed in the field start date in Method 1 : Fixed Percentage
        And I click on the plus button to display the template modal
        Then the templates Cross Contract Recoupment are not visible in the DOM
   
    @advance-settings-recoupment
    Scenario: set template recoupment rate per type
        And I fill "DP091178C0003" in the search bar contracts
        And I click on the contract "DP091178C0003"
        And I go to the advance category
        And I click on the plus button to display the template modal
        And I click on the "recoupment rate per type" in the template modal
        And I fill "2020-07-01" in the field sage reporting date
        And I fill "2020-08-31" in the field payment date
        And I fill "10000.00" in the field amount currency
        And I fill "TestQA" in the field posting type
        And I fill "TestQA" in the field posting number
        And I fill "TestQA" in the field posting description
        And I fill "TestQA" in the field line description
        And I upload the files in advance
        And I fill "2023-01-01" in the field start date in setup section in recoupment rate per type
        And I fill "50.00" in download audio on the scope section
        And I fill "75.00" in physical sales on the scope section
        And I select "Projects" on the items section
        And I select the project "KSDHLSB729 - Beyond the Frequency - Holy Esque - At Hopes Ravine" on the items section
        Then the "recoupment rate per type" is displayed with a "10000.00" in advance page
        When I click on the "recoupment rate per type" in the advance page
        And the "2020-07-01" is displayed in the field sage reporting date
        And the "2020-08-31" is displayed in the field payment date
        And the "10000.00" is displayed in the field amount currency
        And the "TestQA" is displayed in the field posting type
        And the "TestQA" is displayed in the field posting number
        And the "TestQA" is displayed in the field posting description
        And the "TestQA" is displayed in the field line description
        And the "image_testQA.png" is correctly upload in advance invoice label
        And the "image_testQA.png" is correctly upload in advance spreadsheet label
        And the "2023-01-01" is displayed in the field start date in recoupment rate per type
        And the "50.00" is displayed in the field in download audio on the scope section
        And the "75.00" is displayed in the field in physical sales on the scope section
        And the "Projects" is displayed in the droplist all items
        And the project "KSDHLSB729 - Beyond the Frequency - Holy Esque - At Hopes Ravine" is checked in the items section
        And I click on the plus button to display the template modal
        Then the templates Cross Contract Recoupment are not visible in the DOM

    @advance-settings-cross-contract-and-recoupment
    Scenario: set template cross contract recoupment 100% income
        And I fill "DP065186C0001" in the search bar contracts
        And I click on the contract "DP065186C0001"
        And I go to the advance category
        And I click on the plus button to display the template modal
        And I click on the "Cross Contract Recoupment 100% Income" in the template modal
        And I fill "2020-07-01" in the field sage reporting date
        And I fill "2020-08-31" in the field payment date
        And I fill "10000.00" in the field amount currency
        And I fill "TestQA" in the field posting type
        And I fill "TestQA" in the field posting number
        And I fill "TestQA" in the field posting description
        And I fill "TestQA" in the field line description
        And I upload the files in advance
        And I click on the next button in the advance page
        And I fill "2023-01-01" in the field start date in setup section in Cross Contract Recoupment 100% Income
        Then the "Cross Contract Recoupment 100% Income" is displayed with a "10000.00" in advance page
        When I click on the "Cross Contract Recoupment 100% Income" in the advance page
        And the "2020-07-01" is displayed in the field sage reporting date
        And the "2020-08-31" is displayed in the field payment date
        And the "10000.00" is displayed in the field amount currency
        And the "TestQA" is displayed in the field posting type
        And the "TestQA" is displayed in the field posting number
        And the "TestQA" is displayed in the field posting description
        And the "TestQA" is displayed in the field line description
        And the "image_testQA.png" is correctly upload in advance invoice label
        And the "image_testQA.png" is correctly upload in advance spreadsheet label
        And I click on the next button in the advance page
        And the "2023-01-01" is displayed in the field start date in Cross Contract Recoupment 100% Income
        And I click on the plus button to display the template modal
        Then the templates Multi Scope Advances are not visible in the DOM
