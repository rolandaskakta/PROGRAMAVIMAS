const AppError = require("../utils/AppError");

module.exports = (req, res, next) => {
    let { clientName, amount } = req.body;

    // 1️⃣ Ar pateikti privalomi laukai
    if (clientName === undefined || amount === undefined) {
        throw new AppError(
            "Kliento pavadinimas ir suma yra privalomi laukai",
            400
        );
    }

    // 2️⃣ Tipų tikrinimas
    if (typeof clientName !== "string") {
        throw new AppError(
            "Kliento pavadinimas turi būti tekstas",
            400
        );
    }

    if (typeof amount !== "number") {
        throw new AppError(
            "Suma turi būti skaičius",
            400
        );
    }

    // 3️⃣ Reikšmių tikrinimas
    clientName = clientName.trim();

    if (clientName.length < 2) {
        throw new AppError(
            "Kliento pavadinimas turi būti bent 2 simbolių ilgio",
            400
        );
    }

    if (amount <= 0) {
        throw new AppError(
            "Suma turi būti didesnė už nulį",
            400
        );
    }

    // 4️⃣ Normalizuojam duomenis
    req.body.clientName = clientName;
    req.body.amount = Number(amount.toFixed(2));

    // 5️⃣ Viskas gerai – keliaujam toliau
    next();
};

