// let active_tab_id = 0;

// chrome.tabs.onActivated.addListener(tab => {
//   console.log("activated");
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         active_tab_id = tab.tabId;

//         if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
//             chrome.tabs.insertCSS(null, { file: './mystyles.css' });
//             chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('i injected'))
//         }
//     });
// });

// chrome.runtime.onMessage.addListener(request => {
//   if (request.colour) {
//     document.body.style.backgroundColor = request.colour;
//   }
// });



// null indicates the current tab we are viewing