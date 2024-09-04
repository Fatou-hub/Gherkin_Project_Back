/* eslint-disable import/prefer-default-export */
export const RELEASE_PAGE_SELECTORS = {
    MAKE_DELIVERY_BUTTONS: {
        'Make insert delivery': {
            actionDelivery: ".PageActionAlbumDeliveryInsert",
            actionName: "INSERT"
        },
        'Make update delivery': {
            actionDelivery: ".PageActionAlbumDeliveryUpdate",
            actionName: "UPDATE"
        },
        'Make takedown delivery': {
            actionDelivery: ".PageActionAlbumDeliveryDelete",
            actionName: "TAKEDOWN"
        },
    },
    TO_DELIVER_CHECKBOX: '#toDeliver-<idPlatform>-0',
    ALBUM_POPIN: '#albumPopin',
    ALBUM_POPIN_BG: '#albumPopin-bkg',
    DELIVERY_REPORT: 'Delivery Report',
    DELIVERY_TYPE: 'Delivery Type',
    DELIVERY_INFORMATION: 'Delivery Information',
    ALBUM_POPIN_DELIVERY_TYPE: ':nth-child(7) > h2',
    SUBMIT_DELIVERY_BUTTON: 'input[type=submit][value="Deliver"]',
    DELIVERY_REPORT_TABLE: {
        headerStoreIdentifier: '.scrollpane > .listTable > tbody > :nth-child(1) > :nth-child(1)',
        headerStoreTitle: 'Store',
        headerReportIdentifier: '.scrollpane > .listTable > tbody > :nth-child(1) > :nth-child(2)',
        headerReportTitle: 'Report',
        cellMessageIdentifier: '.scrollpane > .listTable > tbody > :nth-child(2) > :nth-child(2)',
        cellStoreIdentifier: '.scrollpane > .listTable > tbody > :nth-child(2) > :nth-child(1)'
    },
    DELIVERIES_TO_GO_TAB: {
        identifier: '#ui-id-12',
        title: 'Deliveries to go'
    },
    CANCEL_DELIVERY_BUTTON: '#delete-<idPlatform>'
}