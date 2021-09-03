describe('Tambah Facilitator', function(){
    before(() => {
        cy.visit('')
        cy.wait(3000)
    })
    it('Login', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id')
        cy.get('#input-password').type('admin').should('have.value','admin')
        cy.get('#btn-login').click().should('contain', 'Login')
    }),
    it('Tambah Facilitator', function(){
        cy.contains('Tambah Facilitator').click()
        cy.get('#user_fullname').type('Mala Afnelia').should('have.value', 'Mala Afnelia')
        cy.get('#user_email').type('mala99@gmail.com').should('have.value', 'mala99@gmail.com')
        cy.get('#user_is_active').select('Aktif')
        cy.get('#user_password').type('mala199').should('have.value', 'mala199')
        cy.get('#user_province_id').select('DKI JAKARTA')
        cy.get('#user_city_id').select('KOTA ADM. JAKARTA SELATAN')
        cy.get('#user_subdistrict_id').select('Pasar Minggu')
        cy.get('#user_address').type('Jalan Kramat').should('have.value','Jalan Kramat')
        cy.get('.custom-control').click()
        cy.get('input[type="file"]').attachFile('zayn.jpg')
        cy.get('#add').click().should('have.text', 'Simpan')
    })
})