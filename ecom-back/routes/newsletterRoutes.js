const router = require("express").Router();
const newsletterController = require("../controllers/newsLetterController");
router.get("/", newsletterController.getAllSubscribers);
router.post("/", newsletterController.subscribe);
router.delete("/", newsletterController.unsubscribe);
module.exports = router;
