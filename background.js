
chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
    tabs.forEach((tab) => {
      let tabUrl = tab.url;
      chrome.tabs.sendMessage(tab.id, { tabUrl });
    });
  });

});


