// ==UserScript==
// @name         Youtube Remove Title Number
// @version      0.1
// @description  remove youtube title notification number
// @author       Rin UmU
// @match        https://*.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';
    document.yt_remove_number_interval = setInterval(function(){
        document.title = document.title.replace(/^\([0-9]+\) /, "");
    }, 50);
})();