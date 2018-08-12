var EventEmitter = require('events').EventEmitter;

var dispatcher = new EventEmitter();

dispatcher.on('connect', function (data) {
    console.log('Connect 1', data);
});

dispatcher.on('connect', function (data) {
   console.log('Connect2', data);
});

dispatcher.on('error', function (err) {
    console.log(err);
})

dispatcher.emit('connect', {foo: 1});

dispatcher.emit('error', new Error('Something went wrong!'));





// var util = require('util');
//
// function Car(){}
//
// Car.prototype.logName = function () {
//     console.log('This name is:', this.name);
// };
//
// function BMW(name) {
//     this.name = name || 'Unknown bmw model';
// }
//
// BMW.prototype.drive = function(){
//     console.log('Im driveing!');
// };
//
// util.inherits(BMW, Car);
//
// var mbw = new BMW('X6');
// mbw.logName();