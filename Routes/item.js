const express = require("express");
const addNewItem = require("../controllers/items");

const router = express.Router();

router.route("/new_item").put(addNewItem);

module.exports = router;
