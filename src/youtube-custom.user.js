// ==UserScript==
// @name         Youtube Custom
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Move bar and control below the video
// @author       Zev Zakaryan
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  setTimeout(() => {
    const x=document.querySelector('.ytp-chrome-bottom')
    if (!x) return
    x.style.bottom='-40px'
    x.style.backgroundColor='green'
    x.parentNode.parentNode.appendChild(x) //Move so it's visible outside video, delayed otherwise it's removed
    const title=document.querySelector('#title.ytd-watch-metadata')
    if (title) title.style.marginTop='40px' //If not delay, style reset
  },5000)
  setInterval(() => {const x=document.querySelector('.ytp-ad-skip-button-slot'); if (x) x.click()},1000)
})()