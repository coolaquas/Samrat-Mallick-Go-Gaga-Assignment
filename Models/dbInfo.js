const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Location: { type: String, required: true },
});

module.exports = mongoose.model("Info", infoSchema);
