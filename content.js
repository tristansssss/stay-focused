chrome.runtime.onMessage.addListener((request) => {
  chrome.storage.local.get("focusUrl", (response) => {
    if (
      request.tabUrl !== response.focusUrl &&
      response.focusUrl !== undefined
    ) {
      window.location.href = response.focusUrl;
    } else {
      console.log("were focusing");
    }
  });
});

chrome.storage.local.get("focusUrl", (response) => {
  if (response.focusUrl) {
    document.querySelector("#secondary-inner").classList.add("hide");
    document
      .querySelector(".style-scope ytd-watch-next-secondary-results-renderer")
      .classList.add("hide");
  }
});
