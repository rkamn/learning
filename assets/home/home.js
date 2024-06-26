console.log('some text')

document.getElementById("myBtn").addEventListener("click", greet);

function greet(){
  alert("Hello World..");
}



function combine(str1, str2, str3){
  const combinedText = str1 + str2 + str3 ;
  return combinedText;
}
const combineString = combine('Hello ', 'Mr. ' + 'India ');// extra undefined cumming check this
alert(combineString);