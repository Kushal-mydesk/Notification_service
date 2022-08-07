/**This file will contain sample logic for the sending the mail */

const nodemailer = require("nodemailer");



/**
 * We need to configure the transporter
 * 
 */


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth:{
        user : "vish007dev@gmail.com",
        pass : "vpphciilrvkzgmkq"
    },
    secure: true,
});

/**
 * Write the code to send email
 */

const mailObj= {
    
    from : "crm-no-reply@gmail.com",
    to : "kushal99mondal@gmail.com",   
    subject : "Hello",
    text : "Hello, This is from the Email bot"
}


transporter.sendMail(mailObj, (err, data) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Email sent successfully");
    }
})





