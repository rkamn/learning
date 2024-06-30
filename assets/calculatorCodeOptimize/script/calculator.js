console.log('testing js file linking')
document.getElementById("welcomeBtn").addEventListener("click", welcome);
function welcome(){
  alert("Code Optimization.. & for JS file linking test");
}


const defaultResult = 0;
let currentResult = defaultResult;
let logEntries  = [];


function getUserNumberInput(){
    return parseInt(userInput.value);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = { 
        operation : operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation); // accesing element of object
    console.log(logEntries);
}


function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType ==='ADD')
        {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if(calculationType ==='SUBTRACT'){
            currentResult -= enteredNumber;
            mathOperator = '-';
        }
        else if(calculationType ==='MULTIPLY'){
            currentResult *= enteredNumber;
            mathOperator = '*';
        }
        else if(calculationType ==='DEVIDE'){
            currentResult /= enteredNumber;
            mathOperator = '/';
        }
        createAndWriteOutput(mathOperator,initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult('ADD'); 
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function devide(){
    calculateResult('DEVIDE');
}

//generate and write calcuation log
function createAndWriteOutput(operator, resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
devideBtn.addEventListener('click', devide);




