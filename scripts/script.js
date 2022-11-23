const button = document.createElement("button");
button.classList.toggle("btn");
button.textContent = "Refresh";
const container = document.querySelector('#container');
container.appendChild(button);



function makeGrid(cellNum) {
    
    for (let i = 0; i < cellNum; i++){
        const cell = document.createElement("div");
        cell.classList.toggle("cell");
        container.appendChild(cell);
    }
}
makeGrid(256);

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
        gridCell.setAttribute('style', 'background: navy');
    })
});

button.addEventListener('click', () => {
    let gridNumber = prompt("Please enter a grid number", "16");
    let gridNum = parseInt(gridNumber);
    let gridNum2 = gridNum * gridNum;

    if (gridNum < 100){
        reset();
        makeGrid(gridNum2);
    }
});

function reset(){
    document.querySelectorAll(".cell").forEach((e) => e.parentNode.removeChild(e));
}