const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testname: {
    type: String,
    required: false,
    trim: true,
  },
  testdescription: {
    type: String,
    required: false,
    trim: true,
  },
});

const model = mongoose.model("test", testSchema);
module.exports = model;
