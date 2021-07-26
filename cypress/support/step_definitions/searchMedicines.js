
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const searchMedicines = require("../../page_objects/search-medicines");


Given("a user is on the advanced search screen", () => {
    searchMedicines.navigate();
}),
When("the user click on smPC", () => {
    searchMedicines.clickOnSmPC();
}),
And("on the all these words field enter {string}", (allTheseWords) => {
    searchMedicines.enterIntoAllTheseWords(allTheseWords);

}),
And("clicks on Search Full Document", () => {
    searchMedicines.clickOnSearchFullDocument();
}),
And("selects Accord-UK Ltd", () => {
    searchMedicines.selectAccordUKLtd();
}),
    And("user clicks on Search", () => {
    searchMedicines.clickOnSearchButton();
    }),

    Then("the user will be redirected to search results with {string}", (message) => {
searchMedicines.assertPageTitleIsPara(message);
})



// When("the user logins in with {string} and {string}", (emailAddress, password) => {
//     failLogin.enterEmailAddress(emailAddress);
//     failLogin.enterPassword(password);
// })
