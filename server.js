// server.js
// load the things we need
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/views'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('quizHome');
});
app.get('/detailquestion', function(req, res) {
    res.render('quizDetail');
});
app.get('/quizset', function(req, res) {
    res.render('quizSet');
});
app.get('/admin', function(req, res) {
    res.render('quizAdmin');
});
app.get('/signin', function(req, res) {
    res.render('signin');
});
app.get('/signup', function(req, res) {
    res.render('signup');
});


app.listen(8080);
console.log('8080 is the magic port');