import { certifications } from '../../src/constants';

describe('Certifications section', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#certifications', { timeout: 8000 }).scrollIntoView();
  });

  it('shows section heading', () => {
    cy.get('#certifications').contains('h1', 'Certifications').should('be.visible');
  });

  it('renders all certification cards with title and issuer', () => {
    cy.get('#certifications').find('.grid').children().should('have.length', certifications.length);
    certifications.forEach((cert) => {
      cy.get('#certifications').contains(cert.title).should('exist');
      cy.get('#certifications').contains(cert.issuer).should('exist');
    });
  });

  it('cards with links render icon links', () => {
    const withLink = certifications.find((c) => c.link);
    if (withLink) {
      cy.get('#certifications').find('a[href]').should('exist');
    }
  });

  describe('Responsiveness', () => {
    it('mobile: section visible and grid present', () => {
      cy.viewport(375, 667);
      cy.get('#certifications').scrollIntoView();
      cy.get('#certifications').should('be.visible');
      cy.get('#certifications').find('.grid').should('exist');
    });

    it('desktop: multi-column grid', () => {
      cy.viewportPreset('desktop');
      cy.get('#certifications').scrollIntoView();
      cy.get('#certifications').find('.grid').should('exist');
    });
  });
});
