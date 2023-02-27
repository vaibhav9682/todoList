
const Task = require('../model/taskSchema')


module.exports.delete = function (req, res) {

    console.log(req.query.task);

    return res.redirect('back');
}