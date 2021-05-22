
chrome.runtime.onMessage.addListener((request) => {
  console.log("on message")
  let blockedHtmlUrl = chrome.extension.getURL("blocked.html");
  console.log(request);
  chrome.storage.local.get("focusUrl", (response) => {
    console.log(response);
    if (request.tabUrl !== response.focusUrl) {
      console.log(blockedHtmlUrl)
      window.location.href = response.focusUrl;
    } else {
      console.log("were focusing")
    }
  });
});

