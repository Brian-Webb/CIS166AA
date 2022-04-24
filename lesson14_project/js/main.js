window.onload = () => {
  // get which page we're on
  const funcToCall = document.querySelector('body').dataset.funcToCall;

  // if the page data attribute is not empty
  if(funcToCall != null) {
    try {
      // dynamically call the matching function name
      window[funcToCall]();
    } catch (e) {
      // if for some reason it doesn't exist, handle and log the error
      console.log(e);
    }
  }
};

// get the chuck norris refresh button
const chuckNorrisRefreshButton = document.querySelector('#refresh-chuck-norris-fact');

// event handler for the refresh chuck norris fact button
if(chuckNorrisRefreshButton)
  chuckNorrisRefreshButton.addEventListener('click', () => getChuckNorrisFact());

// get a random chuck norris fact to display to the user
function getChuckNorrisFact() {
  // get the blockquote to display the fact
  const factHolder = document.querySelector(`#chuck-norris blockquote`);

  // get the fact from the api and handle the response
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json()) // get the response data as json
    .then(data => factHolder.textContent = data.value) // if we have a valid response, then set the value of the block quote to
    .catch(error => {
      // if we get an error, tell the user we had an error and also log the error
      factHolder.textContent = `Caught API error... try again!`;
      console.log(error);
    });
}

// get the FBI most wanted list to display to the user
function getFbiMostWanted() {
  // get the output table
  const fbiTable = document.querySelector('#fbi-most-wanted-table');

  // get the list from the api and handle the response
  fetch(`https://api.fbi.gov/wanted/v1/list`)
    .then(response => response.json()) // get the response data as json
    .then(data => {
      data.items.forEach(criminal => {
        // setup the new row html
        const row = document.createElement('tr');

        // setup the title
        const titleCell = document.createElement('td');
        titleCell.textContent = criminal.title;

        // setup the description
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = criminal.description;

        // setup the link
        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.textContent = 'More Info';
        link.setAttribute('href', criminal.url);
        link.setAttribute('target', '_blank');

        // append each cell to the row
        row.appendChild(titleCell);
        row.appendChild(descriptionCell);
        row.appendChild(linkCell).appendChild(link);

        // insert the new row into the table
        fbiTable.appendChild(row);
      });
    })
    .catch(error => {
      // if we get an error, log the error
      console.log(error);
    });
}

// setup the sounds like page
function initSoundsLike() {
  // get the relevant elements
  const wordSubmit = document.querySelector('#word-submit');

  // setup the event listener for the click event
  wordSubmit.addEventListener('click', handleSoundsLikeClick);
}

// get the similar sounding words and output to the user
function handleSoundsLikeClick() {
  // get the relevant elements
  const wordInput = document.querySelector('#word-input');
  const wordOutput = document.querySelector('#similar-sounding-words');

  // get the list from the api and handle the response
  fetch(`https://api.datamuse.com/words?sl=${wordInput.value}`)
    .then(response => response.json()) // get the response data as json
    .then(data => {
      data.forEach(entry => {
        // setup the new li
        const li = document.createElement('li');
        li.textContent = entry.word;

        // insert the new row into the table
        wordOutput.appendChild(li);
      });
    })
    .catch(error => {
      // if we get an error, log the error
      console.log(error);
    });
}

// get the list of machines and output to the user
function getPinballMachines() {
  // get the output table
  const pinballtable = document.querySelector('#pinball-table');

  // get the list from the api and handle the response
  fetch(`https://pinballmap.com/api/v1/locations.json?region=phoenix`)
    .then(response => response.json()) // get the response data as json
    .then(data => {
      data.locations.forEach(location => {
        // setup the new row html
        const row = document.createElement('tr');

        // setup the name
        const nameCell = document.createElement('td');
        nameCell.textContent = location.name;

        // setup the count
        const countCell = document.createElement('td');
        countCell.textContent = location.num_machines;

        // setup the phone number
        const phoneCell = document.createElement('td');
        phoneCell.textContent = location.phone;

        // setup the address cell
        const addressCell = document.createElement('td');
        const addressLine1 = document.createElement('span');
        const addressLinebreak = document.createElement('br');
        const addressLine2 = document.createElement('span');
        addressLine1.textContent = location.street;
        addressLine2.textContent = `${location.city}, ${location.state} ${location.zip}`;

        // append each cell to the row
        row.appendChild(nameCell);
        row.appendChild(countCell);
        row.appendChild(phoneCell);
        row.appendChild(addressCell).appendChild(addressLine1).appendChild(addressLinebreak).appendChild(addressLine2);

        // insert the new row into the table
        pinballtable.appendChild(row);
      });
    })
    .catch(error => {
      // if we get an error, log the error
      console.log(error);
    });
}

// setup the dictionary page
function initDictionary() {
  // get the relevant elements
  const wordSubmit = document.querySelector('#word-submit');

  // setup the event listener for the click event
  wordSubmit.addEventListener('click', handleSoundsLikeClick);
}

// get the similar sounding words and output to the user
function handleSoundsLikeClick() {
  // get the relevant elements
  const wordInput = document.querySelector('#word-input');
  const definitionList = document.querySelector('#definition-list');

  // get the list from the api and handle the response
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
    .then(response => response.json()) // get the response data as json
    .then(data => {
      // get the word meanings
      const meanings = data[0].meanings;

      // foreach meaning
      meanings.forEach(meaning => {
        // get each definition
        const definitions = meaning.definitions;

        // get the part of speech
        const partOfSpeech = meaning.partOfSpeech;

        // foreach definition
        definitions.forEach(definition => {
          // setup the new li
          const li = document.createElement('li');

          // setup the word type span
          const wordType = document.createElement('span');
          const wordTypeStrong = document.createElement('strong');
          wordTypeStrong.textContent = partOfSpeech;
          wordType.appendChild(wordTypeStrong);

          // setup the line break
          const linebreak1 = document.createElement('br');
          const linebreak2 = document.createElement('br');
          const linebreak3 = document.createElement('br');

          // setup the word defintion span
          const wordDefinition = document.createElement('span');
          wordDefinition.textContent = definition.definition;

          // build up the whole li
          li.appendChild(wordType);
          li.appendChild(linebreak1);
          li.appendChild(wordDefinition);
          li.appendChild(linebreak2);
          li.appendChild(linebreak3);

          // insert li into the list
          definitionList.appendChild(li);
        });
      });
    })
    .catch(error => {
      // if we get an error, log the error
      console.log(error);
    });
}