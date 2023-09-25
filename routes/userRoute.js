const express = require("express");
const { loginController, signupController, authorController } = require("../controllers/userController");
const authorMiddleware = require("../middlewares/authorMiddleware");

// router onject
const router = express.Router();

// routes
// login || POST
router.post("/login", loginController);

// signup || POST
router.post("/signup", signupController);

// authorization/home || POST
router.post("/getuserdata", authorMiddleware, authorController)

module.exports = router;