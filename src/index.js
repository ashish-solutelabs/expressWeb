// const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();



const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));


const bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))
    // app.get("/", (req, res) => {
    //     console.log("Cookies: ", req.cookies)
    //         // res.sendFile(staticPath + "/" + "index.html");
    // })



app.get("/get_from_details", (req, res) => { //endpoint
    console.log("Show time")
        // let frist_name = ;
        // let last_name = ;
    let response = {
            frist_name: req.query.first_name,
            last_name: req.query.last_name
        }
        //query
    console.log(response);
    res.end(JSON.stringify(response))
})



app.post("/get_post", (req, res) => {
    let response = {
            frist_name: req.body.first_name,
            last_name: req.body.last_name
        }
        //req.body
    console.log(response);
    res.end(JSON.stringify(response))
})

app.listen(8000, () => {
    console.log("Port 8000 activated")
})


var multer = require('multer');


// const multerPath = path.join(__dirname, "..", 'temp');
// console.log(multerPath)
// app.use(multer({ dest: multerPath }))


//json