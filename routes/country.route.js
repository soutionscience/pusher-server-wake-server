var express = require('express');
var router = express.Router();
let controller = require('../controllers/countries.controller')

router.route('/')
.get(controller.get)

router.route('/active')
.get(controller.getActive)

router.route('/:id/activate')
.post(controller.setActive)



module.exports = router