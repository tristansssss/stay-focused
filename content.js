// document.querySelector('.lnXdpd').classList.add('spinspinspin');
console.log("you'r in the world of content.js");

let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
let currentUrl = "";

chrome.storage.local.get("currentUrl", (response) => {
  if (response.currentUrl) {
    currentUrl = response.currentUrl;
  }
});

chrome.runtime.onMessage.addListener((request) => {
  console.log(chrome.extension.getURL("blocked.html"));
  chrome.tabs.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (current_tab_info) => {
      console.log(current_tab_info.url);
      if (current_tab_info.url === currentUrl) {
        window.location.href = blockedHtmlUrl;
      }
    });
  });
});
