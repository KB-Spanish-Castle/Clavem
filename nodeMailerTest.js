// const nodemailer = require('nodemailer');
// const xouath2 = require('xoauth2');

// //

// function emailSender() {
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       xoauth2: xoauth2.createXOAuth2Generator({
//         user: 'indephGamer@gmail.com',
//         clientId: '1037091465910-9aug501rud50ple00oceslu1l4s12rgh.apps.googleusercontent.com',
//         clientSecret: 'juaWgpkrOFOiF83qLrJOvelK',
//         refreshToken: 'p6mxBPIRgMREdIxsTPq9feB2a37jusmF8qjA4hBZhO8'
//       })
//     }
//   })

//   var mailOptions = {
//     from: 'Kyle <indephGamer@gmail.com>',
//     to: 'indephGamer+testing.com',
//     subject: 'Nodemailer Test',
//     text: 'Hello World'
//   }

//   transporter.sendMail(mailOptions, function (err, res) {
//     if (err) {
//       console.log('Error');
//     } else {
//       console.log('Email Sent');
//     }
//   })
// }
// module.exports = { emailSender: emailSender }