// ==UserScript==
// @name         BD Black Friday
// @namespace    scy
// @version      0.1
// @description  Black Friday sale
// @author       Scyntrian
// @match        https://www.blackdesertonline.com/shop/event/blackfriday.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var searchFor = ["venecil", "riding", "+16", "karin", "sylvia", "ellen", "horse"];
    var element = document.querySelector(".item_now > .box_deals > .info_deals > .name_deals");
    if (!element) {
        location.reload();
    }
    var item = element.innerText.split("\n")[0];
    var iteml = item.toLowerCase();
    if (searchFor.some(function(s) {return iteml.includes(s);})) {
        var audio = new Audio('http://soundbible.com/mp3/Red Alert-SoundBible.com-108009997.mp3');
        audio.play();
    }
})();