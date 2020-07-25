console.log('it works');

// handle input
const recepieName = document.querySelector('#recepie-name');
const cookName = document.querySelector('#cook-name');
const difficulty = document.querySelector('#difficulty');
const duration = document.querySelector('#cooking-time');


window.addEventListener('click', event => {
  if(event.target.matches('.add-ingredient')) {
    const myhtml =`
    <input type="text" name="input-step" id="input-step" required>
    `;
    const ingredientLists = document.querySelector('#ingredient');
    ingredientLists.insertAdjacentHTML('beforebegin', myhtml);
  }

  if (event.target.matches('.add-steps')) {
    const myHtml = `
    <input type="text" name="input-step" id="input-step" required>
    `;
    const stepLists = document.querySelector('#step');
    stepLists.insertAdjacentHTML('afterbegin', myHtml);
  }
});
