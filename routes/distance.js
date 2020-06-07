var express = require('express');
var router = express.Router();
const controller= require("../controllers/distance.controller")




router.route('/')
.get(controller.get)

module.exports = router