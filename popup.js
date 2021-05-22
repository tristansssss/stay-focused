const focusButton = document.querySelector("#focus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");
let currentUrl = ""
let focusUrl

chrome.tabs.query({ active: true }, (tabs) => {
  console.log(tabs);
    if (!regex.test(tabs[0].url)) {
      focusButton.disabled = true;
    } else {
      focusButton.disabled = false;
      currentUrl = tabs[0].url;
    }
});
//
document.querySelector("#focus-btn").addEventListener("click", () => {
  console.log("clicked");
  // read the colour that the user has selected
  // const colour = document.querySelector("#colour-input").value;

  // get all the google tabs and send a message to their tabs
  // console.log(colour);
  chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
    focusUrl = currentUrl
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { focusUrl });
    });
  });
});
