var express = require('express');
var router = express.Router();
const controller= require("../controllers/user.controller")




router.route('/')
.post(controller.post)
.get(controller.get)

router.route(':/id')



module.exports = router;
