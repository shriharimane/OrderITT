const Menu = require("../models/menu");
const Restaurant = require("../models/restaurant");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("../middlewares/catchAsyncErrors");


// GET ALL MENUS (for a specific restaurant)
exports.getAllMenus = catchAsync(async (req, res, next) => {

  const { storeId } = req.params;

  const menus = await Menu.find({ restaurant: storeId })
    .populate({
      path: "menu.items",
      model: "FoodItem",
    })
    .exec();

  res.status(200).json({
    status: "success",
    count: menus.length,
    data: menus,
  });

});


// CREATE MENU
exports.createMenu = catchAsync(async (req, res, next) => {

  const menu = await Menu.create(req.body);

  res.status(201).json({
    status: "success",
    data: menu,
  });

});


// DELETE MENU
exports.deleteMenu = catchAsync(async (req, res, next) => {

  const menu = await Menu.findByIdAndDelete(req.params.menuId);

  if (!menu) {
    return next(new ErrorHandler("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Menu deleted successfully",
  });

});