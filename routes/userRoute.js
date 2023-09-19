const express = require("express");
const { loginController, signupController } = require("../controllers/userController");

// router onject
const router = express.Router();

// routes
// login || POST
router.post("/login", loginController);

// signup || POST
router.post("/signup", signupController);
module.exports = router;
