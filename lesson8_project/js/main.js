//Using a DOM api, store the header's text in a variable
const headerText = document.querySelector('header').textContent;

//Using a DOM api, get the number of paragraphs in the page
const countParagraphs = document.querySelectorAll('p').length;

//Using a DOM api, get the number of heading tags used in the document
const countHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;

//Using a DOM api, get the number of list items being used in the unordered list
const countListItems = document.querySelectorAll('li').length;

//Use the correct DOM api to count the number of links being used in the page
const countLinks = document.querySelectorAll('a').length;

//set a variable to show the maximum number of links allowed on the page is 3
const maxLinks = 3;

//create an if/else statement that argues the following:
// if the total number of links on the page is greater than the maximum number of links allowed,
// then print the message "This is too many links. The limit is (include the variable for the maximum number of links)."

if(countLinks > maxLinks) {
  document.write(`This is too many links. The limit is ${maxLinks}.`);
}