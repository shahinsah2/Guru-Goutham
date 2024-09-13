const express = require("express");
const connectDB = require("./config/database");
const app = express();

require("dotenv").config();

// DataBase connection
connectDB()


// Import routes
const roleRoutes = require("./routes/roleRoutes");
const branchRoutes = require("./routes/branchRoutes");
const userRoutes = require("./routes/userRoutes");
const contactTypeRoutes = require("./routes/contactTypeRoutes");
const taxRoutes = require("./routes/taxRoutes");
const brandRoutes = require("./routes/brandRoutes");
const productCategoryRoutes = require("./routes/productCategoryRoutes");
const stockLocationRoutes = require("./routes/stockLocationRoutes");
const customerRoutes = require("./routes/customerRoutes");
const leadRoutes = require("./routes/leadRoutes");


//  Middleware

app.use(express.json());


// Register routes
app.use("/api/roles", roleRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact-types", contactTypeRoutes);
app.use("/api/taxes", taxRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/product-categories", productCategoryRoutes);
app.use("/api/stock-locations", stockLocationRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);

// Conditionally use error middleware
// try {
//   const errorMiddleware = require("./middlewares/errorMiddleware");
//   app.use(errorMiddleware);
//   console.log("Error middleware registered");
// } catch (err) {
//   console.warn("Error middleware not found, skipping...");
// }

// // Setup Swagger
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
