class AllProjectsList {
    searchProject(project) {
        cy.xpath("//input[@id='search_release']", { timeout: 10000 }).should('be.visible').type(project)
    }

    deleteAllProject() {
        const deleteButtonXpath =
            `//div[contains(@id, 'tabViewLabel_ReleasesTab_')]` +
            `//a[contains(@class, 'delete-release-link')]`
        if (deleteButtonXpath.length < 0) {
            cy.xpath(deleteButtonXpath, { timeout: 10000 })
            .should('be.visible')
            .then(($projects) => {
                function deleteProject(index) {
                    if (index < $projects.length) {
                        const $project = $projects.eq(index);
                        $project.click();
                        cy.xpath(`//div[@id='DHTMLSuite_modalBox_contentDiv']` +
                            `/.//input[@value='Ok']`)
                            .should('exist')
                            .click();
                        cy.wait(500).then(() => {
                            deleteProject(index + 1);
                        });
                    }
                }
                deleteProject(0);
            });
        } else {
            cy.log('Aucun élément à supprimer trouvé.');
        }
    }
}
export default AllProjectsList