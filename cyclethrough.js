// A simple JS script to sift through all elements on page, 
// looking for all IDs that match // a given search string.

searchString = "serv"; // What string are we looking for inside our id attributes?

findElements(); 

clickLoop();

function findElements() {
	i = document.links.length; // Get number of links in document.
	n = 0;
	resultarr = new Array
	for (rev = 0; rev < i; rev++){
		if (!document.links[rev].id){
			console.log("nope (no id)\n"); // If there's no ID, tell the console.
		}
		else {
			if(document.links[rev].id.indexOf(searchString) >= 0) {
				console.log(document.links[rev].id);
				resultarr[n] = document.links[rev].id;
				n++; // If there's an ID, tell the console and increment the array key.
			}
			else {
				console.log("nope (id not a match)\n"); 
				// If the ID doesn't match, tell console and let the loop take you to the next one.
			}
		}
	}
	return resultarr; // Ensures the result array gets into global scope for clickLoop to handle it.
}

function clickLoop() {
	ii = resultarr.length; // Set counter for number of items in array.
	for (rev = 0; rev < ii; rev++){ // Select and click on each element in array, and tell the console.
		console.log("click loop" + " " + (rev + 1));
		document.getElementById(resultarr[rev]).click(); 
		console.log(resultarr[rev] + " clicked #" + (rev + 1) + "/" + ii);
	}
}
