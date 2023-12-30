// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a path
const path = require('path');
// create a body parser
const bodyParser = require('body-parser');
// create a mongoose
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
// create a schema
const Schema = mongoose.Schema;
// create a schema
const commentSchema = new Schema({
    name: String,
    comment: String
});
// create a model
const Comment = mongoose.model('Comment', commentSchema);
// use body parser
app.use(bodyParser.urlencoded({ extended: true }));
// use body parser
app.use(bodyParser.json());
// use express
app.use(express.static('public'));
// get request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// post request
app.post('/comment', (req, res) => {
    const comment = new Comment(req.body);
    comment.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});
// get request
app.get('/comment', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            console.log(err);
        });
});
