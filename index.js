const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'david.alecrim1@gmail.com',
        pass: 'cfmejuaieeoqsuit',
    },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.post('/message', (req, res) => {
    // setup email data with unicode symbols
    const { name, email, message } = req.body;

     let mailOptions = {
         from: 'david.alecrim1@gmail.com', // sender address
         to: ['david.alecrim1@gmail.com', 'devops.apple@gmail.com', 'sousadax@gmail.com', 'oliveira_011@hotmail.com'], // list of receivers
         subject: `GearPrice mail from ${name} with mail ${email}`, // Subject line
         text: message, // plain text body
         html: `<p>${message}</p>` // html body
     };

     // send mail with defined transport object
     transport.sendMail(mailOptions, (error, info) => {
         if (error) return console.log(error);
         console.log('Message sent: %s', info.messageId);
     });

     res.redirect('/');
});

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html') );

app.listen(3003, () => console.log('Example app listening on port 3003!'));
