const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Health check (important for Render)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Food API is running 🚀",
  });
});

// Import routes
const foodRouter = require("./routes/foodItem");
const restaurantRouter = require("./routes/restaurant");
const menuRouter = require("./routes/menu");
const couponRouter = require("./routes/couponRoutes");
const orderRouter = require("./routes/order");
const authRouter = require("./routes/auth");
const paymentRouter = require("./routes/payment");
const cartRouter = require("./routes/cart");

// Routes
app.use("/api/v1/eats", foodRouter);
app.use("/api/v1/eats/menus", menuRouter);
app.use("/api/v1/eats/stores", restaurantRouter);
app.use("/api/v1/eats/orders", orderRouter);
app.use("/api/v1/users", authRouter);
app.use("/api/v1", paymentRouter);
app.use("/api/v1/coupon", couponRouter);
app.use("/api/v1/eats/cart", cartRouter);

// View engine (if used)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 404 handler
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Error middleware
app.use(errorMiddleware);

module.exports = app;