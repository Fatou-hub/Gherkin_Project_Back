const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When(`I want to do unit test`, () => {
    expect(true).to.be.true
})

When(`I make a unit test`, () => {
    expect(true).to.be.true
})

When(`I assert a unit test will pass`, () => {
    expect(true).to.be.true
})

When(`I assert a unit test will not pass`, () => {
    expect(false).to.be.true
})



