const AWS = require('aws-sdk');
const config = require('./config');

const lambda = new AWS.Lambda({
    accessKeyId: process.env.AWS_ID || config.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET || config.AWS_SECRET,
    region: 'eu-west-3' // Region change
});

exports.handler = (event, context, callback) => {
    let number = event.number;
    let counter1 = 0;
    let counter2 = 0;
    
    if (number <= 0) {
        callback(null, { // number is not prime
            status: 200,
            number_is_prime: false,
            divisible_by: "an uknown number of numbers, and is not considered a prime number by the definition"
        });
    } else if (number == 1) {
        callback(null, { // number is not prime
            status: 200,
            number_is_prime: false,
            divisible_by: "only one number (itself)"
        });
    } else if (number == 2) {
        callback(null, { // number is not prime
            status: 200,
            number_is_prime: true,
            divisible_by: ""
        });
    } else if (number == 3) {
        callback(null, { // number is not prime
            status: 200,
            number_is_prime: true,
            divisible_by: ""
        });
    }
    
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        const LAMBDA_PARAMS = {
            FunctionName: 'check-divisible-number',
            Payload: JSON.stringify({ 'number1': number, 'number2': i})   
        };
        counter1++;
        lambda.invoke(LAMBDA_PARAMS, (error, response) => {
            if (error) {
                callback(Error(error));
            } else {
                counter2++;
                let res = JSON.parse(response.Payload);
                if (res.is_divisible) {
                    callback(null, { // number is not prime
                        status: 200,
                        number_is_prime: false,
                        divisible_by: res.is_divisible_by
                    });
                } else {
                    if (counter1 == counter2) {
                        callback(null, { // number is prime
                            status: 200,
                            number_is_prime: true,
                            divisible_by: ""
                        });
                    }
                }
            }
        })
    }
};