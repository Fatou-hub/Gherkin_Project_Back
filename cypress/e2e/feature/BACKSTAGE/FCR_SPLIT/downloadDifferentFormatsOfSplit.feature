@split_smoke
Feature: download report files

    Scenario: download report files
        Given I am on the split page
        And I select the Reports tab
        When I click on the "PdfFile" icon
        Then the PDF file should exist on the download tab of the browser
        When I click on the "CsvFile" icon
        Then the CSV file should exist on the download tab of the browser
