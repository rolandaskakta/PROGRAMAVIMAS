
const buttonBMI = document.querySelector('button');
let LIST = [];
const KEY = 'BMI';

const calculateBMI = () => {
    const height = Number(document.querySelector('.height').value);
    const weight = Number(document.querySelector('.weight').value);
    const BMIResult = Number((weight / (height / 100) ** 2).toFixed(1));
    document.querySelector('.bmi').value = BMIResult;

    const weightCondition = document.querySelector('span');

    if (BMIResult < 18.5) {
        weightCondition.innerText = "Underweight";
    } else if (BMIResult <= 24.9) {
        weightCondition.innerText = "Healthy Weight";
    } else if (BMIResult <= 29.9) {
        weightCondition.innerText = "Overweight";
    } else {
        weightCondition.innerText = "Obesity";
    }

    Store(height, weight, BMIResult);
};

const readLocalStorage = () => {
    const data = localStorage.getItem(KEY);
    LIST = data ? JSON.parse(data) : [];
};

const writeLocalStorage = () => {
    localStorage.setItem(KEY, JSON.stringify(LIST));
};

const Store = (height, weight, BMIResult) => {
    const id = crypto.randomUUID();
    LIST.unshift({ id, height,  weight, BMIResult });
    writeLocalStorage();
};

readLocalStorage();
buttonBMI.addEventListener('click', calculateBMI);