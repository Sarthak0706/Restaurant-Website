const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    type: [
      {
        half: {
          type: String,
          required: true,
        },
        full: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("items", ItemSchema);
