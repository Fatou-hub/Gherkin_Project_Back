class AdvanceTemplateModal {

    clickOnTemplateButtonByName(templateName) {
        cy.xpath(`//div[@id='new_advance_modal']//input[@template_name='${templateName}']`).should('be.visible').click()
    }

    clickOnOkButtonCancelAdvanceTemplateModal() {
        cy.xpath("//input[@id='cancel_btn']").should('be.visible').click()
    }

    verifyTemplateMethod1NotExistingInDOM() {
        cy.xpath("//input[@value='Method 1 : Fixed Percentage']").should('not.exist')
    }

    verifyTemplateMethod2NotExistingInDOM() {
        cy.xpath("//input[@value='Method 2 : Fixed Amount']").should('not.exist')
    }

    verifyTemplateMethod3NotExistingInDOM() {
        cy.xpath("//input[@value='Method 3 : Mixed method']").should('not.exist')
    }

    verifyTemplateRecoupmentRatePerTypeNotExistingInDOM() {
        cy.xpath("//input[@value='recoupment rate per type']").should('not.exist')
    }

    verifyTemplateCrossContractRecoupmentNotExistingInDOM() {
        cy.xpath("//input[@value='Cross Contract Recoupment 100% Income']").should('not.exist')
    }

    verifyTemplateRecoupmentNotExistingInDOM() {
        cy.xpath("//input[@value='Recoupment 100% Income']").should('not.exist')
    }

}
export default AdvanceTemplateModal