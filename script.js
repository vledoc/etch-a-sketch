const grid = document.querySelector('.grid');

function createGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (a = 0; a < size; a++) {
            const box = document.createElement('div');
            box.classList.add('box');
                const inner = document.createElement('div');
                inner.classList.add('inner');
                box.appendChild(inner);
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
}

createGrid(16);