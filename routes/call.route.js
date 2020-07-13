var express = require('express');
var router = express.Router();
const controller = require("../controllers/call.controller")
//const controller= require("../scripts/makeCall")




router.route('/')
.post(controller.post)
.get(controller.get)

module.exports = router