describe('Nonaktifkan Facilitator', function(){
    before(() => {
        cy.visit('')
        cy.wait(3000)
    })
    it('Login', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Nonaktifkan Facilitator', function(){
        cy.get('input[type="search"]').type('mala99@gmail.com').should('have.value', 'mala99@gmail.com')
        cy.wait(3000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.get('[href="facilitator/edit/307"]').click().should('contain', 'Ubah')
        cy.get('#user_is_active').select('Nonaktif')
        cy.get('#edit').click().should('have.text', 'Simpan')
    })
})