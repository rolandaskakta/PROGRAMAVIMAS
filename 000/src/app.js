const express = require("express");
const invoiceRoutes = require("./routes/invoice.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const AppError = require("./utils/AppError");

const app = express();

app.use(express.json());

app.use("/invoices", invoiceRoutes);

// ✅ 404 HANDLER (be path)
app.use((req, res, next) => {
  next(
    new AppError(
      `Resursas nerastas: ${req.originalUrl}`,
      404
    )
  );
});

// ❗ ERROR HANDLER – VISADA PASKUTINIS
app.use(errorMiddleware);

module.exports = app;







