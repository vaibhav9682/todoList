const express = require('express');
const router = express.Router();
const createTask = require('../controller/createTask');
router.post('/createTask', createTask.create);


module.exports = router;