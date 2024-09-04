/*-------------------------------------------------------*/
/* eslint-disable import/no-extraneous-dependencies      */
/* eslint max-len: ["error", { "ignoreComments": true }] */
/*-------------------------------------------------------*/
import {
  Given,
  When,
  Then,

} from '@badeball/cypress-cucumber-preprocessor';
import {
  BACKSTAGE_SELECTORS,
} from '../../../config/selectors/backstage/backstageSelectors';
import EasyEntryPage from '../../../pages/backstage/easyEntryPage';

const easyEntryPage = new EasyEntryPage();

// TODO: Define the mechanism for loading credentials from a configuration file.
Given('the user has valid credentials', () => {
  // Placeholder for loading credentials if necessary.
  // Credentials can be loaded from a configuration file or defined here.
});

Given('the user logs in classically with profile {string}', (profile) => {
  easyEntryPage.loginClassicalSignIn(profile);
});

Given('the user logs in internally with account ID {string}', (profile) => {
  easyEntryPage.loginInternalByAccountID(profile);
});

// Navigates to the Base URL configured in Cypress using EasyEntryPage methods.
Given('the user is on the Base URL', () => {
  easyEntryPage.navigateToBaseUrl();
});

Given('the environment is set to {string}', (env) => {
  // Set the testing environment according to the given parameter.
  cy.log(`Environment set to: ${env}`);
  Cypress.env('environment', env);
});

// TODO: Implement the steps as per the scenario outline.
When('the user performs the actions as per the scenario outline', () => {
  // Placeholder for scenario outline actions.
  // This step will depend on the context of the test.
  // If the actions are defined in the scenario outline, execute them accordingly.

});

// eslint-disable-next-line max-len
When('the user ensures the visibility of the {string} button by handling the menu if necessary', (buttonText) => {
  // Use a map or object to associate button texts with their respective selectors.
  const buttonSelectors = {
    'One release': BACKSTAGE_SELECTORS.COMMON.oneReleaseButton,
    // Add other buttons here as necessary.
  };

  // Select the appropriate selector based on the button text.
  const buttonSelector = buttonSelectors[buttonText];
  if (!buttonSelector) {
    // Throw an error if the button text does not have an associated selector.
    const errorPart1 = `Button text "${buttonText}"`;
    const errorPart2 = ' does not have an associated selector.';
    throw new Error(errorPart1 + errorPart2);
  }

  // Check for the button's presence and visibility, and interact with the menu if necessary.
  cy.get(buttonSelector).should('exist').then(($button) => {
    if (!$button.is(':visible')) {
      // If the button is not visible, click the menu icon to reveal it.
      cy.get(BACKSTAGE_SELECTORS.COMMON.iconCollapse).click();
    }
  });
  // Ensure the button is visible and then click it.
  cy.get(buttonSelector).should('be.visible').click();
});

// TODO: Add assertions to validate the results against the environment configuration.
Then('the expected results should match '
    + 'as per the environment configuration', () => {
  // Placeholder for assertions.
  // Verify that the results match the environment configuration.
  easyEntryPage.verifyEnvironmentConfiguration();
});

When('the user clicks on the One release button', () => {
  // Click on the button One release button if it's the expected action.
  easyEntryPage.clickOneRelease();
});

// eslint-disable-next-line max-len
When('the user selects {string} and clicks {string}', (option, button) => {
  // Select the specified option (Audio, Video, or Ringtone) and click on the specified button if this is the next action.
  // eslint-disable-next-line max-len
  if ((option === 'Audio' || option === 'Video' || option === 'Ringtone') && button === 'Next') {
    easyEntryPage.selectOptionAndClickNext(option);
  }
});

// eslint-disable-next-line max-len
When('the user selects {string} and navigates to the title creation page', (genre) => {
  // Select the specified genre and navigate to the title creation page.
  easyEntryPage.selectGenreAndNavigate(genre);
});

// eslint-disable-next-line max-len
When('the user verifies the genre or video type pop-up for {string}', (releaseType) => {
  if (releaseType === 'Audio') {
    // Verify genre pop-up for a new audio release with specific genres
    easyEntryPage.verifyGenrePopup(
      'New audio release',
      [
        'Any genre',
        'Western classical',
        'Jazz',
      ],
    );
  } else if (releaseType === 'Video') {
    // Verify genre pop-up for a new video release with specific video types
    easyEntryPage.verifyGenrePopup(
      'New video release',
      [
        'Apple video',
        'Music video',
        'Entertainment video',
        'News video',
        'Game video',
      ],
    );
  }
});

// eslint-disable-next-line max-len
When('the user enters a title {string} for {string} release and clicks {string}', (title, releaseType, button) => {
  // Enter the title and click the specified button if it's the action to create.
  if (button === 'Create') {
    easyEntryPage.enterTitleAndClickCreate(title, releaseType);
  }
});

// eslint-disable-next-line max-len
Then('the user should see the new title {string} for {string} release created under {string}', (originalTitle, releaseType, genreOrType) => {
  easyEntryPage.verifyTitleOnNextPage(originalTitle, genreOrType, releaseType);
});

When(
  'a pop-up appears with options {string}, {string}, {string}',
  (option1, option2, option3) => {
    // Verify the pop-up with the specified options appears.
    const options = [option1, option2, option3];
    easyEntryPage.verifyPopupOptions(options);
  },
);

When(
  // eslint-disable-next-line max-len
  'a pop-up titled {string} appears with genre options {string}, {string}, {string}',
  (popupTitle, genreOption1, genreOption2, genreOption3) => {
    // Verify the pop-up with the title and genre options appears.
    const genreOptions = [genreOption1, genreOption2, genreOption3];
    easyEntryPage.verifyGenrePopup(popupTitle, genreOptions);
  },
);

// Navigate to "Catalog Drafts"
When('the user navigates to "Catalog Drafts"', () => {
  easyEntryPage.navigateToCatalogDrafts();
});

// Enter the release title in the search field and click the search button
// eslint-disable-next-line max-len
When('the user enters {string} in the search field and clicks the search button', (releaseTitle) => {
  easyEntryPage.enterReleaseTitleAndSearch(releaseTitle);
});

// Check if the release is in the list or create it
// eslint-disable-next-line max-len
Then('the user should see the release {string} in the list or the user should create it', (releaseTitle) => {
  easyEntryPage.verifyReleasePresenceOrCreate(releaseTitle);
});

// Click on the edit icon next to the title
// eslint-disable-next-line max-len
When('the user clicks on the edit icon next to the title {string}', (releaseTitle) => {
  easyEntryPage.clickEditIconNextToTitle(releaseTitle);
});

// Verify redirection to the "Release Information" page
Then('the user should be redirected to the "Release Information" page', () => {
  easyEntryPage.verifyRedirectionToReleaseInformation();
});

// Verify that the "Release title" field displays the correct title
Then('the "Release title" field should display the correct title', () => {
  easyEntryPage.verifyReleaseTitleField();
});
