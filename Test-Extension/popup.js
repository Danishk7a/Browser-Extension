document.getElementById('viewport').addEventListener('change', function() {
  const [width, height] = this.value.split('x').map(Number);
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: setViewport,
      args: [width, height]
    });
  });
});

function setViewport(width, height) {
  document.documentElement.style.setProperty('--viewport-width', `${width}px`);
  document.documentElement.style.setProperty('--viewport-height', `${height}px`);
}
