module.exports = {
    navigates: () => {
        cy.visit('/emc/browse-companies/');
        cy.wait(2000);
        cy.get('button').contains('Accept All Cookies').click();
        cy.wait(2000);
        cy.get(`a[href="/emc/browse-companies/B"]`).click();
        cy.wait(1000);
    },

    clickFirstCompanyFromB: () => {
        cy.get('.ieleft > ul > :nth-child(1) > .key').click();
        cy.wait(2000);
    },

  
    assertDirectLineAppears: () => {
        cy.get('.col-md-5 div:nth-child(6) > p').should('have.text', '0800 298 0299'); 
    },
    assertTelephoneAppears: (telephone) => {
        cy.get('.col-md-5 div:nth-child(4) > p').should('have.text', telephone);
    },
    assertEmailAppears: (email) => {
        cy.get('[data-evt="docCompanyEmail"]').contains(email).should('be.visible'); 
    },
    assertStockEmailAppears: (stockemail) => {
        cy.get('[data-evt="docCompanyEmail"]').contains(stockemail).should('be.visible'); 

    },
    assertMedEmailAppears: (medemail) => {
        cy.get('[data-evt="docCompanyEmail"]').contains(medemail).should('be.visible');
    },    
   
    assertResultsAppear: (results) => {
    cy.get('#browse-total').should('have.text', results);
}}
