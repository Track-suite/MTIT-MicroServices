const express = require("express");
const router = express.Router();

const {
  addDelivery,
  getDelivery,
  getDeliveryById,
  deleteDelivery,
  updateDelivery,
} = require("../controllers/Delivery.controller");

//Register Payment
router.route("/adddeli").post(addDelivery);
router.route("/getdeli").get(getDelivery);
router.route("/getdelibyid/:id").get(getDeliveryById);
router.route("/deleteDeli/:id").delete(deleteDelivery);
router.route("/updateDeli/:id").put(updateDelivery);

module.exports = router;
