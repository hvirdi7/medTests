module.exports = {
    navigate: () => {
        cy.visit('./');
        cy.wait(2000);
        cy.get('button').contains('Accept All Cookies').click();
        cy.wait(1000);
        cy.get('.searchAdvsearchTextSm > a').click();
    },

    clickOnSmPC: () => {
    cy.get('input[name="docType"]').eq(0).click();
    
},

    enterIntoAllTheseWords: (allTheseWords) =>{
    cy.get('#allWords').type(allTheseWords);
},
    clickOnSearchFullDocument: () => {
    cy.get(`input[name="searchText"]`).eq(1).click();


},
    selectAccordUKLtd: () => {
        cy.get('#company').select('Accord-UK Ltd'); 
        cy.get('#company').contains('Accord-UK Ltd').should('be.visible'); 

    },

clickOnSearchButton: () => {
    cy.get('button').contains('Search').click();
    cy.wait(1000);
},

    assertPageTitleIsPara: (message) => {
    cy.contains(message)
    }
}

//img[data-toggle="popover"].eq(5)
//get tooltip and click via img or datga