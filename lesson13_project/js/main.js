//below you will create an event listener. All your code will be inside that event listener

//create an click event listener called isValidButton
const validateButton = document.querySelector('#isValidBtn');
validateButton.addEventListener('click', isValidButton);

function isValidButton() {
  //inside the event listener set undefined variables for isValidMsg and getInput. You can leave them undefined because we'll use them later.
  let isValidMsg = undefined;
  let getInput = undefined;

  //set isValidMsg to equal the isValidMsg id in your HTML
  isValidMsg = document.querySelector('#isValidMsg');

  //output isValidMsg to HTML and set it to an empty string
  isValidMsg.textContent = '';

  //set getInput to take in the value of isValidInput (which matches the id of your input in your HTML)
  getInput = document.querySelector('#isValidInput').value;

  //create a try statement
  try {
    //if getInput is empty, then throw the string "is empty"
    if(getInput.length == 0)
      throw 'is empty';

    //if getInput is not a number, then throw the string "is not a number"
    if(isNaN(getInput))
      throw 'is not a number';

    //if getInput is greater than 15, then throw the string "is too high"
    if(getInput > 15)
      throw 'is too high';

    //if getInput is less than 12, then throw the string "is too low"
    if(getInput < 12)
      throw 'is too low';
  } catch (error) { //open your catch statement
    //output isValidMsg to HTML and output a string of "Input" and add the error message
    isValidMsg.textContent = 'Input ' + error;
  } finally { //open your finally statement
    //create an alert that says "This will always run.
    alert('This will always run.');
  }
}