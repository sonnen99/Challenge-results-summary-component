const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const json = require(__dirname + '/public/data.json');

const app = express();

let content = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    content = [];
    json.forEach(element => {
        content.push(element);
    });  
    res.render('index', { content: content });
});




app.listen(3000, () => console.log('Listening'));