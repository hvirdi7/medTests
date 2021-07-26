import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homeScreen = require("../../page_objects/home-page-comp-A");

Given("a user is on the homescreen and accepts the Cookie Policy", () => {
    homeScreen.navigate();
});

When("the user taps on company A", () => {
    homeScreen.clickFirstCompanyFromA();
});

// Then "the user will be shown all company information", () => {
//     cy.contains('Menarini House, Mercury Park, Wycombe Lane, Wooburn Green, Buckinghamshire, HP10 0HH');

// };

// Then("the user should be sent to add card page", () => {
//     CardDetailsPage.assertUrlRedirect();
// });

// Then("the user should be able to enter new card details", (tableData) => {
//     AddCardPage.addCardDetails(tableData);
// });

// Then("user will receive a message {string}", (message) => {
//     CardDetailsPage.assertMessageWithinOneMonth(message);
// });
