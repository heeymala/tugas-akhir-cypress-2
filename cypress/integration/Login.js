describe('Login', function(){
    beforeEach(() => {
        cy.visit('')
        cy.wait(3000)
    }),
    it('Login Password Salah', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.wait(3000)
        cy.get('#input-password').type('admin123').should('have.value','admin123')
        cy.wait(3000)
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Login Email Salah', function(){
        cy.get('#input-email').type('admin@dojobox.id').should('have.value','admin@dojobox.id')
        cy.wait(3000)
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.wait(3000)
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Login Email & Password Salah', function(){
        cy.get('#input-email').type('admin@dojobox.id').should('have.value','admin@dojobox.id')
        cy.wait(3000)
        cy.get('#input-password').type('admin222').should('have.value','admin222')
        cy.wait(3000)
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Valid Login', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.wait(3000)
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.wait(3000)
        cy.get('#btn-login').click().should('contain', 'Login')
    })
})

