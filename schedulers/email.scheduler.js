/**This file will contain the logic of the scheduler */


const cron  = require("node-cron");


const emailTransporter = require("../notifier/emailService");
const Notification  = require("../models/notification.model");


cron.schedule("*/5 * * * * *", async () =>{
    console.log("Inside the scheduler");
    /**Logic for senting the email */

    /**Need to fetch all the notifications document in the un
     * -sent status */

    const notifications = await Notification.find({status : "UN_SENT"});
    if(notifications){
        console.log("Number of un-sent request are : " , notifications.length);
    }

    /**Each of this notifications we need to send the email*/

    notifications.forEach(n => {
        const mailObj  = {
            to : n.recepientEmail,
            subject  : n.subject,
            text : n.content
        }
        console.log("send email for : ",mailObj);
        emailTransporter.sendMail(mailObj , async (err,info) => {
            if(err){
                console.log("Error in sending Email", err.message);
            }else{
                console.log("Email was sent successfully");
                /**Need to also change the notification status */

                n.status = "SENT",
                await n.save();
            }
        });
    })



})