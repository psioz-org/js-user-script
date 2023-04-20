// ==UserScript==
// @name         Youtube Custom
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Move bar and control below the video
// @author       Zev Zakaryan
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    const x=document.querySelector('.ytp-chrome-bottom')
    if (!x) return
    x.style.bottom='-40px'
    setTimeout(() => {x.parentNode.parentNode.appendChild(x)},5000) //Move so it's visible outside video, delayed otherwise it's removed
})()