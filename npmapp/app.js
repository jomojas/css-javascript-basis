const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6];

_.each(numbers, function(number, i){
    console.log(number);
})