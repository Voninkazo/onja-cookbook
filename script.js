console.log('it works');

// grab all inputs
const recipeName = document.querySelector('#recipe-name');
const cookName = document.querySelector('#cook-name');
const difficulty = document.querySelector('#difficulty');
const duration = document.querySelector('#cooking-time');
const images = document.querySelector('#recipe-image');
const ingredients = document.querySelector('#ingredient');
const steps = document.querySelector('#step');

// listen for a click to add a new ingredient
window.addEventListener('click', event => {
  if(event.target.matches('.add-ingredient')) {
    const myhtml =`
    <li class="list-item"><input type="text" name="ingredient" id="input-ingredient"></li>
    `;
    const ingredientLists = document.querySelector('#ingredient');// grab the parent element
    ingredientLists.insertAdjacentHTML('beforebegin', myhtml);// append the html inside of that parent element
  }

  // listen for a click to add a new step
  if (event.target.matches('.add-steps')) {
    const myHtml = `
    <li class="list-item"><input type="text" name="step" id="input-step"></li>
    `;
    const stepLists = document.querySelector('#step');// grab the parent element
    stepLists.insertAdjacentHTML('afterbegin', myHtml);// append the html inside of that parent element
  }
});

function createObject() {
// looping through the steps and ingredients lists
const ingredientInputs = document.querySelector('#ingredient');
for(var i = 0; i < ingredientInputs.legnth; i++) {
   return ingredientInputs[i];
}

const stepInputs = document.querySelector('#step');
for (var i = 0; i < stepInputs.legnth; i++) {
  return stepInputs[i];
}
const form = document.querySelector('#form');
const {name, cook, image, difficulty, time} = form;

// create the recipe object
  const recipes = [
    {
      title: `${name.value}`,
      picture: `${image.value}`,
      author: `${cook.value}`,
      difficulty: `${difficulty.value}`,
      timing: `${time.value}`,
      ingredients: `${ingredientInputs.value}`,
      steps: `${stepInputs.value}`,
    }
  ]
  console.log(recipes);
} createObject();

// handle submit button

window.addEventListener('submit', event => {
  event.preventDefault();
  if(event.target.matches('.submit-button')) {
    createObject();
  }
});
