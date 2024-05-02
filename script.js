const body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = "Choose your resolution";
body.appendChild(button);

button.addEventListener('click', () => {
    let chooseNum = prompt('Choose your number of squares !');
    createGrid(chooseNum);
});

window.addEventListener('load', () => {
    createGrid(3200);
});

function generateRandomColor() {
    // Generate random values for red, green, and blue components
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Convert RGB to hexadecimal
    let color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');

    return color;
}

function createGrid(numSquare) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    let tailleCard = 8;
    let racineCarre = Math.sqrt(numSquare);
    let sizeContainer = tailleCard * racineCarre;
    container.style.height = sizeContainer + 'px';
    container.style.width = sizeContainer + 'px';

    for (let i=0; i<numSquare; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        container.appendChild(card);

        card.style.height = tailleCard + 'px';
        card.style.width = tailleCard + 'px';
        
        card.addEventListener('mouseenter', () => {
            let randomColor = generateRandomColor();
            card.style.backgroundColor = randomColor;
        });
    }
}