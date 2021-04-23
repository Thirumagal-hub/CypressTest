describe('Login to Create',function(){

    it('Login to Create with credentials',function(){
        cy.visit('http://create-dev.vmgdigital.com/');
        cy.title().should('eq', 'VMG Digital | Create Platform')
        cy.get('[formcontrolname="username"]').type('tester6vmg@gmail.com');
        cy.get('[formcontrolname="password"]').type('Test@123');
        cy.get('#login').click();
    })

});