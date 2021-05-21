/// <reference types="cypress" />


describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
      // navigate to the homepage
      cy.visit('https://techweek.phtechcommunity.org/');
      // check that the "Register for Free" link is there
      expect(cy.get('a[class="btn-lg flat"]')).to.exist;
      // click on the "List Events" link
      cy.get('a[class="btn btn-primary flat btn-lg"]').click();
      // verify a user has been redirected to the "Register" page
      // expect(cy.get('a[name="nb_register-1"]')).to.exist;
       expect(cy.get('h2').contains('Building Skills and Better Careers through Tech Communities')).to.exist;
    });
  });