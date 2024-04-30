const Items = require("../models/Items");

const addNewItem = async (req, res) => {
  const { newItem } = req.body;

  await Items.create(newItem);

  res.status(200).json({
    success: true,
  });
};

module.exports = addNewItem;
