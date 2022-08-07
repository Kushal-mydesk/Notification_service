/*This file will have the logic for the email Service*/

const nodemailer = require("nodemailer");



/**
 * We need to configure the transporter
 * 
 */


module.exports = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth:{
        user : "vish007dev@gmail.com",
        pass : "vpphciilrvkzgmkq"
    },
    secure: true,
});
