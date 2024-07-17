let newBtn = document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn.innerText);


let div = document.querySelector('div');
div.append(newBtn);

div.style.backgroundColor ='green';
div.style.color ='white';
div.style.visibility='block';
let btn2 = newBtn;
btn2.innerText='Here I am am : click me';
div.after(btn2);

let newHeading = document.createElement("h1");
newHeading.innerHTML ="<i>I am on the top <i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.getAttribute("class");



