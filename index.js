const express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '4805bbd89a204a',
        pass: 'efd0172aedb327',
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.post('/message', (req, res) => {
    console.log('message', req.body);

    // setup email data with unicode symbols
     let mailOptions = {
         from: 'luis.fgbo@gmail.com', // sender address
         to: 'bar@example.com', // list of receivers
         subject: `Gearbest Mail from ${req.body.name} with mail ${req.body.email}`, // Subject line
         text: req.body.message, // plain text body
         html: `<p>${req.body.message}</p>` // html body
     };

     // send mail with defined transport object
     transport.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: %s', info.messageId);
     });

     res.redirect('/');
});

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html') );

app.listen(3003, () => console.log('Example app listening on port 3003!'));
