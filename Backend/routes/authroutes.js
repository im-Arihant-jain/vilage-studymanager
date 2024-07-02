const express = require("express");

const {loginController} = require('../controllers/userController');
  const { registerController } = require("../controllers/userController");
  const { getFellow } = require("../controllers/userController");
const router = express.Router();
router.post('/login',loginController)
  router.post('/register',registerController)
  router.post('/getfellow',getFellow)
module.exports = router;