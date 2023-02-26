const Task = require('../model/taskSchema');

module.exports.create = function (req, res) {

    Task.create({
        task: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log("error in creating task to db");
            return;
        }
        console.log(newTask);
        return res.redirect('back')
    })


}