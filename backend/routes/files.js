const express = require("express");
const router = express.Router();
const File = require("../controllers/files");

router.post("/write", File.write);
router.post("/updateFile", File.updateFile);
router.post("/read", File.read);
router.post("/deleteFile", File.deleteFile);
router.get("/", File.getAllFiles);


module.exports = router;