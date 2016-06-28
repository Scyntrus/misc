// ==UserScript==
// @name         Steam Summer Sale 2016
// @version      0.1
// @description  Quickly finish viewing your queue
// @author       Scyntrus
// @match        http://store.steampowered.com/app/*
// @match        http://store.steampowered.com/agecheck/app/*
// @match        http://store.steampowered.com/explore/
// @grant        none
// ==/UserScript==

(function() {
if (typeof DoAgeGateSubmit !== 'undefined') {
	$J('#ageYear').val(1990);
	DoAgeGateSubmit();
	return;
}
if (typeof HideAgeGate !== 'undefined') {
	HideAgeGate();
	return;
}
var x = document.getElementsByClassName('next_in_queue_content');
if (x.length > 0) {
	x[0].click();
	return;
}
x = document.querySelector('.discovery_queue_winter_sale_cards_header > div');
if (typeof x != 'undefined' && x.innerHTML.startsWith('Come back tomorrow')) {
	// done!
	return;
}
x = document.getElementById('refresh_queue_btn');
if (typeof x !== 'undefined') {
	x.click();
	return;
}
})();