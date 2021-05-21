// document.querySelector('.lnXdpd').classList.add('spinspinspin');

chrome.runtime.onMessage.addListener(request => {
  console.log(request);
  if (request.colour) {
    document.body.style.backgroundColor = request.colour;
  }
});
