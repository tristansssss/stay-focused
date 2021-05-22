const focusButton = document.querySelector("#focus-btn");
const unFocusButton = document.querySelector("#unfocus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");
let currentUrl = "";

// if its a youtube link and focus is empty -> <button> focus </button>

// else if you are focus -> <button> unfocus </button>

// handle button disabled
chrome.tabs.query({ active: true }, (tabs) => {
  console.log(tabs);
  currentUrl = tabs[0].url;
  if (!regex.test(tabs[0].url)) {
    focusButton.display = "none";
  } else {
    focusButton.display = "block";
  }
});

// the focuse url should be stored in storage (changed the least)
// the current url should be sent as a message

// button clicked
// if its a youtube url send it
document.querySelector("#focus-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    let focusUrl = tabs[0].url;
    chrome.storage.local.set({ focusUrl: focusUrl });
    // get all youtube tabs and send message to their tabs
  });
});

