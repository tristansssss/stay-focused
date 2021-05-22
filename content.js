
chrome.runtime.onMessage.addListener((request) => {
  // let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
  chrome.storage.local.get("focusUrl", (response) => {
    if (request.tabUrl !== response.focusUrl) {
      // console.log(blockedHtmlUrl)
      window.location.href = response.focusUrl;
    } else {
      console.log("were focusing")
    }
  });
});

