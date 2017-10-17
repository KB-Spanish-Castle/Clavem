'use strict';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

var CryptoJS = require("crypto-js");

var hash = CryptoJS.SHA256("Message");

console.log(hash);
/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};