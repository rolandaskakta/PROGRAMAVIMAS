const pool = require("../db");


let invoices = [];

const AppError = require("../utils/AppError");

// POST /invoices
const createInvoice = async (req, res, next) => {
  try {
    const { clientName, amount } = req.body;

    const vat = amount * 0.21;
    const total = amount + vat;
    const createdAt = new Date();

    const [result] = await pool.query(
      `
      INSERT INTO invoices 
      (client_name, amount, vat, total, created_at)
      VALUES (?, ?, ?, ?, ?)
      `,
      [clientName, amount, vat, total, createdAt]
    );

    const [rows] = await pool.query(
      "SELECT * FROM invoices WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
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
    throw new AppError("Sąskaita nerasta", 404);
  }

    invoices.splice(index, 1);

    res.status(204).send();
};
const updateInvoice = (req, res) => {
  const id = Number(req.params.id);
  const { clientName, amount } = req.body;

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    throw new AppError("Sąskaita nerasta", 404);
  }

  // atnaujinam laukus
  invoice.clientName = clientName;
  invoice.amount = amount;
  invoice.vat = amount * 0.21;
  invoice.total = invoice.amount + invoice.vat;
  invoice.updatedAt = new Date().toISOString();

  res.json(invoice);
};


module.exports = {
    createInvoice,
    getInvoices,
    getInvoiceById,
    deleteInvoice,
    updateInvoice,
};
