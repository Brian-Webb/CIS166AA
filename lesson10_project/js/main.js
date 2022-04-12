//create a function that will validate form input
function validateForm() {
  //validate all the elements of the form
    const inputs = document.querySelectorAll('#myForm input[type="text"]');
    // create a variable called canSubmit and set it to a boolean of true
    let canSubmit = true;

    //write a for loop that checks the value of each form field. If the form field is not completed, then canSubmit will be false
    inputs.forEach(input => {
      if(input.value.length == 0) {
        canSubmit = false
      }
    });

    return canSubmit;
}

// function to reset the form
function resetForm() {
  // reset the form inputs
  document.querySelector('#myForm').reset();

  // disabled the submit button
  document.querySelector('#submit').setAttribute('disabled', 'disabled');
}

// funcion to handle the form submission
function submitForm() {
  //create an alert if form is submitted that states a confirmation message
  alert('Submitted Form Successfully!');
}

// event listener to enable the submit button as needed
document.querySelector('#myForm').addEventListener('keyup', e => {
  // if we can submit, then enable the submit button
  if(validateForm()) {
    document.querySelector('#submit').removeAttribute('disabled');
  }
});

//in an event listener, add a method to prevent default submission of the form.
document.querySelector('#myForm').addEventListener('submit', e => {
  // prevent the default form submission and handle it below
  e.preventDefault();

  // if we can submit...
  if(validateForm()) {
    // submit the form
    submitForm();

    // reset the form
    resetForm();
  }
});
