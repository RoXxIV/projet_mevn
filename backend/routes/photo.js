const express = require("express");

const router = express.Router();

const photoController = require("../controllers/photo");

router.post("/", photoController.createPhoto);
router.put("/:id", photoController.modifyPhoto);
router.delete("/:id", photoController.deletePhoto);
router.get("/:id", photoController.getOnePhoto);
router.get("/", photoController.getAllPhoto);

module.exports = router;
