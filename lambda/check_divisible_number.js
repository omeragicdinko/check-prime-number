const AWS = require('aws-sdk');
const config = require('./config');

exports.handler = (event, context, callback) => {
    let number1 = event.number1
    let number2 = event.number2

    if (number1 % number2 === 0) {
        callback(null, { // number1 is divisible by number2
            status: 200,
            is_divisible: true,
            is_divisible_by: number2
        });
    } else {
        callback(null, { // number1 is not divisible by number2
            status: 200,
            is_divisible: false,
            is_divisible_by: ""
        });
    }
};