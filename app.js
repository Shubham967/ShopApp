const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const fStrategy = require('passport-facebook').Strategy;
const User = require('./models/user');
const https = require('https')
const fs = require('fs')

//Routes
const productsRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');


mongoose.connect('mongodb://localhost:27017/ShopApp',
{
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex:true
})
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log("Ohh Error");
    console.log(err);
});

//seedDB();

app.set('view engine' , 'ejs' );
app.set('views' , path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret : 'weneedsomebettersecret',
    resave : false,
    saveUninitialized : true
}

app.use(session(sessionConfig));

app.use(flash());

// Initilising the passport and sessions for storing the users info
app.use(passport.initialize());
app.use(passport.session());

// configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()))

passport.use(new fStrategy({

    clientID        : "864818324379403",
    clientSecret    : "1a0a2693dd4e246b6e98d6f3ee6ae57c",
    callbackURL     : "https://localhost:3000/facebook/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']

},// facebook will send back the token and profile
function(token, refreshToken, profile, done) {
    console.log(profile)
    return done(null,profile)
}))





app.use((req,res,next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    // res.locals.nuser = req.user.username;
    next();
});


  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

//  passport.serializeUser(function(user, done){
//      done(null, user)
//  })
//  passport.deserializeUser(function(id, done){
//      return done(null, id)
//  })



app.get('/' , (req,res) =>{
    res.render('products/home');
})

app.get('/enter',(req,res) => {
    res.redirect('/products');
})

app.use(productsRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.get('/facebook',passport.authenticate('facebook', { scope : ['email'] }))

app.get('/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/profile',
			failureRedirect : '/reject'
		}));


app.get('/profile',(req,res) => {
     res.render('products/index');
})

app.get('/reject',(req,res) => {
    res.send("Rejected");
})


// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
//   }, app).listen(3000, () => {
//     console.log('Listening...')
//   })
app.listen(3000 , () => {
     console.log("Sever started at port 3000");
})
