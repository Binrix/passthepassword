let express = require('express');
let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let MongoStore = require('connect-mongo');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');


const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://dbUser:dbUserPassword@m426-passthepassword.ipcu0fr.mongodb.net/test';

mongoose.connect(process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected to ' + MONGO_URL)
	});

let userDb = require('./models/userModel');

app.use(session({
    secret: bcrypt.genSaltSync(10),
    resave: false,
    rolling: true,
    saveUninitialized: false,
    store: MongoStore.create(
        mongoose.connection
    ),
    cookie:
    {
        maxAge: Date.now()+1800000,
        httpOnly: true,
        sameSite: 'lax'
    }
}));

app.post('/register', async (req,res) => {
    let user = await userDb.findOne({username: req.body.username})    
    if (user !== null)
    {
        res.json({error: "username taken",errorMessage: "This Username is already taken!"});
        return;
    }

    let hashedPassword = await bcrypt.hash(req.body.masterPassword,10);

    let newUser = {
        username: req.body.username,
        password: hash,
        salt : salt,
        createdAt: new Date(),
        websites: [],
    };

    let dbUser = await userDb.create(newUser);

    req.session.userId = dbUser.id;

    res.json(dbUser);
})

app.listen(PORT, (error) => {
if(!error) {
    console.log(`App is listening on port ${PORT}`);
} else {
    console.log("Error occurred, server can't start", error);
}
});