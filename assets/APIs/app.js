
const URL = 'https://cat-fact.herokuapp.com/facts';

const factParaAPI = document.querySelector('#factAPI');
const btnFact = document.querySelector('#btnAPI');

const factParaPromise = document.querySelector('#factPromise');
const btnPromiseFact = document.querySelector('#btnPromise');

//API Call
const apiCall = async () => {
    console.log("fetching data by API call..");
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0].text);
    factParaAPI.innerText = data[1].text;
    
}
btnFact.addEventListener('click', apiCall);

// promise
const promiseCall = ()=>{
    console.log("fetching data by Promise call..");
    fetch(URL)
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        console.log(data[0].text);
        factParaPromise.innerText = data[1].text;
    })
}
btnPromiseFact.addEventListener('click',promiseCall);
