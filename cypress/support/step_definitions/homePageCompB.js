import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageB = require("../../page_objects/home-page-comp-B");

Given("a user is on the company B homescreen and accepts the Cookie Policy", () => {
    homePageB.navigates();
});

When("the user taps on first company from B", () => {
    homePageB.clickFirstCompanyFromB();
});

Then("the informations direct line appears as 0800 298 0299", ()=> {
    homePageB.assertDirectLineAppears();

});

Then("the telephone appear as {string}", (phone) => {
    homePageB.assertTelephoneAppears(phone);

});

Then ("the stock availability email appears as {string}", (stockemail) => {
    homePageB.assertStockEmailAppears(stockemail);

});
Then ("the email appear as {string}", (email) => {
    homePageB.assertEmailAppears(email);

});
Then ("the medicals information email appears as {string}", (medemail) => {
    homePageB.assertMedEmailAppears(medemail);


});
Then ("the results found will be {string} results found", (results) => {
    homePageB.assertResultsAppear(results);

}); 
