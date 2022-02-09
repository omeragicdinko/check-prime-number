#!/bin/bash
echo "[*] Zipping the files..."
cp -r config.js lambda/; cd lambda; 
zip -r ../built/lambda_check_prime.zip check_prime_number.js config.js
zip -r ../built/lambda_check_divisible.zip check_divisible_number.js config.js 
rm config.js; cd ..
echo "[*] Updating function code..."
aws lambda update-function-code --function-name check-number-prime --zip-file fileb://built/lambda_check_prime.zip
aws lambda update-function-code --function-name check-divisible-number --zip-file fileb://built/lambda_check_divisible.zip