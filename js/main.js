
/*----- constants -----*/


/*----- app's state (variables) -----*/

let runningTotal;

/*----- cached element references -----*/

const result = document.getElementById('result')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const inpA = document.getElementById('num1')

/*----- event listeners -----*/

addBtn.addEventListener('click', handleSumClick);

subBtn.addEventListener('click', handleSubClick);

/*----- functions -----*/

init()

function init() {
    runningTotal = 0;
    render()
}

function render() {
    let actualTotal = (runningTotal < 0) ? runningTotal : `+${runningTotal}`
    result.textContent = actualTotal

    let resultColor = (runningTotal < 0) ? "red" : "blue";
    result.style.color = resultColor
}


function handleSumClick() {
    let num1 = parseInt(inpA.value);
    runningTotal += num1
    render();
}

function handleSubClick() {
    let num1 = parseInt(inpA.value);
    runningTotal -= num1
    render();
}