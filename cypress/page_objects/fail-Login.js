module.exports = {
    navigate: () => {
        cy.visit('/emc/login');
        cy.wait(2000);
    },

    enterEmailAddress: (emailAddress) => {
    cy.get('#signInName').type(emailAddress);
    },
    enterPassword: (password) => {
        cy.get('#password').type(password);
        },
    
    clickOnLogin: () => {
        cy.get('button').contains('Log In').click();
        cy.wait(2000);

    },

    assertInvalidUsernameMessageAppears: (message) => {
        cy.contains(message);
    },
    assertInvalidEmailMessageAppears: (message) => {
        cy.contains(message);
    },

    clickOnForgotPasswordLink: () => {
        cy.get('#forgotPassDiv').click();

    },

    clickOnRememberMeLink: () => {
        cy.get('#rememberMe').click();
    },

    clickOnSignUpLink: () => {
        cy.get('#signUpDiv').click();
}}