const Delivery = require("../models/Delivery.model");

//add Delivery
exports.addDelivery = async (req, res) => {
  const delivery = await Delivery.create(req.body);

  if (!delivery) {
    res.status(401).json({
      success: false,
      message: "Add delivery was failed",
    });
  }

  res.status(200).json({
    success: true,
    message: "Add delivery was success",
    delivery,
  });
};

//get delivery
exports.getDelivery = async (req, res) => {
  const delivery = await Delivery.find();

  if (!delivery) {
    res.status(401).json({
      success: false,
      message: "get delivery was failed",
    });
  }

  res.status(200).json({
    success: true,
    message: "Here is Your Delivery Details",
    delivery,
  });
};

//get Delivery By Id
exports.getDeliveryById = async (req, res) => {
  const delivery = await Delivery.findById(req.params.id);

  if (!delivery) {
    res.status(401).json({
      success: false,
      message: "get Delivery was failed",
    });
  }

  res.status(200).json({
    success: true,
    delivery,
  });
};

exports.deleteDelivery = async (req, res) => {
  const delivery = await Delivery.findByIdAndDelete(req.params.id);

  if (!delivery) {
    res.status(401).json({
      success: false,
      message: "delete delivery was failed",
    });
  }

  res.status(200).json({
    success: true,
    message: "detail is deleted successfully",
    delivery,
  });
};

exports.updateDelivery = async (req, res) => {
  let delivery = await Delivery.findById(req.params.id);

  if (!delivery) {
    return res.status(404).json({
      success: false,
      message: "Delivery Not Found",
    });
  }

  delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    delivery,
  });
};

//test comment
