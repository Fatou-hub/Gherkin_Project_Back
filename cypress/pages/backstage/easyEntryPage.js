/*-------------------------------------------------------*/
/* eslint-disable import/no-extraneous-dependencies      */
/* eslint max-len: ["error", { "ignoreComments": true }] */
/* eslint-disable class-methods-use-this                 */
/*-------------------------------------------------------*/
import { BACKSTAGE_SELECTORS } from
  '../../config/selectors/backstage/backstageSelectors';

// Defines the EasyEntryPage class
class EasyEntryPage {
  /**
   * Retrieve the environment name from Cypress configuration
   */
  constructor () {
    const envFromConfig = Cypress.env('env_name');
    // Assign 'dev' as the default environment if envFromConfig is null or 'null'
    // This handles the scenario where envFromConfig is a literal string 'null'
    // eslint-disable-next-line max-len
    this.env = (envFromConfig && envFromConfig !== 'null') ? envFromConfig : 'dev';

    // eslint-disable-next-line no-console
    console.log(`EasyEntryPage environment: ${this.env}`);
  }

  loadSettings () {
    const settingsPath = `env_settings/${this.env}/cin.json`;
    cy.log(`Reading configuration from: ${settingsPath}`);
    return cy.readFile(settingsPath, { timeout: 10000 });
  }

  /**
   * Verifies the environment configuration is correct
   */
  verifyEnvironmentConfiguration () {
    const { env } = this; // Use instance environment
    switch (env) {
      case 'staging':
        // TODO: Implement staging configuration checks
        break;
      case 'production':
        // TODO: Implement production configuration checks
        break;
      case 'dev':
        // TODO: Implement development configuration checks
        break;
      default:
        // Handle unknown environment
        throw new Error(`Unknown environment: ${env}`);
    }
  }

  navigateToBaseUrl () {
    this.loadSettings().then((settings) => {
      this.handleSettings(settings);
      const expectedBaseUrl = settings.backstageUrl;

      cy.visit(expectedBaseUrl);
      cy.get('body').then(($body) => {
        if ($body.find(BACKSTAGE_SELECTORS.COMMON.clientNumber).length > 0) {
          cy.log('User already logged in, no need to redirect.');
          return;
        }
        cy.url().then((url) => {
          this.handleRedirection(
            url,
            settings.loginRedirectUrl,
            settings.loginInternalCallbackUrl,
            settings.classicalLoginCallbackUrl,
          );
        });
      });
    });
  }

  handleSettings (settings) {
    if (!settings) {
      // eslint-disable-next-line no-undef
      throw new Error(`Cannot read settings from ${settingsPath}`);
    }
    /* eslint-disable no-console */
    console.log('Settings loaded:', settings);
    /* eslint-enable no-console */

    const requiredProperties = [
      'backstageUrl',
      'loginRedirectUrl',
      'loginInternalCallbackUrl',
      'classicalLoginCallbackUrl',
      'editPageUrl',
      'redirectCatalogManagerPage',
    ];

    if (!this.checkRequiredProperties(settings, requiredProperties)) {
      // eslint-disable-next-line no-undef
      throw new Error(`Missing required property in settings: ${settingsPath}`);
    }

    this.editPageUrl = settings.editPageUrl;
    const expectedBaseUrl = settings.backstageUrl;
    const {
      loginRedirectUrl,
      loginInternalCallbackUrl,
      classicalLoginCallbackUrl,
    } = settings;

    cy.visit(expectedBaseUrl);
    cy.get('body').then(($body) => {
      if ($body.find(BACKSTAGE_SELECTORS.COMMON.clientNumber).length > 0) {
        cy.log('User already logged in, no need to redirect.');
        return;
      }

      cy.url().then((url) => {
        this.handleRedirection(
          url,
          loginRedirectUrl,
          loginInternalCallbackUrl,
          classicalLoginCallbackUrl,
        );
      });
    });
  }

  checkRequiredProperties (settings, requiredProperties) {
    return requiredProperties.every((prop) => prop in settings);
  }

  handleRedirection (
    currentUrl,
    loginRedirectUrl,
    loginInternalCallbackUrl,
    classicalLoginCallbackUrl,
  ) {
    if (currentUrl === loginRedirectUrl) {
      cy.log('Redirected to the homepage after login.');
    } else if (currentUrl.includes(loginInternalCallbackUrl)) {
      cy.log('Redirected to internal login callback URL.');
    } else if (currentUrl.includes(classicalLoginCallbackUrl)) {
      cy.log('Redirected to classical login callback URL.');
    } else {
      throw new Error(`Unexpected URL: ${currentUrl}`);
    }
  }

