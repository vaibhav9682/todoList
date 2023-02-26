const Task = require('../model/taskSchema')

module.exports.home = function (req, res) {

    Task.find({}, function (err, task) {
        if (err) {
            console.log('getting error in fetching data from db');
            return;
        }
        return res.render("home", {
            task_List: task

        })


        // console.log(__dirname);

    });

}

