'use strict';
//var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

var CryptoJS = require("crypto-js");
//To run type node index.js
var hash = CryptoJS.SHA256("Message");
//example url change
//hash = CryptoJS

var t = new Date();
var year = t.getUTCFullYear();

var lastLogin = year - 1;



// function timeCounter() {

//     var timeDiffer = year - lastLogin;

//     if (timeDiffer > 1) {
//         timeDiffer = "Greater than 1 year";
//     }

//     return timeDiffer;
// }
// console.log(timeCounter());

console.log(hash.toString(CryptoJS.SHA256.Base64));
/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

//Be sure to have the location correct!
 

// app.put('/user', function (req, res, next) {
    
//     mongoose.connect('mongodb://localhost/songs');
//     user.email; /*= req.body.email;*/
//     var db = mongoose.connection;``}
// mongoose.connect('mongodb://localhost/songs');
// var db = mongoose.connection;

//req.body.email;
 
modules.export = "TEST TEST TEST";

// module.exports = function (number, locale) {
//         return number.toLocaleString(locale);
//     };