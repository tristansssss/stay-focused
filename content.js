// document.querySelector('.lnXdpd').classList.add('spinspinspin');
console.log("you'r in the world of content.js");
let focusUrl
// page to redirect tto
let blockedHtmlUrl = chrome.extension.getURL("blocked.html");

chrome.storage.local.get('currentUrl', (response) => {
  if (response.currentUrl) {
  }
});


// when we get message set focused url
chrome.runtime.onMessage.addListener((request) => {
  if (request.focusUrl){
    focusUrl = request.focusUrl;
  }
});
