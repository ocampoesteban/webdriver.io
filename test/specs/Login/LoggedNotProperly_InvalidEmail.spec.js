assert = require('assert');
LoginPage = require('../../../pageObjects/Login/Login.page');

describe('Login page\n', function () {
    it('User isn not logged properly - Invalid Email', function () {
        LoginPage.open
        LoginPage.inputEmail.setValue('admin@');
        LoginPage.inputPassword.setValue('asd');
        LoginPage.clickButtonLogin;
        invalidCredentialsMessage = LoginPage.getInvalidCredentialsMessage;
        assert.strictEqual(invalidCredentialsMessage,'The Email field must contain a valid email address.',"Failed: Wrong Credentials message is not displayed properlyh ");
        titlePage = LoginPage.getPageTitle;
        assert.strictEqual(titlePage,'Administator Login',"Failed: User could logged properly");
    });
});