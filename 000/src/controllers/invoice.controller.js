let invoices = [];

const AppError = require("../utils/AppError");

// POST /invoices
const createInvoice = (req, res) => {
  const { clientName, amount } = req.body;

  const vat = amount * 0.21;
  const total = amount + vat;

  const invoice = {
    id: Date.now(),
    clientName,
    amount,
    vat,
    total,
    createdAt: new Date().toISOString(),
  };

  invoices.push(invoice);

  res.status(201).json(invoice);
};

// GET /invoices
const getInvoices = (req, res) => {
    res.json(invoices);
};

// GET /invoices/:id
const getInvoiceById = (req, res) => {
  const id = Number(req.params.id);

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    throw new AppError("Sąskaita nerasta", 404);
  }

  res.json(invoice);
};

// DELETE /invoices/:id
const deleteInvoice = (req, res) => {
    const id = Number(req.params.id);

    const index = invoices.findIndex((inv) => inv.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Invoice not found" });
    }

    invoices.splice(index, 1);

    res.status(204).send();
};

module.exports = {
    createInvoice,
    getInvoices,
    getInvoiceById,
    deleteInvoice,
};
