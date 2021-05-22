const focusButton = document.querySelector("#focus-btn");
const unFocusButton = document.querySelector("#unfocus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");

// handle button render
chrome.tabs.query({ active: true }, (tabs) => {
  let currentUrl = tabs[0].url;

  // event for changes in storage
  chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      // if its not a youtube link and we are unfocused
      if (!regex.test(currentUrl) && newValue == undefined){
        console.log("onChanged 1")
        console.log("onChanged - not a youtube link and were unfocused");
        focusButton.disabled = true;
        unFocusButton.disabled = true;
        // else if were focusing
      } else if (newValue){
        console.log("onChanged 2");
        console.log("onChanged - if were focusing -> we can unfocus anywhere");
        focusButton.disabled = true;
        unFocusButton.disabled = false;
        // else if its a youtube link and were unfocused
      } else if (regex.test(currentUrl) && newValue == undefined){
        console.log("onChanged3");
        console.log("onChanged - if it is a youtube link and were unfocused");
        focusButton.disabled = false;
        unFocusButton.disabled = true;
      }
    }
  })
  chrome.storage.local.get("focusUrl", (response) => {
    // if its not a youtube link and were unfocused
    if (!regex.test(currentUrl) && !response.focusUrl) {
      console.log("true1");
      console.log("not a youtube link and were unfocused");
      focusButton.disabled = true;
      unFocusButton.disabledd = true;
      // focusButton.display = "none";
      // if were focusing -> we can unfocus anywhere
    } else if (response.focusUrl) {
      console.log("true2");
      console.log("if were focusing -> we can unfocus anywhere");
      focusButton.disabled = true;
      unFocusButton.disabled = false;
      // if it is a youtube link and were unfocused
    } else if (regex.test(currentUrl) && !response.focusUrl) {
      console.log("true3");
      console.log("if it is a youtube link and were unfocused");
      focusButton.disabled = false;
      unFocusButton.disabled = true;
    }
  });
});


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
