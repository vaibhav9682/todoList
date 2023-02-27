const express = require('express');
const router = express.Router();
const deleteTask = require('../controller/deleteController');
router.get('/delform', deleteTask.delete);


module.exports = router;