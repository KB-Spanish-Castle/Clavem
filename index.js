'use strict';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

var CryptoJS = require("crypto-js");

var hash = CryptoJS.SHA256("Message");
//example url change
//hash = CryptoJS

console.log(hash.toString(CryptoJS.SHA256.Base64));
/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};