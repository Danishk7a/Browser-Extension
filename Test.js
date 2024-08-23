
document.getElementById('toggleEditMode').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: injectEditMode
      });
    });
  });
  
  function injectEditMode() {
    if (window.domEditModeInjected) {
      window.toggleEditMode();
      return;
    }
  
    window.domEditModeInjected = true;
    let editMode = false;
    let selectedElement = null;
  
    const style = document.createElement('style');
    style.textContent = `
      #extension-sidemenu {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 250px;
        background: white;
        border: 1px solid #ccc;
        padding: 10px;
        z-index: 10000;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      #extension-grid-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
      }
      .extension-hover-outline {
        outline: 2px dashed #007bff !important;
        outline-offset: -2px;
      }
      .extension-selected-outline {
        outline: 3px solid #28a745 !important;
        outline-offset: -3px;
      }
      #extension-close-button {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 10001;
        padding: 5px 10px;
        background-color: #dc3545;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
      #extension-sidemenu * {
        outline: none !important;
      }
      .tab-buttons {
        display: flex;
        margin-bottom: 10px;
      }
      .tab-buttons button {
        flex: 1;
        padding: 5px;
        background: #f0f0f0;
        border: 1px solid #ccc;
        cursor: pointer;
      }
      .tab-buttons button.active {
        background: #fff;
        border-bottom: none;
      }
      .tab-content {
        display: none;
      }
      .tab-content.active {
        display: block;
      }
      #extension-sidemenu label {
        display: block;
        margin-top: 10px;
      }
      #extension-sidemenu input[type="range"],
      #extension-sidemenu input[type="color"],
      #extension-sidemenu input[type="text"],
      #extension-sidemenu select {
        width: 100%;
        margin-top: 5px;
      }
      .code-section {
        margin-top: 20px;
        border-top: 1px solid #ccc;
        padding-top: 10px;
      }
      #code-container {
        margin-top: 10px;
      }
      #css-code {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        white-space: pre-wrap;
        word-break: break-all;
        max-height: 200px;
        overflow-y: auto;
      }
      #copy-code {
        margin-top: 10px;
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      #copy-code:hover {
        background-color: #45a049;
      }
    `;
    document.head.appendChild(style);
  
    window.toggleEditMode = function() {
      editMode = !editMode;
      if (editMode) {
        enableEditMode();
      } else {
        disableEditMode();
      }
    }
  
    function enableEditMode() {
      document.body.style.cursor = 'pointer';
      document.body.addEventListener('click', handleElementClick, true);
      document.body.addEventListener('mouseover', handleElementHover, true);
      document.body.addEventListener('mouseout', handleElementHoverOut, true);
      addCloseButton();
      console.log('Edit mode enabled');
    }
  
    function disableEditMode() {
      document.body.style.cursor = '';
      document.body.removeEventListener('click', handleElementClick, true);
      document.body.removeEventListener('mouseover', handleElementHover, true);
      document.body.removeEventListener('mouseout', handleElementHoverOut, true);
      hideSidemenu();
      removeCloseButton();
      if (selectedElement) {
        selectedElement.classList.remove('extension-selected-outline');
      }
      console.log('Edit mode disabled');
    }
  
    function handleElementClick(event) {
      if (!editMode) return;
  
      // Check if the click is on the sidemenu or its children
      if (event.target.closest('#extension-sidemenu')) {
        // Allow default behavior for sidemenu interactions
        return;
      }
  
      // Skip clicks on #extension-close-button
      if (event.target.matches('#extension-close-button')) return;
  
      event.preventDefault();
      event.stopPropagation();
  
      if (selectedElement) {
        selectedElement.classList.remove('extension-selected-outline');
      }
      selectedElement = event.target;
      selectedElement.classList.add('extension-selected-outline');
      showSidemenu(selectedElement);
    }
  
    function handleElementHover(event) {
      if (!editMode) return;
  
      // Skip hover effects on #extension-sidemenu, its children, and #extension-close-button
      if (event.target.closest('#extension-sidemenu') || event.target.matches('#extension-close-button')) return;
  
      event.target.classList.add('extension-hover-outline');
    }
  
    function handleElementHoverOut(event) {
      if (!editMode) return;
  
      // Skip hover out effects on #extension-sidemenu, its children, and #extension-close-button
      if (event.target.closest('#extension-sidemenu') || event.target.matches('#extension-close-button')) return;
  
      event.target.classList.remove('extension-hover-outline');
    }
  
    function addCloseButton() {
      const closeButton = document.createElement('button');
      closeButton.id = 'extension-close-button';
      closeButton.textContent = 'Close Edit Mode';
      closeButton.addEventListener('click', toggleEditMode);
      document.body.appendChild(closeButton);
    }
  
    function removeCloseButton() {
      const closeButton = document.getElementById('extension-close-button');
      if (closeButton) closeButton.remove();
    }
  
    function showSidemenu(element) {
      hideSidemenu(); // Remove existing sidemenu if any
  
      const sidemenu = document.createElement('div');
      sidemenu.id = 'extension-sidemenu';
  
      sidemenu.innerHTML = `
        <h3>Edit Element</h3>
        <div class="tab-buttons">
          <button id="structure-tab" class="active">Structure</button>
          <button id="style-tab">Style</button>
        </div>
        <div id="structure-content" class="tab-content active">
          <div>
            <label>Width:</label>
            <input type="range" id="width-slider" min="0" max="100" value="${parseInt(getComputedStyle(element).width)}">
          </div>
          <div>
            <label>Height:</label>
            <input type="range" id="height-slider" min="0" max="100" value="${parseInt(getComputedStyle(element).height)}">
          </div>
          <div>
            <label>Padding:</label>
            <input type="range" id="padding-slider" min="0" max="50" value="${parseInt(getComputedStyle(element).padding)}">
          </div>
          <div>
            <label>Display:</label>
            <select id="display-select">
              <option value="block">Block</option>
              <option value="flex">Flex</option>
              <option value="inline-block">Inline Block</option>
            </select>
          </div>
          <div id="flex-options" style="display:none;">
            <label>Flex Direction:</label>
            <select id="flex-direction-select">
              <option value="row">Row</option>
              <option value="column">Column</option>
            </select>
            <label>Justify Content:</label>
            <select id="justify-content-select">
              <option value="flex-start">Start</option>
              <option value="center">Center</option>
              <option value="flex-end">End</option>
              <option value="space-between">Space Between</option>
            </select>
            <label>Align Items:</label>
            <select id="align-items-select">
              <option value="flex-start">Start</option>
              <option value="center">Center</option>
              <option value="flex-end">End</option>
              <option value="stretch">Stretch</option>
            </select>
          </div>
        </div>
        <div id="style-content" class="tab-content">
          <div>
            <label>Background Color:</label>
            <input type="color" id="bgcolor-picker" value="${rgb2hex(getComputedStyle(element).backgroundColor)}">
          </div>
          <div>
            <label>Text Color:</label>
            <input type="color" id="color-picker" value="${rgb2hex(getComputedStyle(element).color)}">
          </div>
          <div>
            <label>Gradient:</label>
            <input type="text" id="gradient-input" placeholder="e.g., linear-gradient(45deg, #f00, #00f)">
          </div>
          <div>
            <label>Border:</label>
            <input type="text" id="border-input" placeholder="e.g., 1px solid black">
          </div>
          <div>
            <label>Box Shadow:</label>
            <input type="text" id="box-shadow-input" placeholder="e.g., 2px 2px 5px rgba(0,0,0,0.3)">
          </div>
        </div>
        <div class="code-section">
          <button id="toggle-code">Show CSS Code</button>
          <div id="code-container" style="display: none;">
            <pre id="css-code"></pre>
            <button id="copy-code">Copy CSS</button>
          </div>
        </div>
      `;
  
      document.body.appendChild(sidemenu);
  
      // Tab switching logic
      const structureTab = document.getElementById('structure-tab');
      const styleTab = document.getElementById('style-tab');
      const structureContent = document.getElementById('structure-content');
      const styleContent = document.getElementById('style-content');

      structureTab.addEventListener('click', () => {
        structureTab.classList.add('active');
        styleTab.classList.remove('active');
        structureContent.classList.add('active');
        styleContent.classList.remove('active');
      });

      styleTab.addEventListener('click', () => {
        styleTab.classList.add('active');
        structureTab.classList.remove('active');
        styleContent.classList.add('active');
        structureContent.classList.remove('active');
      });
  
      // Event listeners for structure properties
      document.getElementById('width-slider').addEventListener('input', (e) => {
        element.style.width = `${e.target.value}%`;
      });

      document.getElementById('height-slider').addEventListener('input', (e) => {
        element.style.height = `${e.target.value}px`;
      });

      document.getElementById('padding-slider').addEventListener('input', (e) => {
        element.style.padding = `${e.target.value}px`;
      });

      const displaySelect = document.getElementById('display-select');
      const flexOptions = document.getElementById('flex-options');

      displaySelect.addEventListener('change', (e) => {
        element.style.display = e.target.value;
        flexOptions.style.display = e.target.value === 'flex' ? 'block' : 'none';
      });

      document.getElementById('flex-direction-select').addEventListener('change', (e) => {
        element.style.flexDirection = e.target.value;
      });

      document.getElementById('justify-content-select').addEventListener('change', (e) => {
        element.style.justifyContent = e.target.value;
      });

      document.getElementById('align-items-select').addEventListener('change', (e) => {
        element.style.alignItems = e.target.value;
      });
  
      // Event listeners for style properties
      document.getElementById('bgcolor-picker').addEventListener('input', (e) => {
        element.style.backgroundColor = e.target.value;
      });

      document.getElementById('color-picker').addEventListener('input', (e) => {
        element.style.color = e.target.value;
      });

      document.getElementById('gradient-input').addEventListener('input', (e) => {
        element.style.backgroundImage = e.target.value;
      });

      document.getElementById('border-input').addEventListener('input', (e) => {
        element.style.border = e.target.value;
      });

      document.getElementById('box-shadow-input').addEventListener('input', (e) => {
        element.style.boxShadow = e.target.value;
      });

      // Toggle code section
      const toggleCodeBtn = document.getElementById('toggle-code');
      const codeContainer = document.getElementById('code-container');
      const cssCode = document.getElementById('css-code');

      toggleCodeBtn.addEventListener('click', () => {
        if (codeContainer.style.display === 'none') {
          codeContainer.style.display = 'block';
          toggleCodeBtn.textContent = 'Hide CSS Code';
          updateCSSCode();
        } else {
          codeContainer.style.display = 'none';
          toggleCodeBtn.textContent = 'Show CSS Code';
        }
      });

      // Copy CSS code
      const copyCodeBtn = document.getElementById('copy-code');
      copyCodeBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cssCode.textContent).then(() => {
          alert('CSS code copied to clipboard!');
        });
      });

      // Function to update CSS code
      function updateCSSCode() {
        const styles = getComputedStyle(element);
        const explicitStyles = Array.from(element.style).reduce((acc, prop) => {
          acc[prop] = styles.getPropertyValue(prop);
          return acc;
        }, {});

        cssCode.textContent = Object.entries(explicitStyles)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join('\n');
      }

      // Update CSS code when any style changes
      sidemenu.addEventListener('input', updateCSSCode);
      sidemenu.addEventListener('change', updateCSSCode);
    }
  
    function hideSidemenu() {
      const sidemenu = document.getElementById('extension-sidemenu');
      if (sidemenu) sidemenu.remove();
    }
  
    function rgb2hex(rgb) {
      if (rgb.startsWith('#')) return rgb;
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return rgb ? "#" + rgb.slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('') : '#000000';
    }
  
    toggleEditMode(); // Enable edit mode immediately when injected
  }
  