describe('Testando as funcionalidades da página', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })


    it('Incluindo um contato', () => {
        cy.get('input[type=text]').first()
        cy.type('Caio Croccia')
        cy.get('input[type=email]').first()
        cy.type('caio.croccia@gmail.com')
        cy.get('input[type=Telefone]').first()
        cy.type('1399999999')
        cy.get('button[type=submit]').click()
    })
})