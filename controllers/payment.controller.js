const Payment = require("../models/payment.model");

//add Payment
exports.addPayment = async (req, res) => {
  const payment = await Payment.create(req.body);

  if (!payment) {
    res.status(401).json({
      success: false,
      message: "Add payment was failed",
    });
  }

  res.status(200).json({
    success: true,
    payment,
  });
};

//get payment
exports.getPayment = async (req, res) => {
  const payment = await Payment.find();

  if (!payment) {
    res.status(401).json({
      success: false,
      message: "get payment was failed",
    });
  }

  res.status(200).json({
    success: true,
    payment,
  });
};

//get Paments By Id
exports.getPaymentById = async (req, res) => {
  const payment = await Payment.findById(req.params.id);

  if (!payment) {
    res.status(401).json({
      success: false,
      message: "get payment was failed",
    });
  }

  res.status(200).json({
    success: true,
    payment,
  });
};

exports.deletePayment = async (req, res) => {
  const payment = await Payment.findByIdAndDelete(req.params.id);

  if (!payment) {
    res.status(401).json({
      success: false,
      message: "delete payment was failed",
    });
  }

  res.status(200).json({
    success: true,
    payment,
  });
};

exports.updatePayment = async (req, res) => {
  let payment = await Payment.findById(req.params.id);

  if (!payment) {
    return res.status(404).json({
      success: false,
      message: "Payment Not Found",
    });
  }

  payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    payment,
  });
};

//test comment
