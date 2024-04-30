const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/gofood";

module.exports = () => {
  mongoose
    .connect(mongoURI)
    .then(console.log("Connected to MongoDB"))
    .catch((error) => console.error(error));
};
