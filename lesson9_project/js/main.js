/*
Identify 10 different event types (i.e.; a load event, a keydown event, a click event, a mouseup event, etc.).
After identifying 10 different types, program these 10 different events into your JS page.
Use comments in your JavaScript to identify each of the 10 events. The comment should include the number, i.e., "Event #1", and an explanation of what the event does. When your instructor views your code, it should be very clear what the 10 different events are and how they work.
Add the appropriate code to your HTML page so the events are interactive. When viewing the HTML page, please make the events obvious so that your instructor does not need to hunt for the interactive elements.
 */

window.onload = () => {
  addMouseEventListeners();
  addKeyboardEventListeners();
  addWheelEventListeners();
  addInputEventListeners();
};

// add four mouse event listeners
function addMouseEventListeners() {
  // get the mouse event target div
  const mouseEventTarget = document.getElementById("mouse-event-target");

  // Event #1, when the cursor enters the target element
  mouseEventTarget.addEventListener("mouseenter", handleMouseEvents);

  // Event #2, when the cursor leaves the target element
  mouseEventTarget.addEventListener("mouseleave", handleMouseEvents);

  // Event #3, when a mouse button is pressed (the down portion of a click)
  mouseEventTarget.addEventListener("mousedown", handleMouseEvents);

  // Event #4, when a mouse button is released (the up portion of a click)
  mouseEventTarget.addEventListener("mouseup", handleMouseEvents);
}

// add two keyboard event listeners
function addKeyboardEventListeners() {
  // Event #5, when a key on the keyboard is pressed (the down portion of a key press)
  document.addEventListener("keydown", handleKeyboardEvents);

  // Event #6, when a key on the keyboard is released (the up portion of a key press)
  document.addEventListener("keyup", handleKeyboardEvents);
}

// add one scroll event listeners
function addWheelEventListeners() {
  // Event #7, when the scroll wheel is used
  //    (different front scroll event, but my page is too short too scroll without resizing the broswer...
  //      so I used this one instead)
  document.addEventListener("wheel", handleWheelEvents);
}

// add three input event listeners
function addInputEventListeners() {
  // get the keyboard event target div
  const inputEventTarget = document.getElementById("input-event-target");

  // Event #8, content in an input, textera, etc is changed.
  document.addEventListener("input", handleInputEvents);

  // Event #9, fired when a conenteditable element is focused on (click into element)
  document.addEventListener("focusin", handleInputEvents);

  // Event #10, fired when a conenteditable element is blurred (click out of element)
  document.addEventListener("focusout", handleInputEvents);
}

// handle mouse events
function handleMouseEvents(event) {
  event.preventDefault();

  // get the keyboard event target div
  const mouseEvenTarget = document.getElementById("mouse-event-target");

  // call the general handler with the target added
  updateEventTarget(event, mouseEvenTarget);
}

// handle keyboard events
function handleKeyboardEvents(event) {
  // get the keyboard event target div
  const keyboardEventTarget = document.getElementById("keyboard-event-target");

  // call the general handler with the target added
  updateEventTarget(event, keyboardEventTarget);
}

// handle scroll events
function handleWheelEvents(event) {
  // get the scroll event target div
  const wheelEventTarget = document.getElementById("wheel-event-target");

  // call the general handler with the target added
  updateEventTarget(event, wheelEventTarget);
}

function handleInputEvents(event) {
  // get the keyboard event target div
  const inputEventTarget = document.getElementById("input-event-target");

  // call the general handler with the target added
  updateEventTarget(event, inputEventTarget);
}

// update target based on event
function updateEventTarget(event, target) {
  console.log(event, event.passive, target);
  // get the type of event
  const type = event.type;

  // setup the output message
  const message = `${type} event triggered`;

  // get result element
  const result = target.querySelector('.result');

  // update the result to display the message
  result.innerText = message;
}