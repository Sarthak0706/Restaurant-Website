const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Categories", categoriesSchema);
