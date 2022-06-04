const mongoose = require("mongoose");
const validator = require("validator");

const PaymentSchema = mongoose.Schema({
  uName: {
    type: String,
    required: true,
  },
  CardType: {
    type: String,
    required: true,
  },
  CardNo: {
    type: Number,
    required: true,
  },
  ExpDate: {
    type: Date,
    require: true,
  },
  Cvcode: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email Address"],
  },

  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
      required: true,
    },
    line3: {
      type: String,
      required: true,
    },
    // },
    // gender:{
    //     type: String,
    //     required:true
    // },
    // emType:{
    //     type: String,
    //     required:true
  },
});

module.exports = mongoose.model("Payment", PaymentSchema);
