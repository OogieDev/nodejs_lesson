function Car(carName){
    this.carName = carName || 'unknown name';
}

Car.prototype.logName = function () {
    console.log('Car name is: ', this.carName);
}

module.exports.CarClass = Car;
//
// module.exports = {
//     Car: Car //передаваемое имя класса
// }