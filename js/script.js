document.getElementById('generateGridButton').addEventListener('click', generateGrid);

function generateGrid() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';

    for (let row = 0; row < 10; row++) {
        
        for (let col = 0; col < 10; col++) {
          const cellNumber = row * 10 + col + 1;
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.textContent = cellNumber;
          gridContainer.appendChild(cell);
        }
    }
}

