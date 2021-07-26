
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signUp = require("../../page_objects/sign-up");
const failLogin = require("../../page_objects/fail-Login");

Given("a user is on the homescreen and accepts the Cookie Policies", () => {
    failLogin.navigate();
}),
When("the user taps Sign up", ()=>{
    signUp.clickOnSignUpLink();
}),
Then("the user will be taken to signup page with {string}", (message) => {
    signUp.assertSignUpPageLoads(message);

}),
When("the user taps request access to emc", ()=>{
    signUp.clickOnEMCLink();
}),
Then("the user will be taken to request access with {string}", (message) => {
    signUp.assertRequestToEMCLoads(message);
})






// When("the user logins in with {string} and {string}", (emailAddress, password) => {
//     failLogin.enterEmailAddress(emailAddress);
//     failLogin.enterPassword(password);
// })
