function queryCheck() {
	thispage = document.URL;
	if (thispage.indexOf("submitted=yes") >= 1){
		alert("Thank you for submitting your support query. We'll get on that ASAP.");
	}
	else {
		return;
	}
}