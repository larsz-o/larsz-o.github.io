const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.gmail_username,
        pass: process.env.gmail_password
    }
});

module.exports = transporter;