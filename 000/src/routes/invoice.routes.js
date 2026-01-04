const express = require("express");
const router = express.Router();

const {
    createInvoice,
    getInvoices,
    getInvoiceById,
    deleteInvoice,
    updateInvoice,
} = require("../controllers/invoice.controller");

const validateInvoice = require("../middlewares/validateInvoice.middleware");
const validateInvoiceId = require("../middlewares/validateInvoiceId.middleware");

router.post("/", validateInvoice, createInvoice);
router.get("/", getInvoices);
router.get("/:id", validateInvoiceId, getInvoiceById);
router.delete("/:id", validateInvoiceId, deleteInvoice);
router.put(
  "/:id",
  validateInvoiceId,
  validateInvoice,
  updateInvoice
);


module.exports = router;

