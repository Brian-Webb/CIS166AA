// when the document loads, run the 'runSlideShow' function
$('document').ready(function() {
  runSlideShow();
});

function runSlideShow() {
  // Using the jQuery selector, set your slideshow with a child of div to a gt selector of 0.
  let $trailingSlides = $('#slideshow div').not(':first');

  // Apply the hide method to it.
  $trailingSlides.hide();

  // Then create a setInterval method and inside it, add an anonymous function.
  setInterval(() => {
    // Set the function to locate the id for slideshow and its children. Use the "first" pseudo class to get the first one.
    let $firstSlide = $('#slideshow div:first');

    // Apply the fadeOut method at 1000 ms.
    $firstSlide.fadeOut(1000);

    // Apply the next().
    let $nextSlide = $firstSlide.next();

    // Apply the fadeIn method at 1000 ms.
    $nextSlide.fadeIn(1000);

    // Apply the end() method.
    $nextSlide.end();

    // Apply the appendTo method with an id of slideshow.
    $firstSlide.appendTo('#slideshow');

    // Set the interval time to 3000.
  }, 3000);

}
