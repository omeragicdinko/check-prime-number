const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const multer  = require('multer');
const cors = require('cors');

let config;
if (!process.env.AWS) {
    config = require('./config');
}

let AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
    accessKeyId: process.env.AWS_ID || config.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET || config.AWS_SECRET,
    region: 'eu-west-3'
});

let storage = multer.memoryStorage({});
let upload = multer({storage: storage}).single('inputNumber');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('app/dist'));
app.use(cors());

app.get('/version', (req, res) => {
    res.json({
        'app_version': '1.0.0'
    });
})

app.post('/check', upload, (req, res) => {
    let data = JSON.stringify({
        'number': req.body.number
    });

    var regex=/^[0-9]+$/;
    if (!req.body.number.match(regex)) {
        res.status(400).send('Checking failed.');
        return
    }

    const LAMBDA_PARAMS = {
        FunctionName: 'check-prime-number',
        Payload: data
    }

    lambda.invoke(LAMBDA_PARAMS, (error, response) => {
        if (error) {
            console.log(error);
            res.status(400).send('Checking failed.');
        } else {
            res.json(JSON.parse(response.Payload));
        }
    })
});

app.listen(port, () => {
    console.log(`Express server started on port: ${port}`);
})