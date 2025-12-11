
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const container = document.getElementById("output");
let result = "";

for (let i = 0; i < 44; i++) {
    let num = rand(14, 44);

    if (num % 4 === 0) {
        result += `<span class="red">${num}</span>`;
    } else {
        result += `<span class="blue">${num}</span>`;
    }

    if (i < 43) result += " "; // tarpas tarp skaičių
}

container.innerHTML = result;

//5 uzduotis
const out = document.getElementById("output1");

for (let i = 4; i <= 14; i++) {
    let result = 4 * i;

    out.innerHTML += `
        <div class="line">
            <span class="number">4</span> × 
            <span class="number">${i}</span> = 
            <span class="result">${result}</span>
        </div>
    `;
}

// 6 uzduotis
(function () {
    const TOTAL_STARS = 444;
    const MAX_STARS_PER_ROW = 44;

    const outputBox = document.getElementById("stars-output");

    const rowCount = Math.floor(TOTAL_STARS / MAX_STARS_PER_ROW);
    const leftover = TOTAL_STARS % MAX_STARS_PER_ROW;

    // Pilnos eilutės
    for (let k = 0; k < rowCount; k++) {
        const rowBlock = document.createElement("div");
        rowBlock.className = "stars-row-item";
        rowBlock.textContent = "*".repeat(MAX_STARS_PER_ROW);
        outputBox.appendChild(rowBlock);
    }

    // Likusi eilutė, jei yra žvaigždučių likutis
    if (leftover > 0) {
        const lastBlock = document.createElement("div");
        lastBlock.className = "stars-row-item";
        lastBlock.textContent = "*".repeat(leftover);
        outputBox.appendChild(lastBlock);
    }
})();

//7 uzduotis

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

function createMatrioška(rootId, count = 14, outerSize = 480, step = 28) {
    const root = document.getElementById(rootId);
    if (!root) return;

    root.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const size = outerSize - i * step;
        const el = document.createElement('div');
        el.className = 'matrio-square';

        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.top = '50%';
        el.style.left = '50%';
        el.style.transform = 'translate(-50%, -50%)';

        const bg = randomColor();
        el.style.background = bg;

        el.style.border = '2px solid rgba(255,255,255,0.15)';
        el.title = `Kvadratas ${i + 1} — ${bg}`;

        el.addEventListener('mouseenter', () => {
            el.style.transform = 'translate(-50%, -50%) scale(1.03)';
            el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.18)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(-50%, -50%) scale(1)';
            el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
        });

        root.appendChild(el);
    }
}

createMatrioška('matrioRoot', 14, 480, 28);

// 8 uzduotis

 const gridContainer = document.getElementById('uniqueSquareGrid');
  const size = 41;
  const blockChar = '■'; // &#9632;

  for(let row = 0; row < size; row++) {
    for(let col = 0; col < size; col++) {
      const span = document.createElement('span');
      span.textContent = blockChar;

      // Patikriname ar pozicija priklauso įstrižainėms
      if(row === col || (row + col) === (size - 1)) {
        span.classList.add('diagonal');
      }

      gridContainer.appendChild(span);
    }
  }

  