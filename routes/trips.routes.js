var express = require('express');
var router = express.Router();
const controller= require("../controllers/trip.controller")




router.route('/')
.post(controller.post)

module.exports = router