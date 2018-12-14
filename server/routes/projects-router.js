const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const transporter = require('../modules/nodemailer');

router.post('/', (req, res) => {
    let mail = {
        from: `${process.env.gmail_username}`, 
        to: `${process.env.gmail_username}`, 
        subject: `hi`, 
        text: `hi`, 
        html: `hi`
    }
    transporter.sendMail(mail, function(error, info) {
        if (error) {
            console.log('nodemailer error', error); 
        } else {
            console.log("info.messageId: " + info.messageId);
            console.log("info.envelope: " + info.envelope);
            console.log("info.accepted: " + info.accepted);
            console.log("info.rejected: " + info.rejected);
            console.log("info.pending: " + info.pending);
            console.log("info.response: " + info.response);
            res.sendStatus(200);
        }
        transporter.close();
    });
})

module.exports = router;