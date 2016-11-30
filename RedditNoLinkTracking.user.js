// ==UserScript==
// @name         Reddit No Link Tracking
// @version      0.1
// @description  Bypass Reddit redirection
// @author       Scyntrus
// @match        https://reddit.com/*
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    function c(e) {
        var t = e.target;
        if (t.tagName !== 'A')
            return;
        if (t.hasAttribute("data-affiliate-url"))
            t.setAttribute("data-affiliate-url", t.getAttribute("data-href-url"));
        if (t.hasAttribute("data-outbound-url"))
            t.setAttribute("data-outbound-url", t.getAttribute("data-href-url"));
    }
    document.addEventListener('mousedown', c, true);
})();