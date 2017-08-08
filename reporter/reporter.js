/**
 * Created by steve on 08/07/17.
 */
var util = require('util'),
    events = require('events');

var CustomReporter = function() {

    this.on('start', function() {
        console.log('Starting custom reporter -----------------------');
    });

    this.on('end', function() {
        console.log('Ending custom reporter -------------------------');
    });

    this.on('test:start', function() {
        console.log('Starting description steps:\n');
    });

    this.on('test:end', function() {
        console.log('Finishing description steps\n');
        console.log('')
    });

    this.on('test:pass', function() {
        console.log('\nResult')
        console.log('- Test has been passed');
    });

    this.on('test:fail', function() {
        console.log('\nResult')
        console.log('- Test has been failed');
    });

    this.on('test:pending', function(){
        console.log('\nResult')
        console.log('- Test has been pending');
    });
};

CustomReporter.reporterName = 'CustomReporter';

/**
 * Inherit from EventEmitter
 */
util.inherits(CustomReporter, events.EventEmitter);

/**
 * Expose Custom Reporter
 */
exports = module.exports = CustomReporter;