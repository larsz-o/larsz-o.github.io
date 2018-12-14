const express = require('express');
const router = express.Router();
const transporter = require('../modules/nodemailer');

router.post('/', (req, res) => {
    let mail = {
        from: `${process.env.gmail_username}`, 
        to: `${process.env.gmail_username}`, 
        subject: `${req.body.subject}`, 
        text: `${req.body.name} (${req.body.email}) is inquiring about ${req.body.product}! Here's what they have to say: ${req.body.message}`, 
        html: `<p>${req.body.name} (${req.body.email}) is inquiring about ${req.body.product}!</p><p>Here's what they have to say: ${req.body.message}</p>`, 
        replyTo: `${req.body.email}`
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
});
router.post('/confirmation', (req, res) => {
    let mail = {
        from: `${process.env.gmail_username}`, 
        to: `${req.body.email}`, 
        subject: `Confirmation of Message to Lars Mackenzie: ${req.body.subject}`, 
        text: `Hi ${req.body.name}! Thanks for contacting Lars Mackenzie . You recently inquired about ${req.body.product}! Here's what you had to say: ${req.body.message}. I'm reviewing your request and will get back to you as soon as I can. Thank you and have a great day! -Lars`, 
        html: `<p>Hi ${req.body.name}!</p><p> Thanks for contacting Lars Mackenzie Designs!</p><p> You recently inquired about ${req.body.product}.</p><p> Here's what you had to say:</p><p> ${req.body.message}.</p><p> I'm reviewing your request and will get back to you as soon as I can.</p><p> Thank you and have a great day!</p><p> -Lars</p>`, 
        replyTo: `${process.env.gmail_username}`
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