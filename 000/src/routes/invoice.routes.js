const express = require("express");
const router = express.Router();
const validateInvoice = require("../middlewares/validateInvoice.middleware");
const validateInvoiceId = require("../middlewares/validateInvoiceId.middleware");



const {
  createInvoice,
  getInvoices,
  getInvoiceById,
  deleteInvoice,
} = require("../controllers/invoice.controller");

router.get("/hello", (req, res) => {
  res.json({ message: "Hello API!" });
});

router.post("/", validateInvoice, createInvoice);
router.get("/", getInvoices);
router.get("/:id", validateInvoiceId, getInvoiceById);
router.delete("/:id", deleteInvoice);

module.exports = router;

