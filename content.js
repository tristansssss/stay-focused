console.log("you'r in the world of content.js");

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

// // when we get message set focused url
// chrome.runtime.onMessage.addListener((request) => {
//   chrome.storage.local.get('currentUrl', (response) => {
//     if (response.currentUrl !== focusUrl) {
//       alert("it doesnt match")
//     }
//   });

//   if (request.focusUrl){
//     focusUrl = request.focusUrl;
//   }
// });
