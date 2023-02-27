const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller')

router.get('/', homeController.home);

// other routers 

router.use('/users', require('./createRouter'))
router.use('/users', require('./delete'))

module.exports = router;