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
            console.log("Getting Page Title");
            browser.pause(1000);
            return browser.getTitle();
        }
    },

});

module.exports = DashboardPage;