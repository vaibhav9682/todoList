
const Task = require('../model/taskSchema')


module.exports.delete = function (req, res) {

    let taskId = req.query.task

    for (let i = 0; i < taskId.length; i++) {
        Task.findByIdAndDelete(taskId[i], function (err) {
            if (err) {
                console.log("error in deleting document from db")
                return;
            }

        })

    }

    return res.redirect('/');
}