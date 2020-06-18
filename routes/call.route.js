var express = require('express');
var router = express.Router();
const controller= require("../scripts/makeCall")




router.route('/')
.post(controller.post)

module.exports = router