describe('Navigation bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Expand/collapse', () => {
    cy.get('.ant-layout-sider').should('have.class', 'ant-layout-sider-collapsed');
    cy.get('.ant-layout-sider-children > div:first-child').click();
    cy.get('.ant-layout-sider').should('not.have.class', 'ant-layout-sider-collapsed');
    cy.get('.ant-layout-sider-children > div:first-child > span').click({ force: true });
    cy.get('.ant-layout-sider').should('have.class', 'ant-layout-sider-collapsed');
  });

  it('Go to app sections', () => {
    cy.get('.ant-menu > .ant-menu-item:nth-child(1)').should('have.class', 'ant-menu-item-selected');
    cy.get('.ant-menu > .ant-menu-item:nth-child(2)').should('not.have.class', 'ant-menu-item-selected');
    cy.get('.ant-menu > .ant-menu-item:nth-child(2)').click();
    cy.get('.ant-menu > .ant-menu-item:nth-child(1)').should('not.have.class', 'ant-menu-item-selected');
    cy.get('.ant-menu > .ant-menu-item:nth-child(2)').should('have.class', 'ant-menu-item-selected');
    cy.get('.ant-menu > .ant-menu-item:nth-child(1)').click();
    cy.get('.ant-menu > .ant-menu-item:nth-child(1)').should('have.class', 'ant-menu-item-selected');
    cy.get('.ant-menu > .ant-menu-item:nth-child(2)').should('not.have.class', 'ant-menu-item-selected');
  });
});
