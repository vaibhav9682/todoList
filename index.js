const express = require('express');
const port = 5000;
const db = require('./config/mongoose')
const app = express();



app.use(express.urlencoded());
app.use('/', require('./router'))


// set view engine

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static("asset"));



app.listen(port, function (err) {
    if (err) {
        console.log(`error in starting express server on port : ${port}`);

    }
    console.log(`server is running on port : ${port}`);
})
