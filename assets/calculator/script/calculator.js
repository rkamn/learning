

console.log('testing js file linking')
document.getElementById("welcomeBtn").addEventListener("click", welcome);
function welcome(){
  alert("Hello World.. for JS file linking test");
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

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    //const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}
function devide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult, enteredNumber);
    writeToLog('DEVIDE', initialResult, enteredNumber, currentResult)
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




