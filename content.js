// document.querySelector('.lnXdpd').classList.add('spinspinspin');

// chrome.tabs.addListener(tab => {
//   chrome.tabs.get(tab.tabId, current_tab_info => {
//     console.log(current_tab_info.url);
//   })
// })

chrome.storage.local.get('colour', (response) => {
  if (response.colour) {
    document.body.style.backgroundColor = response.colour;
  }
});


chrome.runtime.onMessage.addListener(request => {
  console.log(request);
  console.log(chrome.extension.getURL("blocked.html"));

  if (request.colour) {
    document.body.style.backgroundColor = request.colour;
  }
});
