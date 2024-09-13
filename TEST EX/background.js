chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getElementCode') {
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      func: () => {
        return new Promise((resolve) => {
          chrome.runtime.sendMessage({action: 'getElementCode'}, response => {
            resolve(response);
          });
        });
      }
    }).then(([result]) => {
      sendResponse(result);
    });

    return true; // Indicates that sendResponse will be called asynchronously
  }
});
