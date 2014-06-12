function queryCheck(yourKey, yourValue) {
	thispage = document.URL;
	if (thispage.indexOf(yourKey + "=" + yourValue) >= 1){
		alert("Thank you for submitting your support query. We'll get on that ASAP.");
	}
	else {
		return;
	}
}
