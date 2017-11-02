'use strict';
/*
  Welcome to "npm clavis-sermo"

  Translation:

  Latin:    English:
  Clavis =  Key
  Sermo  =  Word

  In english the tool is Key-Word or just keyword.
*/

require('dotenv').config();

var express = require("express");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
var mongoose = require('mongoose');
var schedule = require('node-schedule');
var app = express();
var User = require('../../models/user.js');
//Do a find and replaace of all variables of songs in this file with the database you are using
mongoose.connect('mongodb://localhost/songs');
var MAIL_NAME = process.env.MAIL_NAME;
var MAIL_PASSWORD = process.env.MAIL_PASSWORD;
  // var t = new Date();
  // var hour = t.getUTCHours();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var grabArray = [];
  // var dateObj = new Date();
var dateFull = new Date(new Date().getTime()).toLocaleDateString();
  // new Date(new Date().getTime()).toLocaleDateString(); 
  // var dateCompare = user[i].lastUpdate - dateObj;

  //These time variables are used to easily set the internal timers:

  // It takes 1000 milliseconds for one second
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var month = day * 30;
var year = day * 365;
//This setting sets how old a password in order to declare it should be changed and send a email:
var outOfDateSetting = ((0 * year) + (1 * month) + (0 * week) + (0 * day) + (0 * hour) + (0 * minute) + (0 * second));

  //This is how often a email check to send a email notification
  //to each user by comparing in the MongoDb field of lastUpdate.
  //  The limit is 24.8 days or 2147483647 is the maximum of seconds (due to largest 32 bit integer limit),
  //  otherwise it will break with infinite calling of the function.
var howOftenEmailSent = ((2 * week) + (0 * day));
function timeCounter() {
  console.log(":TEST SUCESS");
  function findUser() {
    User.find(function (err, user) {
      console.log("THE USERS ARE: ");
      var text = "";
      for (var i = 0; i < user.length; i++) {
        grabArray.splice(i, 0, user[i].lastUpdate);
      }
      console.log(grabArray);
      console.log("GrabARRAY+" + grabArray[0]);
      console.log("grabArray is: " + grabArray.length);
      console.log('UPDATE ACCOUNT PASSWORD CHECKER!');
      setInterval(function () {
        emailAll(user);
        console.log("UPDATE WORK 5 SEC");
        console.log(howOftenEmailSent);
      }, howOftenEmailSent);
      return grabArray;
    });
  }


  function emailAll(user) {
    var grabEmailData = "";
    console.log("Time to Grab loop");
    console.log("grabArray is: " + user);
    for (var i = 0; i < grabArray.length; i++) {
      console.log(user[i].lastUpdate);
      console.log("DateFull: " + Date.parse(dateFull) + " The month is " + month);
      var calcDates = Date.parse(dateFull) - Date.parse(user[i].lastUpdate);
      if (calcDates > outOfDateSetting) {
        console.log("SUCCESS SUCCESS!!!")
        grabEmailData = user[i].email;
        console.log("grabEmailData is : " + grabEmailData);
        serverEmail(/* myUserName */ "Machine",
         /* myEmail */ process.env.MAIL_NAME,
         /* myPassword */ process.env.MAIL_PASSWORD,
         /* sendEmail */ grabEmailData,
         /* mySubject */ "Urgent",
         /* myMessage */ "Urgent! Please change your password, it's out of date!",
         /* databaseURI */ 'mongodb://localhost/songs',
         /* databaseModel */ User);
      }
      console.log('REMINDERS WENT THROUGH');
    }
  }
  findUser();
}

//console.log(clavis.initialize("password"));

function initialize(word) {
  var hash = CryptoJS.SHA256(word);

  return hash.toString(CryptoJS.SHA256.Base64);
}


// Source of the code I modified for random password feature based on how many characters
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

// Below is how to create how many random characters you want
// console.log(clavis.randomString(6));
// OR you the admin can create what characters to be randomized with.
// console.log(clavis.randoString(5,123abc))
function randomString(len, symNum, charSet, symSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //// I comment out symNum as a feature to work with to mix in two seprate charSets into one.
  symNum = symNum || 0;

  symSet = symSet || '`~!@#$%^&*()_+\|]}[{;:/?.>,<';

  var randomString = '';

  for (var i = 0; i < (len); i++) {
    var randomPoz = Math.floor(Math.random() * (charSet.length));
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  if (symNum >= 1) {
    for (var i = 0; i < (symNum); i++) {
      var randomPoz = Math.floor(Math.random() * (symSet.length));
      randomString += symSet.substring(randomPoz, randomPoz + 1);
    }
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