var lodash = require('lodash');

console.log(lodash.sum([4,6]));

function wrr(argss){
    console.log('a');
}
lodash.delay(wrr, 1000, 'abs');
console.log('bbbb');