/**this file will have the routing function */
const notification_Crontoller = require("../controllers/notification.controller")

module.exports = (app) => {

    /**POST /notiserv/api/v1/notifications */

    app.post("/notiserv/api/v1/notifications",notification_Crontoller.acceptNotificationReq);
}