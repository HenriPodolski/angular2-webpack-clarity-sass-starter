const express = require('express');
const path = require('path');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', function response(req, res) {
    let docs = { message: 'It works!' };
    res.json(docs);
});

app.listen(app.get('port'), function() {
    console.log('BASF Construction Chemicals Full Stack Server listening on port ' + app.get('port'));
});

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
const Cat = require('./cat.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');

    // APIs
    // select all
    app.get('/cats', function(req, res) {
        Cat.find({}, function(err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    });

    // count all
    app.get('/cats/count', function(req, res) {
        Cat.count(function(err, count) {
            if (err) return console.error(err);
            res.json(count);
        });
    });

    // create
    app.post('/cat', function(req, res) {
        let obj = new Cat(req.body);
        obj.save(function(err, obj) {
            if (err) return console.error(err);
            res.status(200).json(obj);
        });
    });

    // find by id
    app.get('/cat/:id', function(req, res) {
        Cat.findOne({
            _id: req.params.id
        }, function(err, obj) {
            if (err) return console.error(err);
            res.json(obj);
        })
    });

    // update by id
    app.put('/cat/:id', function(req, res) {
        Cat.findOneAndUpdate({
            _id: req.params.id
        }, req.body, function(err) {
            if (err) return console.error(err);
            res.sendStatus(200);
        })
    });

    // delete by id
    app.delete('/cat/:id', function(req, res) {
        Cat.findOneAndRemove({
            _id: req.params.id
        }, function(err) {
            if (err) return console.error(err);
            res.sendStatus(200);
        });
    });



});*/

module.exports = app;
