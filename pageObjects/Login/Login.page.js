//Login Page Object
var Page = require('./Page')
var LoginPage = Object.create(Page, {

    //Overwrite Page method
    open: {
        get :function() {
            return Page.open('/admin/');
        }
    },

    //Locators(CSS)
    wrongCredentials_invalidCredentialsMessage:{
        get: function () {
            return browser.element('div[class=resultlogin]');
        }
    },
    buttonLogin: {
        get: function () {
            return browser.element('div[class=col-md-8]>form>button');
        }
    },
    inputEmail: {
        get: function () {
            return browser.element('div:nth-child(1)>input:nth-child(2)')
        }
    },
    inputPassword: {
        get: function () {
            return browser.element('div:nth-child(1)>input:nth-child(3)')
        }
    },

    //Methods
    clickButtonLogin: {
        get: function () {
            browser.pause(3000);
            this.buttonLogin.click();
        }
    },
    getPageTitle: {
        get: function () {
            return browser.getTitle();
        }
    },
    getWrongCredentialsMessage: {
        get: function () {
            browser.pause(2000);
            return this.wrongCredentials_invalidCredentialsMessage.getText();
        }
    },
    getInvalidCredentialsMessage: {
        get: function () {
            this.wrongCredentials_invalidCredentialsMessage.getText();
        }
    }

});

module.exports = LoginPage;