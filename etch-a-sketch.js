const container = document.querySelector('#container')

for (let i = 1; i <= 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('grid')
    divs.style.width = '60px'
    divs.style.height = '60px'
    container.appendChild(divs)
}

const grid =  document.querySelectorAll('.grid');

grid.forEach(square => square.addEventListener('mouseover', changeColor));

function changeColor() {
    this.classList.add('white')
}

const button = document.querySelector('button')

function changeGrid() {

    let size = prompt("How many squares do you want on each side (max. 100)", "")

    let list = document.querySelectorAll('.grid')

    if (size > 100 || size < 1) changeGrid()

    else {

        for (let i = 0; i <= 10000; i++) {
            if (list[i] == undefined) break;
            list[i].remove()
        }

        for (let i = 1; i <= (size * size); i++) {
            const divs = document.createElement('div');
            divs.classList.add('grid')
            divs.style.width = 960 / size + 'px'
            divs.style.height = 960 / size + 'px'
            container.appendChild(divs)
        }

        const grid =  document.querySelectorAll('.grid');
        grid.forEach(square => square.addEventListener('mouseover', changeColor));        
        
    }




}

button.addEventListener('click', changeGrid)




