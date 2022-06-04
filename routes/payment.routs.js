const express = require("express");
const router = express.Router();

const {
  addPayment,
  getPayment,
  getPaymentById,
  deletePayment,
  updatePayment,
} = require("../controllers/payment.controller");

//Register User
router.route("/addpay").post(addPayment);
router.route("/getpay").get(getPayment);
router.route("/getpaybyid/:id").get(getPaymentById);
router.route("/deletepay/:id").delete(deletePayment);
router.route("/updatepay/:id").put(updatePayment);

module.exports = router;
