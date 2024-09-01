
const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');


function printMessage(){
    const value = messageInput.value;
    console.log(value || 'Click me! ');
}

function addListener(){
    clickableBtn.addEventListener('click',printMessage)
}

addListenerBtn.addEventListener('click',addListener);









function getName(){
    return prompt('Your Name : ', '')
}
function greet(){
    const userName = getName();
    console.log("Hello "+userName);
}

greet();