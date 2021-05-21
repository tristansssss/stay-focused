document
.querySelector('#colour-submit-btn')
.addEventListener('click', () => {
  console.log("clicked")
  // read the colour that the user has selected
  const colour = document.querySelector('#colour-input').value;

  chrome.storage.local.set({ colour });

  // get all the google tabs and send a message to their tabs 
  console.log(colour);
  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
    tabs.forEach(tab => 
      chrome.tabs.sendMessage(tab.id, { colour } )
    );
  });
});