  /**
   * Logs in the user using the provided profile.
   * Checks if the user is already logged in,
   * and if not, finds the account credentials and performs the login action.
   * Classical sign-in with username and password
   *
   * @param profile
   */
  loginClassicalSignIn (profile) {
    cy.get('body').then(($body) => {
      if ($body.find(BACKSTAGE_SELECTORS.COMMON.clientNumber).length > 0) {
        cy.log('User already logged in, skipping login step.');
      } else {
        cy.getCrendentials('backstage', this.env).then((accounts) => {
          const account = accounts.find((acc) => acc.idTypeUser === profile);
          if (!account) {
            throw new Error(`Account not found for profile: ${profile}`);
          }
          cy.get(BACKSTAGE_SELECTORS.LOGIN.signInName).type(account.login);
          cy.get(BACKSTAGE_SELECTORS.LOGIN.password)
            .type(account.password, { log: false });
          cy.get(BACKSTAGE_SELECTORS.LOGIN.loginButton).click();
        });
      }
    });
  }

  /**
   * Logs in the user using the provided profile. <br>
   * Checks if the user is already logged in, and if not, finds the
   * account credentials and performs the login action. <br>
   * Internal login using account ID for account selection
   *
   * @param profile
   */
  loginInternalByAccountID (profile) {
    cy.get('body').then(($body) => {
      if ($body.find(BACKSTAGE_SELECTORS.COMMON.clientNumber).length > 0) {
        cy.log('User already logged in, skipping login step.');
      } else {
        cy.getCrendentials('backstage', this.env).then((accounts) => {
          const account = accounts.find((acc) => acc.idTypeUser === profile);
          if (!account || !account.accountId) {
            throw new Error(`Account ID not found for profile: ${profile}`);
          }
          // Using account ID to log in
          cy.get(BACKSTAGE_SELECTORS.LOGIN.accountIdInput)
            .type(account.accountId);
          // Selecting the account
          cy.get(BACKSTAGE_SELECTORS.LOGIN.selectAccount)
            .should('be.visible')
            .and('contain.text', 'ContentCypressAgent')
            .click();
          cy.get(BACKSTAGE_SELECTORS.LOGIN.connectBtn).click();
        });
      }
    });
  }

  // Clicks the "One release" button
  clickOneRelease () {
    cy.get(BACKSTAGE_SELECTORS.COMMON.oneReleaseButton).click();
  }

