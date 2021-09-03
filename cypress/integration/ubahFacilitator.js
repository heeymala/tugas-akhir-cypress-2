describe('Ubah Facilitator', function(){
    before(() => {
        cy.visit('')
        cy.wait(3000)
    })
    it('Login', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Ubah Facilitator', function(){
        cy.get('input[type="search"]').type('mala99@gmail.com').should('have.value', 'mala99@gmail.com')
        cy.wait(3000)
        cy.get('tbody > :nth-child(1) > .dt-center').click()
        cy.get('[href="facilitator/edit/307"]').click().should('contain', 'Ubah')
        cy.get('#user_fullname').type('{selectall}{backspace}')
        cy.get('#user_fullname').type('Oktavia Nirmala Afnelia').should('have.value', 'Oktavia Nirmala Afnelia')
        cy.get('#user_is_active').select('Aktif')
        cy.get('#user_province_id').select('SUMATERA BARAT')
        cy.get('#user_city_id').select('KOTA BUKITTINGGI')
        cy.get('#user_subdistrict_id').select('Guguak Panjang')
        cy.get('#user_address').type('{selectall}{backspace}')
        cy.get('#user_address').type('Jl. Sutan Syahrir').should('have.value', 'Jl. Sutan Syahrir')
        cy.get('.custom-control').click()
        cy.get('input[type="file"]').attachFile('happy.jpg')
        cy.get('#edit').click().should('have.text', 'Simpan')
    })
})