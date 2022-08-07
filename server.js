const express = require("express");
const mongoose = require("mongoose");
const body_parser= require("body-parser");
const db_config = require("./configs/db.config");
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));


/**Initialization of the database */
mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;

db.on('error' , () =>{
    console.log('Error connecting to database: ');
});

db.once("open" , () =>{
    console.log('Connected to database...');
});

/**Plug in the server routes */
require("./routes/notification.route")(app);

/**Invoke the scheduler file | run n load */

require("./schedulers/email.scheduler")



/***We need to go start the server */

app.listen(8000, () => {
console.log("Listening on http://localhost:8000");
})