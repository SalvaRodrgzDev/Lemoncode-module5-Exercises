describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should user input has the focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').click();

    // Assert
    cy.findByLabelText('Usuario *').should('have.focus');
  });

  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button').click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByText('Usuario y/o password no válidos').should('exist');
  });
});
