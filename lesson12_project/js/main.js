//create a global variable called result
let result = null;

//create a function called getLocation
function getLocation() {
  //create a variable that sets the value of true if the browser is Chrome
  const isChrome = window.chrome;

  //create an if statement with the following condition:
  // if geolocation and the browser is Chrome, are both true, then show current position.
  if(isChrome && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      result = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
      output(result, true);
    }, error => {
      console.warn(error);
    });

    // Additionally, display a message that says "You're using Chrome, so you're cool!"
    output("You're using Chrome, so you're cool!");
    return;
  }

  //otherwise if the browser is not Chrome, then display a message that says "You're not on the cool list.
  // Then display a link that will send the user to Chrome's download page."
  if(!isChrome) {
    output(`You're not on the cool list. <a href="https://www.google.com/chrome/">Download Chrome</a>!`);
    return;
  }

  //if the above conditions are not met, then display a message that says "Geolocation is not supported by this browser."
  output("Geolocation is not supported by this browser.");

}

//create a function that will output the position to HTML
function output(content, isResult = false) {
  // get the default output element
  let element = document.querySelector('#msg');

  // swap to the result element if needed
  if(isResult) {
    element = document.querySelector('#result');
  }

  // output the actual content
  element.innerHTML = content;
}