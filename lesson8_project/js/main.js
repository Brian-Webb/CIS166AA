//Using a DOM api, store the header's text in a variable
const headerText = document.querySelector('header').textContent;

//Using a DOM api, get the number of paragraphs in the page
const countParagraphs = document.querySelectorAll('p').length;

//Using a DOM api, get the number of heading tags used in the document
const countHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;

//Using a DOM api, get the number of list items being used in the unordered list
const countListItems = document.querySelectorAll('li').length;

//Use the correct DOM api to count the number of links being used in the page
const countLinks = document.getElementsByTagName('a').length;

//set a variable to show the maximum number of links allowed on the page is 3
const maxLinks = 3;

// handle output
const output = generateOutput();
const outputContainer = document.getElementById('output-container');
outputContainer.innerHTML = output;

//functions to handle building output
  function generateOutput() {
    return generateTitleOutput() + generateCountsOutput();
  }

  // generates the paragraph for the title output
  function generateTitleOutput() {
    return `<p>The article title is <strong>${headerText}</strong></p>`;
  }

  // generates the paragraph for the counts output
  function generateCountsOutput() {
    const contentOutput = `This article contains <strong>${countParagraphs}</strong> paragraphs, and a total of <strong>${countListItems}</strong> lists items.`;
    const headerLinkOutput = `There are a total of <strong>${countHeadings}</strong> heading tags and <strong>${countLinks}</strong> links used on the page.`;
    //create an if/else statement that argues the following:
    // if the total number of links on the page is greater than the maximum number of links allowed,
    // then print the message "This is too many links. The limit is (include the variable for the maximum number of links)."
    const linkAlert = countLinks > maxLinks ? `This is too many links. The limit is ${maxLinks}.` : "";

    return `<p> ${contentOutput} ${headerLinkOutput} ${linkAlert}</p>`;
  }