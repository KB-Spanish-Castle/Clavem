CLAVIS-SERMO README
+*+++++++++++++++++++++*+++++++++++++++++++++++++++++*+

Version 1.0.4


In the next few days I will work on the documentation.


  Welcome to "npm clavis-sermo"

  Translation:

  Latin:    English:
  Clavis =  Key
  Sermo  =  Word

  In english the tool is Key-Word or just keyword.

NOTICE:

Version 1.0.3 or later is out, if you have a older version (especially 0.3.6 or earlier), then you should get the newest version.

IF npm update DOSEN'T GET THE NEWEST VERSION
THE BEST THING TO DO IS USE THIS COMMAND:
         npm remove clavis-sermo


THEN REINSTALL IT AS DESCRIBED IN STEP 1




NPM Website is here:
https://www.npmjs.com/package/clavis-sermo

This project will eventually will not be worked on after completation.
This project is almost completed and most likely would be left untouch.
Anyone can create a fork or a seprate project, with my code to continude development with it as accordance to license.

https://github.com/KB-Spanish-Castle/Clavem

Instructions:

Step 1:  Do the command you choose -S is the same as --save and -D is the same as --Dev:
            npm install clavis-sermo
      Or:   npm install clavis-sermo -S
      or:   npm install clavis-sermo -D

Step 2: Be sure to create the file .env with these two fields:
MAIL_NAME = 'yourEmail'
MAIL_PASSWORD = 'your-Email's-Password' 

Step 3: create a .gitingore include this:
app-env

Step 4:
At the same file that sign up the user.
On your signup route page include this code:
lastUpdate: new Date(new Date().getTime()).toLocaleDateString()

Step 5:
Inside your Mongoose Schema include this code:
lastUpdate: { type: Date, default: Date.now }


+++LISCENSE+++

ISC License (ISC)
Copyright <2017> <Kyle Bigart>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

+*+++++++++++++++++++++*+++++++++++++++++++++++++++++*+