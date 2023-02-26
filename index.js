const express = require('express');
const port = 5000;
const db = require('./config/mongoose')
const app = express();

// const Task = require('./model/taskSchema');

app.use(express.urlencoded());
app.use('/', require('./router'))

// app.post('/createTask', function(req,res){
//     Task.create({
//         task: req.body.description,
//         category: req.body.category,
//         date: req.body.Due_date
//     }, function (err, newTask) {
//         if (err) {
//             console.log("error in creating task to db");
//             return;
//         }
//         console.log(newTask);
//         return res.redirect('back')
//     })
// })

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static("asset"));



app.listen(port, function (err) {
    if (err) {
        console.log(`error in starting express server on port : ${port}`);

    }
    console.log(`server is running on port : ${port}`);
})
