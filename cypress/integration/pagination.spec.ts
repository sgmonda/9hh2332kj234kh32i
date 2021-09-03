describe('Pagination', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.ant-layout-header > p > a').click();
    cy.get('input.ant-input').first().type('test');
    cy.get('input.ant-input').last().type('test');
    cy.get('.ant-btn-primary').click();
  });

  it('Paginate when scrolling', () => {
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 10);
    cy.get('.ant-layout-content').scrollTo('bottom');
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 20);
    cy.get('.ant-layout-content').scrollTo('bottom');
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 30);
    cy.get('.ant-layout-content').scrollTo('bottom');
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 40);
    cy.get('.ant-layout-content').scrollTo('bottom');
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 50);
    for (let i = 0; i < 10; i++) {
      cy.get('.ant-layout-content').scrollTo('bottom');
      cy.wait(1000);
    }
    cy.get('.ant-layout-content > ul').find('li').should('have.length', 150);
  });
});
