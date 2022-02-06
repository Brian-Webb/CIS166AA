const avengers = [];
const avengerOutput = document.getElementById('avengersGo');
const input = [
	'Thor',
	'Wasp',
	'Captain America',
	'Iron Man',
	'Hulk',
	'Vision',
	'Hank Pym',
	'Black Panther',
	'Quicksilver',
	'Mantis',
	'Spiderman',
];

input.forEach(avenger => {
	avengers.push(avenger);
});

avengerOutput.innerHTML = avengers.join(',');
