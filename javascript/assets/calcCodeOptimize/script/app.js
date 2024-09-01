


                                          
const userInput = document.getElementById('input-number');

const addBtn = document.getElementById('btn-add');  //.addEventListener('click', add);
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const devideBtn = document.getElementById('btn-devide');



const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
} 