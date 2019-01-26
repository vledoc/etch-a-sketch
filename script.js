const grid = document.querySelector('.grid');
const div = document.querySelector('div');
const newBtn = document.querySelector('#newBtn');
const partyBtn = document.querySelector('#partyBtn');

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

function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return 'rgb(' + x + ',' + y + ',' + z + ')';
}

div.addEventListener('mouseover', function(e) {
    if (partyBtn.value == 'off') {
        e.target.style.backgroundColor = 'black';
    } else {
        e.target.style.backgroundColor = randomBgColor();
    }
});

newBtn.addEventListener('click', (newSize) => {
    document.getElementsByTagName('div')[0].innerHTML='';
    var newSize = prompt('How many squares per side would you like?');
    createGrid(newSize);
});

partyBtn.addEventListener('click', function() {
    if (partyBtn.value == 'off') {
        partyBtn.setAttribute('value', 'on');
    } else {
        partyBtn.setAttribute('value', 'off');
    }
});