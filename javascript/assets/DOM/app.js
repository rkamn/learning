const ul1 = document.body.firstElementChild.nextElementSibling;
 const firstLi1 = ul1.firstElementChild;

 console.log(firstLi1);
 const section = document.querySelector('section');
 //section.className='red-bg';
 //section.style.backgroundColor = 'green';
 
const button = document.querySelector('button');
button.addEventListener('click',() => {
    // if(section.className === 'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }
    // else{
    //     section.className ='red-bg visible';
    // }

    section.classList.toggle('visible');
    section.classList.toggle('invisible');
    
    
    let welcome = document.getElementById('welcome-text');
    //let message ="";
    const message = ", we did it.";
    const wel = welcome.textContent;  // issue
    const x = wel +' '+ message; // need output on web : Welcome, we did it
    welcome.textContent = x;
    console.log( x);
    
   
    
    
    
});
