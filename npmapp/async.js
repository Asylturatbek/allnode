const fetch = require('node-fetch');
const async = require("asyn");
const apiUrl = "https://forum.freecodecamp.org/directory_items.json?period=daily&order=likes_received.json";

/**
 * so basically we are fetching data from
 * 			promise and handling that 
 * 			promise. If there is error 
 * 			we are handling that as well.
 * @return {[json]} [some data :)]
 */
function getTopUsers() {
	fetch(apiUrl)
	.then((r) => r.json())
	.then((json) => {
		console.log(json.directory_items[0]);
	}).catch((error) => {
		console.log('failed to fetch data');
	});
}

// getTopUsers();
// 
/**
 * So at first I installed async module
 *     and imported to use. Basically it is 
 *     a different version of solving the 
 *     above code with async/await.
 * @return {[json]} [some data :)]
 */
async function getTop100Users () {
	const response = await fetch(apiUrl);
	const json = await response.json();

	console.log(json.directory_items[0]);
}

getTop100Users();