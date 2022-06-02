const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


// const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));


// app.get('/:id', (req, res) => {
//     fs.readFile(path.join(__dirname, "../public/jsonData/user.json"), 'utf-8', (err, data) => {
//         var users = JSON.parse(data);
//         var user = users["user" + req.params.id]
//         console.log(user);
//         res.send(user);
//     })
// })
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}
app.post('/addUser', (req, res) => {
    fs.readFile(path.join(__dirname, "../public/jsonData/user.json"), 'utf8', (err, data) => {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
app.delete('/deleteUser', (req, res) => {
    fs.readFile(path.join(__dirname, "../public/jsonData/user.json"), 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data["user" + 2];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})



app.listen(8081, () => {
    console.log("8000 activated");
})