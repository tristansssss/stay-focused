const focusButton = document.querySelector("#focus-btn");
const unFocusButton = document.querySelector("#unfocus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");

// handle button render
chrome.tabs.query({ active: true }, (tabs) => {
  let currentUrl = tabs[0].url;

  // handles the button for onChanged events
  chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (!regex.test(currentUrl) && newValue == undefined) {
        focusButton.disabled = true;
        unFocusButton.disabled = true;
      } else if (newValue) {
        focusButton.disabled = true;
        unFocusButton.disabled = false;
      } else if (regex.test(currentUrl) && newValue == undefined) {
        focusButton.disabled = false;
        unFocusButton.disabled = true;
      }
    }
  });

  // handles the button for the initial focusUrl set without onChange
  chrome.storage.local.get("focusUrl", (response) => {
    if (!regex.test(currentUrl) && !response.focusUrl) {
      focusButton.disabled = true;
      unFocusButton.disabledd = true;
    } else if (response.focusUrl) {
      focusButton.disabled = true;
      unFocusButton.disabled = false;
    } else if (regex.test(currentUrl) && !response.focusUrl) {
      focusButton.disabled = false;
      unFocusButton.disabled = true;
    }
  });
});

// handle setting focusUrl in storage
document.querySelector("#focus-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    let focusUrl = tabs[0].url;
    chrome.storage.local.set({ focusUrl: focusUrl });
  });
});

document.querySelector("#unfocus-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
  });
});
