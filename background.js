chrome.commands.onCommand.addListener((command) => {
    if (command === 'openExtension') {
     
      chrome.action.openPopup();
    }
  });
  