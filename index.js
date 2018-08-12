// var Car = require('./Car').Car; //Подключаем класс по передаваемому имени
var Car = require('./Car').CarClass; //Подключаем класс по передаваемому имени


var bmw = new Car('BMW');
bmw.logName();