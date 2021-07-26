
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const failLogin = require("../../page_objects/fail-Login");

Given("a user is on the homescreen and accepts the Cookie Policies", () => {
    failLogin.navigate();
});

When("the user logins in with {string} and {string}", (emailAddress, password) => {
    failLogin.enterEmailAddress(emailAddress);
    failLogin.enterPassword(password);

}),

And ("clicks on Login", () => {
    failLogin.clickOnLogin();
}),
And ("taps on remember me", () => {
    failLogin.clickOnRememberMeLink();
}),

Then ("the user will be shown {string}", (message) => {
    failLogin.assertInvalidUsernameMessageAppears(message);
}),

Then ("the following message appears {string}", (message) => {
    failLogin.assertInvalidEmailMessageAppears(message);
})







// When("the user logins in with {string} and {string}", (emailAddress, password) => {
//     failLogin.enterEmailAddress(emailAddress);
//     failLogin.enterPassword(password);
// })
