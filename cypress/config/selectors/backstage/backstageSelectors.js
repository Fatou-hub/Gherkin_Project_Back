/* eslint-disable import/prefer-default-export */
export const BACKSTAGE_SELECTORS = {
  LOGIN: {
    signInName: '#signInName',
    password: '#password',
    loginButton: 'button:contains("Login")',
    accountIdInput: '#input-search',
    selectAccount: '#select-accounts',
    connectBtn: '#connectBtn',
  },
  MAIN_MENU: {
    menuToggle: '//div[@id="bs-left"]//i[text()="chevron_right"]',
    menuAnalytics: '//div[@id="bs-left-menu"]//div[text()="Analytics"]',
    catalogOptimizationMenuItem: '//div[@id="bs-left-menu"]'
        + '//div[text()="Catalog optimization"]',
    catalogMenuOption: '.bs-menu-group-description:contains("Catalog")',
    catalogMenuIcon: 'i.material-icons:contains("library_music")',
    draftsOption: '.bs-menu-program .menuLabel:contains("Drafts")',
  },
  USER_MENU: {
    avatarIconMenu: '//li[@id="avatarIconMenu"]//i',
    logoutBtn: '//a[@href="?logout=1"]',
    usersAccessBtn: '//a[@href="accountsettings/useraccess"]',
  },
  COMMON: {
    mainHeaderTitle: '#bs-main-header-title',
    oneReleaseButton: '.newRelease',
    iconCollapse: '.menu__icon-collapse > .material-icons',
    clientNumber: '.bs-client-number',
  },
  NEW_RELEASE_MODAL: {
    modal: '#newReleaseModal',
    body: '#newReleaseModalBody',
    state: '#newReleaseModalState',
    title: '#newReleaseModalTitle',
    nextButton: '#newReleaseModalNextButton',
    audioOption: '#type_audio',
    videoOption: '#type_video',
    ringtoneOption: '#type_ringtone',
    optionAnyGenre: '#genre_nogenre',
    optionGenreWestern: '#genre_western',
    optionGenreJazz: '#genre_jazz',
    optionVideoTypeMusic: '#video_type_music',
    optionVideoTypeEntertainment: '#video_type_entertainment',
    optionVideoTypePlay: '#video_type_play',
    optionVideoTypeNews: '#video_type_news',
    optionVideoGenreItunes: '#genre_itunes',
    titleInput: '#newReleaseInputTitle',
    newTitle: (genre, title) => `div[title="${title}"][data-genre="${genre}"]`,
    createButton: '#newReleaseModalCreateButton',
  },
  EASY_ENTRY_FORM: {
    albumName: '#easyEntryEditForm-albumName-0',
    genre: '#mainGenre',
  },
  CATALOG: {
    searchField: '#searchInfos-backstageMiscSearch-0',
    searchButton: 'button.btn-primary:contains("Search")',
    catalogContentTitleArtist: '.bscatalog-table tbody tr',
    editProductIcon: '.fa-pencil',

  },
};
