import { LoginPage } from '../pages/loginPage.js';
import { MainDashboardPage } from '../pages/mainDashboardPage.js';
import { ProjectPage } from '../pages/projectPage.js';
import { PreviewPage } from '../pages/previewPage.js';
import users from '../data/users.json';

const loginPage = new LoginPage(),
      mainDashboardPage = new MainDashboardPage(),
      projectPage = new ProjectPage(),
      previewPage = new PreviewPage();   


describe('QA - test scenario', () => {
    it('Trial user should be able to log in to his account', () => {
        browser.url('');
        
        loginPage.logIn(users.trial_user.login, users.trial_user.password);
        expect(browser.getUrl()).to.equal('https://app.uxpin.com/dashboard/');
    });

    it('User should be able to create new project', () => {
        
        mainDashboardPage.createNewProject('New Project');
    });

    it('User should be able to add recangle to the design', () => {
        
        projectPage.clickToolbarOption(0);
    });

    it('User should go back to the project overview and then to preview', () => {
        
        projectPage.goToMyProject(2);
        mainDashboardPage.openPreview();
    });

    it('User should be able to add and edit a comment', () => {
        
        previewPage.addComment("New Comment");
        previewPage.editComment("Edited Comment");
    });

});
