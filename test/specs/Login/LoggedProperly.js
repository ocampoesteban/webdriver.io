/**
 * Created by steve on 03/08/17.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.phptravels.net/admin')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);
})
    .end();