// ==UserScript==
// @name         Atlassian Jira Board
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hide story that currently unrelated to user
// @author       Zev Zakaryan
// @match        https://*.atlassian.net/jira/software/c/projects/*/boards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  const sInterval=3000
  const mustHaveCol=[1,2] //Start from 1

  //Ask popup add: if(confirm('Remove finished story'))
  function removeNondev() {
    for (let xs=document.querySelectorAll('span.ghx-info > span'),i=0,x,parent;(x=xs[i]);i++) {
      if ((parent=x.parentNode.parentNode.parentNode.parentNode).querySelectorAll('.ghx-column .ghx-subtask-group').length<=0) continue
      let show=false
      for (let i2=0,col;(col=mustHaveCol[i2]);i2++)
        if ((show=parent.querySelectorAll(`.ghx-column:nth-child(-n+${col}) .ghx-subtask-group`).length>0)) break
      if (!show) parent.style.display='none'
    }
  }
  setInterval(removeNondev,sInterval) //Sometimes it's reloaded so we never clearInterval
  removeNondev()
})()
