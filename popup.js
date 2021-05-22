const focusButton = document.querySelector("#focus-btn");
const unFocusButton = document.querySelector("#unfocus-btn");
const regex = new RegExp("https://www.youtube.com/watch*");

// handle button disabled


// all active tabs
chrome.tabs.query({ active: true }, (tabs) => {
  let currentUrl = tabs[0].url;

  chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (!regex.test(currentUrl) && newValue == undefined){
        console.log("onChanged 1")
        console.log("onChanged - not a youtube link and were unfocused");
        focusButton.disabled = true;
        unFocusButton.style.display = "none";
        // else if werre focusing
      } else if (newValue){
        console.log("onChanged 2");
        console.log("onChanged - if were focusing -> we can unfocus anywhere");
        focusButton.disabled = true;
        unFocusButton.style.display = "block";
        // else if its a youtube link and were unfocused
      } else if (regex.test(currentUrl) && newValue == undefined){
        console.log("onChanged3");
        console.log("onChanged - if it is a youtube link and were unfocused");
        focusButton.disabled = false;
        unFocusButton.style.display = "none";
      }
    }
  })
  chrome.storage.local.get("focusUrl", (response) => {
    console.log(response);
    // let currentUrl = tabs[0].url;
    // if its not a youtube link and were unfocused
    if (!regex.test(currentUrl) && !response.focusUrl) {
      console.log("true1");
      console.log("not a youtube link and were unfocused");
      focusButton.disabled = true;
      unFocusButton.style.display = "none";
      // focusButton.display = "none";
      // if were focusing -> we can unfocus anywhere
    } else if (response.focusUrl) {
      console.log("true2");
      console.log("if were focusing -> we can unfocus anywhere");
      focusButton.disabled = true;
      unFocusButton.style.display = "block";
      // if it is a youtube link and were unfocused
    } else if (regex.test(currentUrl) && !response.focusUrl) {
      console.log("true3");
      console.log("if it is a youtube link and were unfocused");
      focusButton.disabled = false;
      unFocusButton.style.display = "none";
    }
  });
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

document.querySelector("#unfocus-btn").addEventListener("click", () => {
  console.log("attempting to unfocus");
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
  });
});
