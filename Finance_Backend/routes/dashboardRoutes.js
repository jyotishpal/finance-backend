const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
    getSummary,
    monthlyReport
} = require("../controllers/dashboardController");

router.get("/summary", auth, role("admin", "analyst"), getSummary);
router.get("/monthly", auth, role("admin", "analyst"), monthlyReport);

module.exports = router;