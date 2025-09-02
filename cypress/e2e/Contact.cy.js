describe('Testando as funcionalidades da página', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    const nome = 'Caio Croccia'

    it('Incluindo um contato', () => {
        cy.get('input[type=text]').first().click().type(nome)
        cy.get('input[type=email]').first().click().type('caio.croccia@gmail.com')
        cy.get('input[type=tel]').first().click().type('1399999999')
        cy.get('button[type=submit]').click()
    })

    it('Alterando o mesmo contato contato', () => {
        cy.contains('.contato', nome).within(() => {
            cy.get('.edit').click(); });
        cy.get('input[type=tel]').clear().type('1399999998');
        cy.get('.alterar').click();
    })


    it('Removendo o mesmo contato contato', () => {
        cy.contains('.contato', nome).within(() => {
            cy.get('.delete').click(); });
    })
})