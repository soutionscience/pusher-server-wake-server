var express = require('express');
var router = express.Router();
const controller= require("../controllers/user.controller")




router.route('/')
.post(controller.post)
.get(controller.get)
.delete(controller.delete)


router.route('/:id/verify')
.post(controller.verify)

router.route('/:id')





module.exports = router;
