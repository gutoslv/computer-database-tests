describe('Add new computer', () => {
  beforeEach(function () {
    cy.visit('/');
    cy.findByRole('link', { name: /add a new computer/i }).click();
  });

  it('should add new computer with all info', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('textbox', { name: /introduced/i }).type('2024-01-01');
    cy.findByRole('textbox', { name: /discontinued/i }).type('2025-01-01');
    cy.findByRole('combobox', { name: /company/i }).select('Netronics');
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.alert-message.warning').should(
      'have.text',
      'Done !  Computer Test Computer has been created',
    );
  });

  it('should add new computer with only required info', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.alert-message.warning').should(
      'have.text',
      'Done !  Computer Test Computer has been created',
    );
  });

  it('should not add a new computer without required info', () => {
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.clearfix.error').within(() => {
      cy.findByText(/failed to refine type : predicate isempty\(\) did not fail\./i).should(
        'be.visible',
      );
    });
  });

  it('should not add a new computer with invalid introduced date', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('textbox', { name: /introduced/i }).type('20@24-01-01');
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.clearfix.error').within(() => {
      cy.findByText(
        /failed to decode date : java\.time\.format\.datetimeparseexception: text '20@24-01-01' could not be parsed at index 0/i,
      ).should('be.visible');
    });
  });

  it('should not add a new computer with invalid discontinued date', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('textbox', { name: /discontinued/i }).type('20@25-01-01');
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.clearfix.error').within(() => {
      cy.findByText(
        /failed to decode date : java\.time\.format\.datetimeparseexception: text '20@25-01-01' could not be parsed at index 0/i,
      ).should('be.visible');
    });
  });

  it('should not add a new computer with discontinued date before introduced date', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('textbox', { name: /introduced/i }).type('2025-01-01');
    cy.findByRole('textbox', { name: /discontinued/i }).type('2024-01-01');
    cy.findByRole('button', { name: /create this computer/i }).click();
    cy.get('.clearfix.error').within(() => {
      cy.findByText(/discontinued date is before introduction date/i).should('be.visible');
    });
  });

  it('should clear all info when click on cancel button', () => {
    cy.findByRole('textbox', { name: /computer name/i }).type('Test Computer');
    cy.findByRole('textbox', { name: /introduced/i }).type('2024-01-01');
    cy.findByRole('textbox', { name: /discontinued/i }).type('2025-01-01');
    cy.findByRole('combobox', { name: /company/i }).select('Netronics');
    cy.findByRole('link', { name: /cancel/i }).click();
    cy.findByRole('link', { name: /add a new computer/i }).click();
    cy.findByRole('textbox', { name: /computer name/i }).should('be.empty');
    cy.findByRole('textbox', { name: /introduced/i }).should('be.empty');
    cy.findByRole('textbox', { name: /discontinued/i }).should('be.empty');
    cy.findByRole('combobox', { name: /company/i }).should('have.value', '');
  });
});
