chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
    chrome.tabs.insertCSS(null, { file: "./content.css" });
    console.log("insertign css")
    tabs.forEach((tab) => {
      let tabUrl = tab.url;
      chrome.tabs.sendMessage(tab.id, { tabUrl });
    });
  });
});

