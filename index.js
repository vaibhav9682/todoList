const express = require('express');
const port = 7000;
const app = express();

app.use('/', require('./router'))

app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function (err) {
    if (err) {
        console.log(`error in starting express server on port : ${port}`);

    }
    console.log(`server is running on port : ${port}`);
})