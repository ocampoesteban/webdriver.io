//Created by steve on 03/08/17.
assert = require('assert');
LoginPage = require('../../../pageObjects/Login/Login.page');
DashboardPage = require('../../../pageObjects/Login/Dashboard.page');

describe('Login page\n', function () {
    it('User is logged properly - Right user and password', function () {
        LoginPage.open
        LoginPage.inputEmail.setValue('admin@phptravels.com');
        LoginPage.inputPassword.setValue('demoadmin');
        LoginPage.clickButtonLogin;
        var titlePage = DashboardPage.getPageTitle;
        assert.strictEqual(titlePage,'Dashboard',"Failed: User Or Password isn't correct");
    });
});
