module.exports = {
    navigate: () => {
        cy.visit('/emc/login');
        cy.wait(2000);
    },

    clickOnSignUpLink: () => {
        cy.get('#signUpDiv').click();
},
    clickOnEMCLink: () => {
        cy.get('#alreadyRegistered > a').click();
},
    assertSignUpPageLoads: (message) =>{
        cy.contains(message);

    },
    assertRequestToEMCLoads: (message) =>{
        cy.contains(message);
    
    }}