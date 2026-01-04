const AppError = require("../utils/AppError");

module.exports = (req, res, next) => {
  const { id } = req.params;

  // 1️⃣ Ar ID pateiktas
  if (!id) {
    throw new AppError("Sąskaitos ID yra privalomas", 400);
  }

  // 2️⃣ Ar ID yra skaičius
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    throw new AppError("Sąskaitos ID turi būti skaičius", 400);
  }

  // 3️⃣ Normalizuojam (kad controller gautų tvarkingą ID)
  req.params.id = numericId;
  console.log("VALIDATE ID SUVEIKĖ:", req.params.id);

  next();
};
