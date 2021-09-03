describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Wrong login', () => {
    cy.get('.ant-layout-header > h2').should('have.text', 'Aún no has iniciado sesión');
    cy.get('input.ant-input').should('not.exist');
    cy.get('.ant-layout-header > p > a').click();
    cy.get('input.ant-input').should('be.visible');
    cy.get('input.ant-input').first().type('wrong');
    cy.get('input.ant-input').last().type('wrong');
    cy.get('.ant-btn-primary').click();
    cy.get('.ant-layout-header > h2').should('have.text', 'Aún no has iniciado sesión');
    cy.get('.ant-notification-notice-message').should('have.text', 'Error');
  });

  it('Successful login', () => {
    cy.get('.ant-layout-header > h2').should('have.text', 'Aún no has iniciado sesión');
    cy.get('.ant-layout-header > p > a').click();
    cy.get('input.ant-input').should('be.visible');
    cy.get('input.ant-input').first().type('test');
    cy.get('input.ant-input').last().type('test');
    cy.get('.ant-btn-primary').click();
    cy.get('.ant-layout-header > h2').should('not.have.text', 'Aún no has iniciado sesión');
    cy.get('.ant-notification-notice-message').should('not.exist');
  });

  it('Logout', () => {
    cy.get('.ant-layout-header > h2').should('have.text', 'Aún no has iniciado sesión');
    cy.get('.ant-layout-header > p > a').click();
    cy.get('input.ant-input').first().type('test');
    cy.get('input.ant-input').last().type('test');
    cy.get('.ant-btn-primary').click();
    cy.get('.ant-layout-header > h2').should('not.have.text', 'Aún no has iniciado sesión');
    cy.get('.ant-layout-header a').click();
    cy.get('.ant-layout-header > h2').should('have.text', 'Aún no has iniciado sesión');
  });
});
