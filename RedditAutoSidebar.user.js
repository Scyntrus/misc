// ==UserScript==
// @name         Reddit Auto Sidebar
// @namespace    scy
// @version      0.1
// @description  Preserve screen realestate
// @author       Scyntrus
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var sidebar = document.querySelector("body > div.side");
    var rect = sidebar.getBoundingClientRect();
    var activationSize = 150;
    var leeway = 40;
    var sidebarBottom = rect.bottom + document.body.scrollTop + leeway;
    var sidebarWidth = rect.width + leeway;
    sidebar.hidden = true;
    var timer = null;
    document.addEventListener("mousemove", function(e) {
        var cursorx = e.clientX;
        var windowx = window.innerWidth;
        var cursory = e.clientY + document.body.scrollTop;
        if (sidebar.hidden && cursorx > windowx - activationSize && cursory < sidebarBottom) {
            if (timer === null) {
                timer = setTimeout(function() {
                    if (sidebar.hidden && cursorx > windowx - activationSize && cursory < sidebarBottom) {
                        sidebar.hidden = false;
                    }
                    timer = null;
                }, 250);
            }
        } else if (sidebar.hidden && !(cursorx > windowx - activationSize && cursory < sidebarBottom)) {
            if (timer !== null) {
                clearTimeout(timer);
                timer = null;
            }
        } else if ((!sidebar.hidden) && (cursorx < windowx - sidebarWidth || cursory > sidebarBottom)){
            sidebar.hidden = true;
            if (timer !== null) {
                clearTimeout(timer);
                timer = null;
            }
        }
    });
    document.addEventListener("mouseout", function(e) {
        if (e.target === document.body && timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
    });
})();