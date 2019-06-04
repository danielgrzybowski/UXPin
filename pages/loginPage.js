import timeouts from '../support/timeouts.js';

export class LoginPage {
    
    get emailField() {
        return $('id=login-login');
    }

    get passwordField() {
        return $('id=login-password');
    } 
    
    get loginButton() {
        return $('id=loginform_button1');
    } 

    logIn(email, password) {
        this.emailField.waitForDisplayed(timeouts.long);
        this.emailField.addValue(email);
        this.passwordField.addValue(password);
        this.loginButton.click();
    }
}
