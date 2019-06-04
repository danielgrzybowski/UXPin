import timeouts from '../support/timeouts.js';

export class PreviewPage {

    get commentTab() {
        return $('.tab-link.icon-general-comment');
    }
    
    get canvas() {
        return $('.ng-canvas');
    }

    get commentField() {
        return $('.fake-textarea');
    }

    get addCommentButton() {
        return $('.add-comment');
    }

    get rectangle() {
        return $('.ng-element.el-box.text-editor-light');
    }

    get commentPin() {
        return $$('.comment-pin');
    }

    get commentSettings() {
        return $('.cloud-wrapper.comment-menu');
    }

    get editOption() {
        return $('.edit');
    }

    get commentText() {
        return $('.comment-body')
    }

    addComment(text) {
        this.canvas.waitForDisplayed(timeouts.long);
        this.commentTab.click();
        this.canvas.click();
        this.commentField.waitForDisplayed(timeouts.long);
        this.commentField.addValue(text);
        this.addCommentButton.click();
    }

    editComment(text) {
        this.commentSettings.click();
        this.editOption.click();
        this.commentField.clearValue();
        this.commentField.addValue(text);
        this.addCommentButton.click();
    }
}
