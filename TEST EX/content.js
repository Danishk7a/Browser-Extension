// content-script.js

let sidebarOpen = false;

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.id = 'extension-sidebar';
  sidebar.style.cssText = `
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background-color: #f1f1f1;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
  `;
  sidebar.innerHTML = '<h2>Sidebar Content</h2><p>This is your sidebar. Add more content here!</p>';
  document.body.appendChild(sidebar);
}

function toggleSidebar() {
  const sidebar = document.getElementById('extension-sidebar');
  if (sidebar) {
    sidebarOpen = !sidebarOpen;
    sidebar.style.right = sidebarOpen ? '0' : '-300px';
  }
  return sidebarOpen;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleSidebar") {
    const isOpen = toggleSidebar();
    sendResponse({sidebarOpen: isOpen});
  }
  return true; // Will respond asynchronously
});

// Create and append the button
function createToggleButton() {
  const button = document.createElement('button');
  button.textContent = 'Toggle Sidebar';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = '9999';
  button.addEventListener('click', () => {
    chrome.runtime.sendMessage({action: "toggleSidebar"}, function(response) {
      if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError);
      } else {
        console.log("Sidebar toggled:", response.sidebarOpen);
      }
    });
  });
  document.body.appendChild(button);
}

// Run the script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createSidebar();
    createToggleButton();
  });
} else {
  createSidebar();
  createToggleButton();
}