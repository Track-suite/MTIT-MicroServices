const mongoose = require("mongoose");
const validator = require("validator");

const DeliveySchema = mongoose.Schema({
  payId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Delivery", DeliveySchema);
