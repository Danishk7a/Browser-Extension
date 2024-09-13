document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const selectButton = document.getElementById('selectButton');
  
    // Send a message to toggle selection mode when the button is clicked
    selectButton.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'toggleSelectionMode' });
    });
  
    // Get the code when the popup is loaded
    chrome.runtime.sendMessage({ action: 'getElementCode' }, (response) => {
      const codeArea = document.getElementById('code');
      codeArea.value = `<style>\n${response.css}</style>\n${response.html}`;
    });
  
    // Copy the code to the clipboard
    copyButton.addEventListener('click', () => {
      const codeArea = document.getElementById('code');
      codeArea.select();
      document.execCommand('copy');
    });
  });
  