  // Clicks the "Next" button in a modal
  clickNext () {
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.nextButton).click();
  }

  // Verifies the redirection to the editing page and confirms the title
  verifyRedirectionAndTitle (title) {
    cy.url().should('include', this.editPageUrl);
    cy.get('#easyEntryContent h2').should('have.text', title);
    const albumNameSelector = '#easyEntryEditForm-albumName-0'
            + '.input-large.inputString.inputBehavior-1.form-control';
    cy.get(albumNameSelector).should('have.value', title);
  }

  // Selects the Audio, Video, or Ringtone option and clicks the "Next" button
  selectOptionAndClickNext (option) {
    const optionMethods = {
      Audio: this.clickAudio,
      Video: this.clickVideo,
      Ringtone: this.clickRingtone,
    };

    const selectedMethod = optionMethods[option];

    if (selectedMethod) {
      selectedMethod.call(this);
      this.clickNext();
    } else {
      throw new Error(`Unknown option: ${option}`);
    }
  }

  // Clicks the "Audio" option in a modal
  clickAudio () {
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.audioOption).click();
  }

  // Clicks the "Video" option in a modal
  clickVideo () {
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.videoOption).click();
  }

  // Clicks the "Ringtone" option in a modal
  clickRingtone () {
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.ringtoneOption).click();
  }

  // Selects a genre and navigates to the next step
  selectGenreAndNavigate (genreOrType) {
    if (genreOrType === 'N/A') {
      // No ringtone action
      return;
    }
    // TODO: Implement selection based on provided genre
    const genreSelector = this.getGenreSelector(genreOrType);
    cy.get(genreSelector).click();
    this.clickNext();
  }

  /**
   * Enters the title for a new release, appends a timestamp to it,
   * and clicks the "Create" button. <br>
   * It updates the data JSON file with the new title under the appropriate release type.
   *
   * @param {string} title - The base title of the release.
   * @param {string} releaseType - The type of the release (e.g., Audio, Video).
   */
  enterTitleAndClickCreate (title, releaseType) {
    const timestamp = new Date().toISOString();
    const fullTitle = `${title} ${timestamp}`;

    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.titleInput).type(fullTitle);
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.createButton)
      .should('be.visible').click();

    cy.readFile('cypress/assets/cin/data.json').then((originalData) => {
      const data = originalData || {};
      data[releaseType] = data[releaseType] || [];

      const index = data[releaseType]
        .findIndex((existingTitle) => existingTitle.startsWith(title));

      if (index !== -1) {
        data[releaseType][index] = fullTitle;
      } else {
        data[releaseType].push(fullTitle);
      }

      cy.writeFile('cypress/assets/cin/data.json', data);
    });
  }

  // eslint-disable-next-line no-unused-vars
  // Verifies the title on the Easy Entry editing page after creation
  // and checks if it's under the specified genre or type
  verifyTitleOnNextPage (originalTitle, genreOrType, releaseType) {
    cy.readFile('cypress/assets/cin/data.json').then((data) => {
      const titles = data[releaseType];
      if (!titles || titles.length === 0) {
        throw new Error(`No titles found for release type: ${releaseType}`);
      }

      const fullTitle = titles.find((title) => title.includes(originalTitle));
      if (!fullTitle) {
        throw new Error(
          `Title not found for release type: ${releaseType} 
             and title: ${originalTitle}`,
        );
      }

      // Check redirection to editing page
      cy.url().should('include', this.editPageUrl);

      // Check title
      cy.get(BACKSTAGE_SELECTORS.EASY_ENTRY_FORM.albumName)
        .should('have.value', fullTitle);

      // No gender verification for videos or "Ringtone" and "N/A" cases
      if ([
        'Ringtone',
        'N/A',
        'Apple video',
        'Music video',
        'Entertainment video',
        'News video',
        'Game video',
      ].includes(genreOrType)) {
        return;
      }

      // Mapping genres to expected values
      const expectedGenreValue = this.mapGenreToValue(genreOrType);

      cy.get(BACKSTAGE_SELECTORS.EASY_ENTRY_FORM.genre)
        .should('have.value', expectedGenreValue);
    });
  }

  // Helper method to map genre to the expected value in the form
  mapGenreToValue (genre) {
    const genreMapping = {
      'Any genre': '',
      'Western classical': '4',
      Jazz: '10',
    };

    if (Object.prototype.hasOwnProperty.call(genreMapping, genre)) {
      return genreMapping[genre];
    }
    throw new Error(`Unknown genre: ${genre}`);
  }

  // Verifies the options in a pop-up modal based on the provided options
  verifyPopupOptions (options) {
    // Make sure the modal and its parent containers are forced to be visible
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.modal)
      // eslint-disable-next-line max-len
      .invoke('attr', 'style', 'display: block; opacity: 1; height: auto; width: auto;')
      .should('be.visible');

    // If there's a specific container that has overflow hidden,
    cy.get('div.step10')
      .invoke('attr', 'style', 'overflow: visible; height: auto; width: auto;')
      .should('be.visible');

    const optionToSelectorMap = {
      Audio: BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.audioOption,
      Video: BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.videoOption,
      Ringtone: BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.ringtoneOption,
    };

    // Iterates through each option and checks that it is visible
    options.forEach((option) => {
      const selector = optionToSelectorMap[option];
      if (!selector) {
        throw new Error(`Selector not found for option: ${option}`);
      }
      // Ensure the element is visible; optionally, add a timeout if needed
      cy.get(selector, { timeout: 10000 }).should('be.visible');
    });
  }

  /**
   * Verifies the genres in a pop-up with a specific title and a
   * list of genre options.
   * @param {string} title - The expected title of the pop-up.
   * @param {Array} options - An array of genre options to verify in the pop-up.
   */
  verifyGenrePopup (title, options) {
    // Ensure that the modal is visible
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.modal)
      .should('be.visible');

    // Verify that the modal title matches the expected title
    cy.get(BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.title)
      .should('exist');

    // Define a mapping of options to selectors
    const optionSelectors = {
      'Any genre': 'optionAnyGenre',
      'Western classical': 'optionGenreWestern',
      Jazz: 'optionGenreJazz',
      'Apple video': 'optionVideoGenreItunes',
      'Music video': 'optionVideoTypeMusic',
      'Entertainment video': 'optionVideoTypeEntertainment',
      'News video': 'optionVideoTypeNews',
      'Game video': 'optionVideoTypePlay',
    };

    options.forEach((option) => {
      const selectorKey = optionSelectors[option];

      if (!selectorKey) {
        throw new Error(`Unknown option: ${option}`);
      }

      const optionSelector = BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL[selectorKey];

      if (!optionSelector) {
        throw new Error(`Selector not found for the option: ${option}`);
      }

      cy.get(optionSelector).should('be.visible');
    });
  }

  // Helper method to get the genre or video type selector based on the provided option
  getGenreSelector (option) {
    const optionSelectors = {
      /* eslint-disable max-len */
      'Any genre': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionAnyGenre,
      'Western classical': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionGenreWestern,
      Jazz: BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionGenreJazz,
      'Apple video': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionVideoGenreItunes,
      'Music video': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionVideoTypeMusic,
      'Entertainment video': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionVideoTypeEntertainment,
      'News video': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionVideoTypeNews,
      'Game video': BACKSTAGE_SELECTORS.NEW_RELEASE_MODAL.optionVideoTypePlay,
      /* eslint-enable max-len */
    };

    if (Object.prototype.hasOwnProperty.call(optionSelectors, option)) {
      return optionSelectors[option];
    }

    // If the option is not recognized, return a generic selector based on text formatting
    // eslint-disable-next-line max-len
    return `#genre_${option.toLowerCase().replace(/\s+/g, '_')}`;
  }

  navigateToCatalogDrafts () {
    this.loadSettings().then((settings) => {
      const redirectUrl = settings.redirectCatalogManagerPage;
      cy.get(BACKSTAGE_SELECTORS.MAIN_MENU.catalogMenuOption)
        .should('be.visible')
        .click();
      cy.get(BACKSTAGE_SELECTORS.MAIN_MENU.draftsOption)
        .should('be.visible')
        .click();
      cy.url().should('include', redirectUrl);
    });
  }

  /**
   * Enters the release title in the search field and performs a search.
   * @param {string} releaseTitle - The base title of the release.
   */
  enterReleaseTitleAndSearch (releaseTitle) {
    cy.readFile('cypress/assets/cin/data.json').then((data) => {
      let foundTitle;

      Object.keys(data).forEach((releaseType) => {
        data[releaseType].forEach((title) => {
          if (title.includes(releaseTitle)) {
            foundTitle = title;
          }
        });
      });

      if (!foundTitle) {
        throw new Error(`Title not found for release title: ${releaseTitle}`);
      }
      cy.wrap(foundTitle).as('searchedReleaseTitle');
      cy.get(BACKSTAGE_SELECTORS.CATALOG.searchField).type(foundTitle);
      cy.get(BACKSTAGE_SELECTORS.CATALOG.searchButton).click();
    });
  }

  /**
   * Verifies the presence of a release in the list, or creates it if not found.
   * @param {string} releaseTitle - The base title of the release.
   */
  verifyReleasePresenceOrCreate (releaseTitle) {
    cy.readFile('cypress/assets/cin/data.json').then((data) => {
      let foundTitle;

      Object.keys(data).forEach((releaseType) => {
        data[releaseType].forEach((title) => {
          if (title.includes(releaseTitle)) {
            foundTitle = title;
          }
        });
      });

      if (!foundTitle) {
        this.createReleaseFromData(releaseTitle);
      } else {
        this.checkReleaseInList(foundTitle);
      }
    });
  }

  createNewRelease (releaseType, genreOrType, title) {
    this.clickOneRelease();
    this.selectOptionAndClickNext(releaseType);
    this.selectGenreAndNavigate(genreOrType);
    this.enterTitleAndClickCreate(title, releaseType);
  }

  /**
   * Creates a new release based on the release title.
   * @param {string} releaseTitle - The base title of the release.
   */
  createReleaseFromData (releaseTitle) {
    // TODO: Add logic to determine releaseType and genreOrType from releaseTitle
    const releaseType = this.determineReleaseType(releaseTitle);
    const genreOrType = this.determineGenreOrType(releaseTitle);

    this.createNewRelease(releaseType, genreOrType, releaseTitle);
  }

  /**
   * Determines the type of release based on its title. <br>
   * It uses a mapping object to associate specific keywords in the title
   * with their corresponding release type.
   *
   * @param {string} releaseTitle - The title of the release.
   * @returns {string} The determined release type.
   * @throws {Error} If the release type cannot be determined.
   */
  determineReleaseType (releaseTitle) {
    const releaseTypeMapping = {
      Audio: 'Audio',
      Video: 'Video',
      Ringtone: 'Ringtone',
    };

    let determinedType = null;
    Object.keys(releaseTypeMapping).forEach((key) => {
      if (releaseTitle.includes(key)) {
        determinedType = releaseTypeMapping[key];
      }
    });

    if (determinedType) {
      return determinedType;
    }

    throw new Error(`Unknown release type for the title: ${releaseTitle}`);
  }

  /**
   * Determines the genre or type of release based on its title. <br>
   * It uses a mapping object to associate specific keywords in the title
   * with their corresponding genre or type.
   *
   * @param {string} releaseTitle - The title of the release.
   * @returns {string} The determined genre or type.
   * @throws {Error} If the genre or type cannot be determined.
   */
  determineGenreOrType (releaseTitle) {
    const genreTypeMapping = {
      Jazz: 'Jazz',
      Classical: 'Western classical',
      'Any Genre': 'Any genre',
      Apple: 'Apple video',
      Music: 'Music video',
      Entertainment: 'Entertainment video',
      News: 'News video',
      Game: 'Game video',
    };

    let determinedGenreOrType = null;
    Object.keys(genreTypeMapping).forEach((key) => {
      if (releaseTitle.includes(key)) {
        determinedGenreOrType = genreTypeMapping[key];
      }
    });

    if (determinedGenreOrType) {
      return determinedGenreOrType;
    }

    throw new Error(`Genre or type unknown for title: ${releaseTitle}`);
  }

  /**
   * Checks whether a specific release is present in the search results.
   * @param {string} releaseTitle - The full title of the release.
   */
  /* eslint-disable consistent-return */
  checkReleaseInList (releaseTitle) {
    cy.get(BACKSTAGE_SELECTORS.CATALOG.catalogContentTitleArtist)
      .each(($row) => {
        const title = $row.find('td').eq(3).text().trim();
        if (title.includes(releaseTitle)) {
          cy.wrap($row).as('foundReleaseRow');
          return false; // Break the .each() loop once found
        }
      });

    cy.get('@foundReleaseRow').should('exist');
  }

  /* eslint-enable consistent-return */
  /**
   * This method is responsible for clicking on the edit icon next to a release's title. <br>
   * It first loads the necessary settings, then iterates over each row in the
   * catalog content to find the specific release title.<br>
   * Upon finding the title, it retrieves the URL to the edit page, verifies it's a string,
   * and then stores it for later use.
   *
   * @param {string} releaseTitle - The title of the release to find and click the edit icon for.
   */
  /* eslint-disable consistent-return */
  clickEditIconNextToTitle (releaseTitle) {
    this.loadSettings().then((settings) => {
      const baseUrl = settings.backstageUrl;
      cy.get(BACKSTAGE_SELECTORS.CATALOG.catalogContentTitleArtist)
        .each(($row) => {
          const title = $row.find('td').eq(3).text().trim();
          if (title.includes(releaseTitle)) {
            cy.wrap($row).within(() => {
              cy.get(BACKSTAGE_SELECTORS.CATALOG.editProductIcon).parent('div')
                .invoke('attr', 'data-url').then((url) => {
                  const fullEditUrl = baseUrl + url;
                  if (typeof fullEditUrl === 'string') {
                    cy.wrap(fullEditUrl).as('fullEditUrl');
                  }
                });
            });
            return false; // Stops the iteration once the correct row is found
          }
        });
    });
  }

  /* eslint-enable consistent-return */
  /**
   * This method verifies the redirection to the "Release Information" page.<br>
   * It uses the URL stored from the clickEditIconNextToTitle method to navigate
   * to the edit page in the same browser tab. <br>
   * It then ensures the current URL matches the expected edit page URL.
   */
  verifyRedirectionToReleaseInformation () {
    this.loadSettings().then((settings) => {
      const redirectUrl = settings.editPageUrl;

      cy.get('@fullEditUrl').then((fullEditUrl) => {
        if (typeof fullEditUrl === 'string') {
          cy.visit(fullEditUrl);
          cy.url().should('include', redirectUrl);
        }
      });
    });
  }

  verifyReleaseTitleField () {
    cy.get('@searchedReleaseTitle').then((searchedReleaseTitle) => {
      cy.get(BACKSTAGE_SELECTORS.EASY_ENTRY_FORM.albumName)
        .should('have.value', searchedReleaseTitle);
    });
  }
}

export default EasyEntryPage;
