document
.querySelector('#colour-submit-btn')
.addEventListener('click', () => {
  console.log("clicked")
  // read the colour that the user has selected
  const colour = document.querySelector('#colour-input').value;
  // get all the google tabs and send a message to their tabs 
  console.log(colour);
  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
    tabs.forEach(tab => 
      chrome.tabs.sendMessage(tab.id, { colour } )
    );
  });
});

// A popup is an HTML file that is displayed in a special window when the user clicks the toolbar icon. A popup works very similarly to a web page; 
// it can contain links to stylesheets and script tags, but does not allow inline JavaScript.