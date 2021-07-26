module.exports = {
    navigate: () => {
        cy.visit('/emc/browse-companies/');
        cy.wait(2000);
        cy.get('button').contains('Accept All Cookies').click();
    },

    clickFirstCompanyFromA: () => {
        cy.get('a[href*="644"]').click()
    },

  
    assertTheFaxNumberAppears: (phone) => {
        cy.get('.col-md-5 > .gfdCompanyDetailsCol > :nth-child(4) > p').should('have.text', phone);
    },
    assertDirectLineAppears: () => {
        cy.get('.col-md-4 > .gfdCompanyDetailsCol > :nth-child(2) > p').should('have.text', '0800 085 8678'); 
    },
    assertAddressAppears: (address) => {
        cy.get('.col-md-5 > .gfdCompanyDetailsCol > :nth-child(2) > p').should('have.text', address);
    },
    assertEmailAppears: (email) => {
        cy.get('[data-evt="docCompanyEmail"]').should('have.text', email);

    },
    assertAddressAppears: (address) => {
        cy.get('.col-md-5 > .gfdCompanyDetailsCol > :nth-child(2) > p').should('have.text', address);
    },
    assertTelephoneAppears: (telephone) => {
    cy.get('.col-md-4 > .gfdCompanyDetailsCol > :nth-child(4) > p').should('have.text', telephone);

},
    assertOOHTelephoneAppears: (oohtelephone) => {
    cy.get('.col-md-4 > .gfdCompanyDetailsCol > :nth-child(6) > p').should('have.text', oohtelephone);
},
    assertMenariniLogoAppears: () => {
    cy.get(`img[class='img-responsive']`).should('be.visible');

},
    assertResultsAppear: (results) => {
    cy.get('#browse-total').should('have.text', results);
}}
