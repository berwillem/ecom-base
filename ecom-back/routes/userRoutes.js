const { getAllUsers } = require("../controllers/authController");
const verifyToken = require("../middleware/authmiddleware");
const router = require("express").Router();

router.get("/", verifyToken, getAllUsers);

module.exports = router;
