const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, '/'); // 서버 디렉토리 위치

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'home.html'));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, 'editor.html'));
})

// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    console.log(date);
    //image name
    let imagename = date.getDate() + date.getTime() + file.name;
    console.log(imagename);
    // image upload path
    let path = 'uploads/' + imagename;
    console.log(path);
    // create upload
    file.mv(path, (err, result) => {
        if(err) {
            throw err;
        } else {
            // our image upload path
            res.json(`/uploads/${imagename}`);
        }
    })
})

app.listen('3000', () => {
    console.log('listening..')
})