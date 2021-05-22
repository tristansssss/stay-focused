// let active_tab_id = 0;

chrome.tabs.onActivated.addListener((tab) => {
  console.log("on activated");
  chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
    console.log("sending");
    tabs.forEach((tab) => {
      console.log(tab);
      let tabUrl = tab.url;
      chrome.tabs.sendMessage(tab.id, { tabUrl });
    });
  });

});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("on updated")
});
