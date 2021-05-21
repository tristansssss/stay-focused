
list of scripts you want executed when installed or refreshed
```
background: {
  scripts: []
}
```

options_page

popup page
```
browser_action: {
  "default_popup": 
}
```

permissions: everything your chrome extensions needs access too, need to be explicit. eg. domains
```
"permissions": [
  "tabs": "https://www.google.com/*"
]
```

background.js will immediatley get executed

load unpacked, select folder

two different consoles
foreground and background

foregorund is the developer tools console

click background page to access the background console.

```
// chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))
we got an error because we cant inject an extenesion into an invalid http url, or local url
so we need to inject into specific sites

```

so we need to check what site we are injecting the script into
add listener to what user is doing
```
chrome.tabs.onActivated.addListener(tab => {
  console.log(tab)
})
```
=> {tabId: 17, windowId: 1}
everytime we move tabs background is refreshed