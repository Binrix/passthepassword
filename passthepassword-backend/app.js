let express = require('express');
let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let MongoStore = require('connect-mongo');
let bodyParser = require('body-parser');
let formidable = require('express-formidable');
let session = require('express-session');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://dbUser:dbUserPassword@m426-passthepassword.ipcu0fr.mongodb.net/test';

mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => {console.log(`Error:${error}`)});

let userSchema = require('./models/userModel');

app.use(formidable());

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
    if (!req.fields.username || !req.fields.masterPassword)
    {
        res.json({error: "field empty",errorMessage: "The field for Username and Password must not be empty!"});
        return;
    }

    let user = await userSchema.findOne({username: req.fields.username})    
    if (user !== null)
    {
        res.json({error: "username taken",errorMessage: "This Username is already taken!"});
        return;
    }

    let hashedPassword = await bcrypt.hash(req.fields.masterPassword,10);

    let newUser = {
        username: req.fields.username,
        password: hashedPassword,
        createdAt: new Date(),
        websites: [],
    };

    let dbUser = await userSchema.create(newUser);

    req.session.userId = dbUser.id;

    res.json(dbUser);
})

app.post('/login', async (req, res) => {

    if (!req.fields.username || !req.fields.masterPassword)
    {
        res.json({error: "field empty",errorMessage: "The field for Username and Masterpassword must not be empty!"});
        return;
    }

    let user = await userSchema.findOne({username: req.fields.username});

    if(user !== null && req.fields.username === user.username && bcrypt.compare(req.fields.masterPassword, 'SHA-256')) {
        req.session.userId = user.id;
        res.json(user);
    } else {
        res.json({error: "invalid credentials", errorMessage:"No user found with these credentials"});
    }
});

app.listen(PORT, (error) => {
if(!error) {
    console.log(`App is listening on port ${PORT}`);
} else {
    console.log("Error occurred, server can't start", error);
}
});