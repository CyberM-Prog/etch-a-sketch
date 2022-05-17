const container = document.querySelector('#container')

for (let i = 1; i <= 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('grid')
    container.appendChild(divs)
}

const grid =  document.querySelectorAll('.grid')

