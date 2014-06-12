function queryCheck(yourKey, yourValue, alertString) {
	thispage = document.URL; // Get doc URL.
	if (thispage.indexOf(yourKey + "=" + yourValue) >= 1){
		alert(alertString); // If your key and value pair are found in the URL, trigger the alert.
	}
	else {
		return; // Otherwise, end the function's functionality.
	}
}
