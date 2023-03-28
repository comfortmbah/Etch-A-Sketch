const grid = document.getElementById('grid'); 
const btnSize = document.querySelector('.btnSize');
const clearBtn = document.querySelector('.clearBtn');

clearBtn.onclick = () => clearGrid();
btnSize.addEventListener('click', resetSize);

function clearGrid() {
    grid.innerHTML = '';
} 

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function resetSize() {
    let number = prompt('What size would you like the grid to be? (1-100)');
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    makeGrid(number);
}

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        grid.appendChild(cell);
    }
}
