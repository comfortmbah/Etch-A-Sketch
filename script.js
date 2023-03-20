const grid = document.getElementById('grid'); 

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        grid.appendChild(cell);
    }
}

makeGrid(16);