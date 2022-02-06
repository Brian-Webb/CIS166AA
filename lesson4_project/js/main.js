//Example:
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
  var boxChoc = 6;
  return boxChoc * 500;
}
const example = document.getElementById("example");
example.textContent = getChoc() + ' pieces of chocolate';



///////// Complete problems 1 - 7 below /////////


//1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?
function getCapacity(seats, capacityPerSeat) {
  return seats * capacityPerSeat;
}

const prob1 = document.getElementById("prob1");
const capacity = getCapacity(14, 6);
prob1.textContent = `${capacity} people can ride the Ferris wheel at the same time`;

//2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?
function getPlantCount(rows, columns) {
  return rows * columns;
}
const prob2 = document.getElementById("prob2");
const plantCount = getPlantCount(52, 15);
prob2.textContent = `There are a total of ${plantCount} plants.`;


//3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?
function getPageCount(totalFrames, framesPerPage) {
  return totalFrames / framesPerPage;
}
const prob3 = document.getElementById("prob3");
const pageCount = getPageCount(143, 11)
prob3.textContent = `He would have a total of ${pageCount} pages.`;

//4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?
function getShirtCount(feetPerShirt, totalFeet) {
  return totalFeet / feetPerShirt;
}
const prob4 = document.getElementById("prob4");
const feetOfMaterial = 60;
const shirtCount = getShirtCount(4, feetOfMaterial);
prob4.textContent =  `${shirtCount} t-shirts can be made with ${feetOfMaterial} feet of material.`;


//5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?
function getTotalDollars(dollarsPerShirt, totalShirts) {
  return dollarsPerShirt *  totalShirts;
}
const prob5 = document.getElementById("prob5");
const totalDollars = getTotalDollars(9, 200);
prob5.textContent = `They made $${totalDollars} in t-shirt sales.`;

//6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?
function getTables(totalGuests, guestsPerTable) {
  return totalGuests / guestsPerTable;
}
function getCandles(totalTables, candlesPerTable) {
  return totalTables * candlesPerTable;
}
const prob6 = document.getElementById("prob6");
const tables = getTables(248, 4);
const candles = getCandles(tables, 2);
prob6.textContent = `Warren will need ${candles} candles.`;

//7. Beth has 4 packs of crayons. Each pack has 10 crayons in it. She also has 6 extra crayons. How many crayons does Beth have altogether?
function getCrayons(packsOfCrayons, crayonsPerPack, extraCrayons = 0) {
  return packsOfCrayons *  crayonsPerPack + extraCrayons;
}
const prob7 = document.getElementById("prob7");
const crayons = getCrayons(4, 10, 6);
prob7.textContent = `Beth has a total of ${crayons} Crayons.`;