//Dashboard Page Object
var Page = require('./Page')
var DashboardPage = Object.create(Page, {

    //Methods
    //Overwrite page method
    open:{
        get :function() {
            return Page.open('/');
        }
    },
    getPageTitle: {
        get: function () {
            return browser.getTitle();
        }
    },

});

module.exports = DashboardPage;