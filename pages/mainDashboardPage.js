import timeouts from '../support/timeouts.js';

export class MainDashboardPage {
    
    get newProjectButton() {
        return $('=New project');
    }

    get newProjectName() {
        return $('id=project-name');
    }

    get createProjectButton() {
        return $('.btn-solid');
    }

    get newPrototypeOption() {
        return $('.option-tile');
    }

    get designBox() {
        return $('.hover-actions');
    }

    get previewButton() {
        return $('.preview');
    }

    createNewProject(name) {
        this.newProjectButton.waitForDisplayed(timeouts.long);
        this.newProjectButton.click();
        this.newProjectName.waitForDisplayed(timeouts.long);
        this.newProjectName.addValue(name);
        this.createProjectButton.waitForDisplayed(timeouts.long);
        this.createProjectButton.click();
        browser.pause(timeouts.long);
        this.newPrototypeOption.waitForDisplayed(timeouts.long);
        this.newPrototypeOption.click();
        browser.pause(timeouts.medium);
    }

    openPreview() {
        browser.pause(timeouts.long);
        this.designBox.moveTo();
        this.previewButton.waitForDisplayed(timeouts.long);
        this.previewButton.click();
        browser.switchWindow('Untitled - set my name - UXPin Preview');
    }
}
