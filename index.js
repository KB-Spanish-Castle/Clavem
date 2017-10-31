'use strict';

require('dotenv').config();

var express = require("express");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
var mongoose = require('mongoose');
var nodeSchedule = require('node-schedule');
var app = express();
var User = require('../../models/user.js');
mongoose.connect('mongodb://localhost/songs');
var MAIL_NAME = process.env.MAIL_NAME;
var MAIL_PASSWORD = process.env.MAIL_PASSWORD;
var t = new Date();
var hour = t.getUTCHours();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var grabArray = [];

function timeCounter() {
  console.log(":TEST SUCESS");
  function findUser() {
    User.find(function (err, user) {


      console.log("THE USERS ARE: ");


      var text = "";
      for (var i = 0; i < user.length; i++) {



        grabArray.splice(i, 0, user[i].lastUpdate);

        //How to get pick one user my ID to check it.
      }
      console.log(grabArray);
      console.log("GrabARRAY+" + grabArray[0]);
      console.log("grabArray is: " + grabArray.length);
      emailAll(user);

      return grabArray;

    });

    console.log("grabArray is: " + grabArray.length);



  }


  console.log("grabArray is: " + grabArray.length);



  function emailAll(user) {
    var grabEmailData = "";

    console.log("Time to Grab loop");
    console.log("grabArray is: " + user);
    //grab aRRAY UNDEF
    for (var i = 0; i < grabArray.length; i++) {

      grabEmailData = user[i].email;
      console.log("User.email is: " + user.email);
      // var j = schedule.scheduleJob({hour: 14, minute: 30, month: 0}, function(){
      serverEmail("Machine", process.env.MAIL_NAME, process.env.MAIL_PASSWORD, grabEmailData, "Urgent", "Urgent! Please change your password, it's out of date!", 'mongodb://localhost/songs', User);

      console.log('REMINDERS WENT THROUGH');
      // });

    }

  }
  findUser();

}

function initialize(word) {
  var hash = CryptoJS.SHA256(word);

  return hash.toString(CryptoJS.SHA256.Base64);
}




//Source of help: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript




function randomString(len, charSet, symNum) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  symNum = symNum || 0;
  var sym = '`~!@#$%^&*()_+\|]}[{;:/?.>,<';
  var randomString = '';



  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }

  return randomString;
}

function serverEmail(myUserName, myEmail, myPassword, sendEmail, mySubject, myMessage, databaseURI, databaseModel) {

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('we have database songs connected');
  });

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.MAIL_NAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  console.log("sendEmail is: " + sendEmail);
  var mailOptions = {
    from: myUserName + ' <' + myEmail + '>',
    to: sendEmail,
    subject: mySubject,
    text: myMessage
  };

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email Sent');
    }
  });


}


module.exports = { timeCounter: timeCounter, initialize: initialize, serverEmail: serverEmail, randomString: randomString };