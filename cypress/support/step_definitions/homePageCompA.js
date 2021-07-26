import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageA = require("../../page_objects/home-page-comp-A");

Given("a user is on the homescreen and accepts the Cookie Policy", () => {
    homePageA.navigate();
});

When("the user taps on first company from A", () => {
    homePageA.clickFirstCompanyFromA();
});

Then("the medical information direct line appears as 0800 085 8678", () => {
    homePageA.assertDirectLineAppears();

});

Then("the fax number is shown {string}", (phone) => {
    homePageA.assertTheFaxNumberAppears(phone);

});

Then ("the address will be shown as {string}", (address) => {
    homePageA.assertAddressAppears(address);

});
Then ("the medical information email appears as {string}", (email) => {
    homePageA.assertEmailAppears(email);

});

Then ("the telephone appears as {string}", (telephone) => {
    homePageA.assertTelephoneAppears(telephone);
});
Then ("the Out of hours telephone appears as {string}", (oohtelephone) => {
    homePageA.assertOOHTelephoneAppears(oohtelephone);
});
Then ("the logo shows for Menarini", () => {
    homePageA.assertMenariniLogoAppears();

});
Then ("the results found will be {string} results found", (results) => {
    homePageA.assertResultsAppear(results);

}); 


// Then("the user should be able to enter new card details", (tableData) => {
//     AddCardPage.addCardDetails(tableData);
// });

// Then("user will receive a message {string}", (message) => {
//     CardDetailsPage.assertMessageWithinOneMonth(message);
// });
