const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');

const robotaction = require('../models/RobotAction');

const robotrouter = express.Router();

robotrouter.use(bodyParser.json());

var messages;
var options={
    prot:1883,
    host:'212.98.137.194',
    username:'iotleb',
    password:'iotleb'
};




const mqtt = require('mqtt');

var client = mqtt.connect('mqtt://212.98.137.194', options);

client.on('connect', function () {
    client.subscribe('action');

});

client.on('message', function (topic, message) {
  

    messages=message.toString();
   

    console.log(messages)

});


// robotrouter.route('/alerts')

// .get((req, res, next) => {
     
//      res.statusCode = 200;
//      res.setHeader('Content-Type', 'application/json');
//      res.json(messages);

//      messages=null;
     
           
     
//      });
   
                 
                 
 

    robotrouter.route('/')
        .get((req, res, next) => {

            robotaction.find({})
                .then((robotaction) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(robotaction);
                }, (err) => next(err))
                .catch((err) => next(err));
        })
        .post(authenticate.verifyUser,(req, res, next) => {
            
            robotaction.create(req.body)
                .then((robotaction) => {
                    console.log('robot action  ', robotaction);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(robotaction);
                    
                    client.publish('action',JSON.stringify(req.body));
                }, (err) => next(err))
                .catch((err) => next(err));

        })
        .put(authenticate.verifyUser,(req, res, next) => {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'text/plain');
            res.end('PUT operation not supported on /robot');
        })
        .delete(authenticate.verifyUser,(req, res, next) => {
            robotaction.remove({})
                .then((resp) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resp);
                }, (err) => next(err))
                .catch((err) => next(err));
        });




    module.exports = robotrouter;

