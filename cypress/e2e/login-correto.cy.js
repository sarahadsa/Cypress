describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
      it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('sarah@email.com', 'Senha123')
        cy.get('[data-test="input-loginEmail"]').type('sarah@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})