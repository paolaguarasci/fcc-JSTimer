// TODO

var $ = require('jquery');
var moment = require('moment');
var html = '';




var a = moment.duration(3, 'd');
var b = moment.duration(2, 'd');
a.subtract(b).days(); // 1


html += a;



















$('#result').html(html);
