import timeouts from '../support/timeouts.js';

export class ProjectPage {
    
    get toolbarSelector() {
        return $$('.toolbar-item-btn');
    }

    get menuOption() {
        return $$('.ds-btn-icon')[0];
    }

    get dropdownOptions() {
        return $$('.btn-label');
    }

    get rectangle() {
        return $('.ng-element.el-box.text-editor-light');
    }

    clickToolbarOption(option) {
        browser.pause(timeouts.medium);
        this.toolbarSelector[option].waitForDisplayed(timeouts.long);
        this.toolbarSelector[option].click();
    }

    goToMyProject(option) {
        browser.pause(timeouts.medium);
        this.menuOption.click();
        this.dropdownOptions[option].click();
    }
}
