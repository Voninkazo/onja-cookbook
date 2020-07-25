console.log('it works');

// grab all inputs
const recipeName = document.querySelector('#recipe-name');
const cookName = document.querySelector('#cook-name');
const difficulty = document.querySelector('#difficulty');
const duration = document.querySelector('#cooking-time');
const image = document.querySelector('#recipe-image');
const ingredients = document.querySelector('#ingredient');
const steps = document.querySelector('#step');

// listen for a click to add a new ingredient
window.addEventListener('click', event => {
  if(event.target.matches('.add-ingredient')) {
    const myhtml =`
    <input type="text" name="input-step" id="input-step" required>
    `;
    const ingredientLists = document.querySelector('#ingredient');// grab the parent element
    ingredientLists.insertAdjacentHTML('beforebegin', myhtml);// append the html inside of that parent element
  }

  // listen for a click to add a new step
  if (event.target.matches('.add-steps')) {
    const myHtml = `
    <input type="text" name="input-step" id="input-step" required>
    `;
    const stepLists = document.querySelector('#step');// grab the parent element
    stepLists.insertAdjacentHTML('afterbegin', myHtml);// append the html inside of that parent element
  }
});

// function createObject() {
//   let steps = `${steps.value}`;
//   steps = [];
//   for (let i = 0; steps.length; i++) {
//     console.log(steps);
//   }
//   const recipes = [
//     {
//       title: `${recipeName.value}`,
//       picture: `${image.value}`,
//       author: `${cookName.value}`,
//       difficulty: `${difficulty.value}`,
//       timing: `${duration.value}`,
//       ingredients: ``,
//       steps: ``,
//     }
//   ]
//   console.log(recipes);
// }
// window.addEventListener('submit', event => {
//   if(event.target.matches('.submit-button')) {
//     createObject();
//   }
// });
