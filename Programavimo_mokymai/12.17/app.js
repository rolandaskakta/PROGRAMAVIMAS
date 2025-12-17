const dayEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const newYear = new Date('January 1, 2026 00:00:00')

function countdown() {
    const now = new Date();
    const timeLeft = newYear - now;
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const d = Math.floor(timeLeft / day);
    const h = Math.floor((timeLeft % day) / hour);
    const m = parseInt((timeLeft % hour) / min);
    const s = parseInt((timeLeft % min) / sec);
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(countdown, 1000);
}

countdown();
