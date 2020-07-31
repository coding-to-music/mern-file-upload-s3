require("dotenv").config();
const express = require("express");
const path = require("path");

const cors = require("cors");
const fileUploadRoutes = require("./routes/fileUploadRoutes");
const app = express();
const config = require("./config/config");


app.use(cors());

// Replace the above three lines for connecting mongodb with the below single line

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "build")));

// make the '/api/document' browser url route to go to documentRoutes.js route file
app.use("/api/document", fileUploadRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


  // render the error page
  res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: err
  //   });
  // res.status(err.status || 500);
  // res.render("error");
});

module.exports = app;