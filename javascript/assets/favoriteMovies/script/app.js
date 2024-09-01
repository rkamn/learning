                                     
const addMovieModel = document.getElementById('add-model');
//const addMovieModel = document.querySelector('#add-model');

const startAddMovieButton = document.querySelector('header button');
//const startAtMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = document.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');
//const userInput = addMovieModel.getElementsByTagName('input');


const movies =[];


const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible');
}

const toggleMovieModel = () => {    // finction(){}
  addMovieModel.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
     for(const userInput of userInputs ){
        userInput.value = '';
     }
};

const addMovieHandler = () => {
  const tittleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if(tittleValue.trim === ''|| imageUrlValue === '' || ratingValue === '' ||
     +ratingValue < 1 || ratingValue > 5 ) {
      alert('Please enter valid value (rating between 1 to 5)');
      return;
  }
  const newMovies = {
       title : tittleValue,
       image : imageUrlValue,
       rating : ratingValue
  };
  movies.push(newMovies);
  console.log(movies);
  toggleMovieModel();
  clearMovieInput();
};

const backdropClickHandler = () => {
    toggleMovieModel();
};
const cancelAddMovieHandler = () => {
    toggleMovieModel();
}

startAddMovieButton.addEventListener('click',toggleMovieModel);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);



