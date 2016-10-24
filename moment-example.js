var moment = require('moment');
var now = moment();

console.log( now.format('h:mm a') );

//momentjs.com

now = moment();
now.format('X');
now.format('x');

var timestamp = 123123123;
var timestampMoment = moment.utc(timestamp);
