searchString = "serv";

findElements();

clickLoop();

function findElements() {
	i = document.links.length;
	n = 0;
	resultarr = new Array
	for (rev = 0; rev < i; rev++){
		if (!document.links[rev].id){
			console.log("nope (no id)\n");
		}
		else {
			if(document.links[rev].id.indexOf(searchString) >= 0) {
				console.log(document.links[rev].id);
				resultarr[n] = document.links[rev].id;
				n++;
			}
			else {
				console.log("nope (id not a match)\n");
			}
		}
	}
	return resultarr;
}

function clickLoop() {
	ii = resultarr.length;
	for (rev = 0; rev < ii; rev++){
		console.log("click loop" + " " + (rev + 1));
		document.getElementById(resultarr[rev]).click();
		console.log(resultarr[rev] + " clicked #" + (rev + 1) + "/" + ii);
	}
}
