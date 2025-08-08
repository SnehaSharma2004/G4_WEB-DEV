const express = require("express");
const {getProfile, createProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getdata", authMiddleware, getProfile);
router.post("/create", createProfile);




module.exports = router;