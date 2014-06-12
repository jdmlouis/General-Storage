function queryCheck(yourKey, yourValue, alertString) {
	thispage = document.URL;
	if (thispage.indexOf(yourKey + "=" + yourValue) >= 1){
		alert(alertString);
	}
	else {
		return;
	}
}
