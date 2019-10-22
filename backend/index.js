const express = require ("express"); // to use express, imporing express
const bodyParser = require ("body-parser"); // importing body parser
const app = express();
const db = require("./util/db");
const userRoutes = require("./routes/user");
const fileRoutes = require("./routes/files")

db.connect(function(err) {
    if (err) { 
    	throw err;
    } else {
    	console.log("db connected");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// routes
app.use("/user", userRoutes);
app.use("/files", fileRoutes);
// listning express server
app.listen(5558,() => (
	console.log("listening on port 5558")
));