//10 uzduotis

  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

(function() {
  const container10 = document.getElementById('circleContainer');
  const count = 444;
  const minDiameter = 44;
  const maxDiameter = 144;

  // Gauti konteinerio dimensijas (viso ekrano)
  const width = window.innerWidth;
  const height = window.innerHeight;

  for(let i = 0; i < count; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Atsitiktinė spalva
    const color = randomColor();

    // Atsitiktinis skersmuo
    const diameter = rand(minDiameter, maxDiameter);

    // Atsitiktinis pozicijos x,y taip, kad apskritimas tilptų ekrane
    const x = rand(0, width - diameter);
    const y = rand(0, height - diameter);

    // Taikome stilius
    circle.style.width = diameter + 'px';
    circle.style.height = diameter + 'px';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.backgroundColor = color;
    circle.style.opacity = 0.5;

    container10.appendChild(circle);
  }
})();