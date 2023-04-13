// ==UserScript==
// @name         Google Space Rename
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change google chat space name
// @author       Zev Zakaryan
// @match        https://*.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  //It's in https://chat.google.com/u/0/frame iframe of https://mail.google.com/*
  //🚨,⚠️,📞,☎️,🌸,🤖,👥,📁,⭐,&nbsp;&nbsp;ℹ️,
  const sInterval=1000
  const oldXnewName={
    'tech-alert-code-intelligence': ['🚨','Coin'],'tech-alert-apim-code-intelligence': ['🚨','Apim'],'Tech War room': ['🚨','War room'],
    'tech-alert-code-intelligence-nonprod': ['&nbsp;&nbsp;ℹ️','Coin alert np'],
    'tech-noti-code-intelligence': ['&nbsp;&nbsp;ℹ️','Coin'],'tech-noti-cicd-code-intelligence': ['&nbsp;&nbsp;ℹ️','Coin CiCd'],
    'tech-noti-newman-exporter': ['🤖','Newman'],
    'tech-team-code-intelligence': ['👥','Coin'],
    'Product support(PRI)': ['🌸','PRI'],'tech-team-tech-enabling-all-staffs': ['🌸','Enabling'],'tech-xteam-devops-codeintelligence': ['🌸','Devops'],
    'tech-proj-backstage': ['📁','Backstage⭐'],'tech-proj-ott-logger': ['📁','OttLog⭐'],
    'tech-proj-watch&earn-improvement': ['📁','Watch&Earn'],'trueid-tv-grafana-integration': ['📁','Tv-Grafana'],'X4 Gamification Working Team': ['📁','Gami'],
  }

  function fx() {
    for (let xs=document.querySelectorAll('[aria-label="List of spaces."] span[role="listitem"] span[role="presentation"][title]'),i=0,x,on;(x=xs[i]);i++) {
      if (oldXnewName[on=x.getAttribute('title')]) {
        x.parentNode.parentNode.parentNode.firstElementChild.innerHTML=oldXnewName[on][0]
        x.firstElementChild.textContent=oldXnewName[on][1]
      }
    }
  }
  setInterval(fx,sInterval)
  fx()
})()
