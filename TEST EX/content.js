let selectionMode = false;
let selectedElement = null;

// Toggle selection mode
function toggleSelectionMode() {
  selectionMode = !selectionMode;
  document.body.style.cursor = selectionMode ? 'crosshair' : 'default';
  if (selectionMode) {
    document.addEventListener('click', onElementClick);
  } else {
    document.removeEventListener('click', onElementClick);
  }
}

// Handle element click
function onElementClick(event) {
  event.preventDefault();
  event.stopPropagation();
  
  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }
  
  selectedElement = event.target;
  selectedElement.classList.add('selected');
  
  // Remove selection mode after selecting an element
  toggleSelectionMode();
  
  // Optional: Highlight selected element
  selectedElement.style.outline = '2px solid red';
}

// Get CSS for an element
function getElementCSS(element) {
  let css = '';
  const sheets = [...document.styleSheets];
  
  sheets.forEach(sheet => {
    try {
      const rules = [...sheet.cssRules];
      rules.forEach(rule => {
        if (element.matches(rule.selectorText)) {
          css += `${rule.selectorText} { ${rule.style.cssText} }\n`;
        }
      });
    } catch (e) {
      // Ignore cross-origin stylesheet issues
    }
  });
  
  return css;
}

// Get HTML for an element
function getElementHTML(element) {
  return element.outerHTML;
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getElementCode') {
    if (selectedElement) {
      const html = getElementHTML(selectedElement);
      const css = getElementCSS(selectedElement);
      sendResponse({ html, css });
    } else {
      sendResponse({ html: '', css: '' });
    }
  } else if (request.action === 'toggleSelectionMode') {
    toggleSelectionMode();
  }
});
