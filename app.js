var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let mongoose = require('mongoose')

let cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let tripRouter = require('./routes/trips.routes')

let distanceScript = require('./scripts/getDistance')

var app = express();
 app.use(cors())

require('dotenv').config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/trips', tripRouter)





mongoose.connect(process.env.localDb,  { useNewUrlParser: true }, function(err, db){
  if(err) throw err
  console.log("connected: ", db.host);
  database=db

})

//distanceScript.get();

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