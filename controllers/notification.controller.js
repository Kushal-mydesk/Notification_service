/**Here we will have to put the controller in the session */


//Method to accepting the notification

//Validation of the request body -- from Middleware 

const Notification = require("../models/notification.model");
exports.acceptNotificationReq = async (req,res) =>{

    /**Accept the Notification request and store it in the Database*/

    try{
        const notificationObj = {
            subject: req.body.subject,
            recepientEmail: req.body.recepientEmail,
            content : req.body.content,
            requester : req.body.requester
        }

        const notification = await Notification.create(notificationObj);


        return res.status(201).send({
            message : "Notification request accepted",
            trackingId : notification._id
        })
        
    }catch(err){
        console.log(err.message)
        res.status(500).send({
            message : "Internal Error while storing the Notification"
        });
    }

}