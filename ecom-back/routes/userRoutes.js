const { getAllUsers, getUsersCount, deleteUser } = require("../controllers/authController");
const verifyToken = require("../middleware/authmiddleware");
const router = require("express").Router();

router.get("/", verifyToken, getAllUsers);
router.get("/count", getUsersCount);
router.delete("/:id", deleteUser);

module.exports = router;
