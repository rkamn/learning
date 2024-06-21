

function greet(){
  alert("welcome rakesh in javascript");
}
function printName(name){
  alert("Hello "+name);
}

function combine(str1, str2, str3){
  const combinedText = str1 + str2 + str3 ;
  return combinedText;
}

greet();
printName("Rakesh");

const task3Element = document.getElementById("myBtn").addEventListener('click', greet);
alert(task3Element);// not working check this

const combineString = combine('Hello ', 'Mr. ' + 'India ');// extra undefined cumming check this
alert(combineString);
