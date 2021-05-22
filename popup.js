const focusButton = document.querySelector("#focus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");
let currentUrl = "";

// handle button disabled
chrome.tabs.query({ active: true }, (tabs) => {
  console.log(tabs);
  if (!regex.test(tabs[0].url)) {
    focusButton.disabled = true;
  } else {
    focusButton.disabled = false;
    currentUrl = tabs[0].url;
  }
});

chrome.storage.local.set({ currentUrl });


// button clicked
// if its a youtube url send it
document.querySelector("#focus-btn").addEventListener("click", () => {
  console.log("clicked");
  chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
    tabs.forEach(tab => {
      focusUrl = tabs[0].url
      chrome.tabs.sendMessage(tab.id, { focusUrl })
    })
  });
});
