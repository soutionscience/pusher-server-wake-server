var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');




let mongoose = require('mongoose')

let cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let tripRouter = require('./routes/trips.routes')

let distanceScript = require('./scripts/getDistance');
let callScript = require('./scripts/makeCall');
let countryScript = require('./scripts/getCountries');

let distanceRouter = require('./routes/distance');
let callRouter = require('./routes/call.route');
let countryRouter = require('./routes/country.route')

let formRouter = require('./routes/form.router')

var app = express();
 app.use(cors())

 app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));
  
 app.use(flash());

require('dotenv').config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/form', formRouter)
app.use('/api/users', usersRouter);
app.use('/api/trips', tripRouter);
app.use('/api/distance', distanceRouter)
app.use('/api/call', callRouter)
app.use('/api/countries', countryRouter)

app.use(express.static(path.join(__dirname, 'public')));





mongoose.connect(process.env.remoteDb,  { useNewUrlParser: true }, function(err, db){
  if(err) throw err
  console.log("connected: ", db.host);
  database=db

})

//distanceScript.get();
//callScript.call()
//countryScript.makeRequest()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
