const express = require('express');
const path = require('path');
const app = express();
const bhs = require('hbs');
const bodyParser = require('body-parser');
const { parseArgs } = require('util');
const port = process.env.PORT || 5000

const publicDirectoryPath = path.join(__dirname, '../');
//console.log(__dirname);
app.use(express.static(publicDirectoryPath)); // html에 대한 절대 경로
app.unsubscribe(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');
    res.render('index', {
        제목: '날씨',
        이름: 'temp'
    }
    );
})

app.listen(5000, () => console.log(`server is running port ${port}`));