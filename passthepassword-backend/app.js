
const express = require('express');
  
const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://dbUser:dbUserPassword@m426-passthepassword.ipcu0fr.mongodb.net/test';

mongoose.connect(process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected to ' + MONGO_URL)
	});
  
app.listen(PORT, (error) => {
    if(!error) {
        console.log(`App is listening on port ${PORT}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});