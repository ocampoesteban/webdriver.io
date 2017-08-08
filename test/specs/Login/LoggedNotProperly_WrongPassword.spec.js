assert = require('assert');
LoginPage = require('../../../pageObjects/Login/Login.page');

describe('Login page\n', function () {
    it('User isn not logged properly - Wrong Password', function () {
        LoginPage.open
        LoginPage.inputEmail.setValue('admin@phptravels.com');
        LoginPage.inputPassword.setValue('asd');
        LoginPage.clickButtonLogin;
        wrongCredentialsMessage = LoginPage.getWrongCredentialsMessage;
        assert.strictEqual(wrongCredentialsMessage,'Invalid Login Credentials',"Failed: Wrong Credentials message is not displayed properly ");
        titlePage = LoginPage.getPageTitle;
        assert.strictEqual(titlePage,'Administator Login',"Failed: User could logged properly");
    });
});
