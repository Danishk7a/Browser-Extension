// ------------------------------------------------------ Color Picker ------------------------------------------------------------

let injectedDiv = null;
let currentIndex = 0;

let items = [];

function injectDiv() {
    // Check if the div is already injected

    const colorsStorage = localStorage.getItem('colors') ;
    if(!colorsStorage){
        localStorage.setItem('colors', "")

    }else{
        items = JSON.parse(colorsStorage)
    }
    if (injectedDiv) return;

    // Create the div element
    injectedDiv = document.createElement('div');
    injectedDiv.style.position = 'fixed';
    injectedDiv.style.top = '0px';
    // injectedDiv.style.left = '10px';
    injectedDiv.style.padding = '10px';
    injectedDiv.style.backgroundColor = '#000000c4';
    injectedDiv.style.display = 'flex';
    injectedDiv.style.justifyContent = 'center';
    injectedDiv.style.alignItems = 'center';
     injectedDiv.style.gap = '20px';

    injectedDiv.style.color = 'white';
    // injectedDiv.style.borderRadius = '50%';
    injectedDiv.style.zIndex = '9999';
    injectedDiv.style.display = 'flex';
    injectedDiv.style.flexDirection = 'column';
    injectedDiv.style.height = '100vh';
    injectedDiv.style.width = '100%';





    // Add 4 items to the div
   
    items.forEach((element, index) => {
        const item = document.createElement('div');
        item.textContent = element;
        item.style.backgroundColor = element
         item.style.padding = '4px 20px'
          item.style.boxShadow = '3px 4px 45px 2px #00000014'
           item.style.borderRadius = '9px' 
           item.style.fontSize = '13px' 
           item.style.transition = '0.2s ease-in'

        // item.style.padding = '5px';
        item.style.border = '1px solid transparent'; 
   
        item.dataset.index = index;
        injectedDiv.appendChild(item);
    });

    // Append the div to the body
    document.body.appendChild(injectedDiv);
}

function removeDiv() {
    if (injectedDiv) {
        document.body.removeChild(injectedDiv);
        injectedDiv = null;
        currentIndex = 0; // Reset the index when removing the div
    }
}

function updateSelection() {
    if (!injectedDiv) return;

    // Remove selection from all items
    const items = injectedDiv.querySelectorAll('div');
    items.forEach(item => {
        item.style.border = '1px solid transparent'; 
        item.style.scale = 1; 
        item.style.marginBottom = '2px'; 
        // item.innerText =; 

    });

    // Add selection to the current item
    const selectedItem = items[currentIndex];
    if (selectedItem) {
        selectedItem.style.border = '2px solid black'; 
        selectedItem.style.scale = 1.3; 
        // selectedItem.innerText = 'Copied' 
        selectedItem.style.marginBottom = '2px'; 

        
        
        console.log(`Selected Item: ${selectedItem.textContent}`); 

        navigator.clipboard.writeText(selectedItem.textContent)
        .then(() => {
            
        })
        .catch(err => {
            console.error('Failed to copy color: ', err);
        });
    }
}

document.addEventListener('keydown', (event) => {
    
    if (event.altKey) {
        event.preventDefault()
        injectDiv(); 
    }

    if (event.altKey && event.key === 's') {
        event.preventDefault()
        // Update the selected item index
        if (injectedDiv) {
            const items = injectedDiv.querySelectorAll('div');
            currentIndex = (currentIndex + 1) % items.length; // Circular pattern
            updateSelection();
        }
    }


        if(event.key === 'z'){
            pick();
        }
        if(event.key === 'x'){
            items.length = 0
        }
    
});

document.addEventListener('keyup', (event) => {
    if (!event.altKey) {
        
        
        removeDiv(); 
    }
});


function pick(){
    if (!window.EyeDropper) {
        alert('EyeDropper API is not supported in this browser.');
        return;
    }

    const eyeDropper = new EyeDropper();
   
    eyeDropper.open()
        .then(result => {

           console.log(`Color picked: ${result.sRGBHex}`)

           items.push(result.sRGBHex)

           localStorage.setItem('colors', JSON.stringify(items))

           navigator.clipboard.writeText(result.sRGBHex  )
           .then(() => {
               
           })
           .catch(err => {
               console.error('Failed to copy color: ', err);
           });


      if(items.length > 6){
        console.log("hehee")
        items.shift()
      }


      
        }).then(x=>{
            eyeDropper.open()

        })
        .catch(error => {
            console.error('Error picking color:', error);
        });
}





// ------------------------------------------------------ Edit Mode ------------------------------------------------------------


let selectedElement = null;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "changeStyle") {
    // selectedElement.style.minHeight = '0'
    // selectedElement.style.maxHeight = '0'
    selectedElement.style[message.style.property] = message.style.value;
  }
});



document.addEventListener('keydown', (event) => {
    
    if (event.altKey) {
        event.preventDefault()
        injectDiv(); 
    }

    if (event.altKey && event.key === 'f') {
        event.preventDefault()
     
        
        injectEditMode();
        
    }


    
});




function injectEditMode() {
  
  
  
  if (window.domEditModeInjected) {
      window.toggleEditMode();
      return;
    }
  
    window.domEditModeInjected = true;
    let editMode = false;
  

    const style = document.createElement('style');
    // style.classList.add('resizable')
    style.textContent = `
      .extension-selected-outline {
        outline: 2px solid #0066ff;
        outline-offset: -2px;
      }
      .extension-menu-trigger {
        position: absolute;
        top: -15px;
        left: -15px;
        width: 15px;
        height: 15px;
        background-color: #007bff;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10001;
      }
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
      #extension-sidemenu input, #extension-sidemenu select {
        width: 100%;
        margin-bottom: 5px;
      }
      #extension-toggle-button {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 10001;
        padding: 5px 10px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
      }
      .extension-ui {
        pointer-events: auto !important;
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
      document.body.addEventListener('mouseenter', hoverEnter, true);
      document.body.addEventListener('mouseleave', hoverLeave, true);
      document.addEventListener('keydown', handleKeyDown);
    }
     function disableEditMode() {
      document.body.style.cursor = '';
      document.body.removeEventListener('click', handleElementClick, true);
      document.removeEventListener('keydown', handleKeyDown);
      if (selectedElement) {
        removeEditUI(selectedElement);
      }
      selectedElement = null;
    }



    
    function handleElementClick(event) {
      

      if (event.target.closest('#extension-sidemenu')) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (selectedElement) {
        removeEditUI(selectedElement);
      }

    
      
      
      selectedElement = event.target;
      
      addEditUI(selectedElement);
       
    }


    function hoverEnter(event) {
      if (event.target.closest('#extension-sidemenu')) {
        return;
      }
      event.target.style.border = '2px solid black'
      event.target.addEventListener('mouseenter', ()=>{
        event.target.parentNode.style.border = 'none'
       })

    }

    function hoverLeave(event) {
      if (event.target.closest('#extension-sidemenu')) {
        return;
      }
       event.target.style.border = 'none'
 }


    function addEditUI(element) {
     
      element.classList.add('extension-selected-outline');
      // element.classList.add('resizable')
      element.style.position = 'relative';


      if (element.textContent.trim() !== '') {
        element.addEventListener('dblclick', () => {
          element.contentEditable = 'true'; 
          element.focus();
        });
      }
    
       
      const menuTrigger = document.createElement('div');
      menuTrigger.className = 'extension-menu-trigger';
      disableDefaults();

      const handle = document.createElement('div');  
      element.appendChild(menuTrigger);

      menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
      });

        makeResizableAndDraggable(element, handle);

    }

    function removeEditUI(element) {
      element.classList.remove('extension-selected-outline');
      element.classList.remove('resizable');
      element.querySelectorAll('.extension-menu-trigger').forEach(el => el.remove());
      const handle = element.querySelector('#handle');
      if (handle) handle.remove();
      
      // Remove event listeners
      element.removeEventListener('mousedown', element.startDragging);
      if (element.resizeHandle) {
        element.resizeHandle.removeEventListener('mousedown', element.startResizing);
      }
    }

    
    function makeResizableAndDraggable(element, handle) {
   
      

      let isDragging = false;
      let isResizing = false;
      let startX, startY, startWidth, startHeight, startLeft, startTop, startFontSize ;
    
      // Function to start dragging
      function startDragging(e) {
        if (isResizing) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseInt(window.getComputedStyle(element).left, 10) || 0;
        startTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', stopDragging);
      }
    
      // Function to handle dragging
      function onDragMove(e) {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        element.style.left = `${startLeft + deltaX}px`;
        element.style.top = `${startTop + deltaY}px`;
      }
    
      // Function to stop dragging
      function stopDragging() {
        isDragging = false;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', stopDragging);
      }
    
      // Function to start resizing
      function startResizing(e) {
        if (isDragging) return;
        e.preventDefault();
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(window.getComputedStyle(element).width, 10);
        startHeight = parseInt(window.getComputedStyle(element).height, 10);
        
      startFontSize =  parseInt(window.getComputedStyle(element).fontSize, 10);
        document.addEventListener('mousemove', onResizeMove);
        document.addEventListener('mouseup', stopResizing);

      }
    
      // Function to handle resizing
      function onResizeMove(e) {
        if (!isResizing) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newWidth = startWidth + deltaX;
        const newHeight = startHeight + deltaY;
        
        element.style.width = `${newWidth}px`;
        element.style.height = `${newHeight}px`;

       
        
      // const diff = deltaX + deltaY
    
     const newFontSize = startFontSize + deltaX


     element.style.fontSize = `${newFontSize}px`

   


        
        // const images = element.getElementsByTagName('img');
        // for (let img of images) {
        //   img.style.width = `${newWidth}px`;
        //   img.style.height = `${newHeight}px`;
        //   // img.style.objectFit = 'cover';
        // }


      }
    
      // Function to stop resizing
      function stopResizing() {
        isResizing = false;
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', stopResizing);
      }
    
      // Attach event listeners
      element.addEventListener('mousedown', startDragging);
      handle.addEventListener('mousedown', startResizing);

      element.startDragging = startDragging;
      element.startResizing = startResizing;
      element.resizeHandle = handle;

    }

    function handleKeyDown(event) {
      if (!selectedElement) return;

      if (event.altKey && event.key === 'b') {
        navigator.clipboard.readText().then(text => {

          if(text.includes('linear-gradient')){
            selectedElement.style.background = text;

          }else{
              
          const color = parseColor(text);

          if (color) {
            selectedElement.style.background = color;
            updateCSSCode();
          } else {
            console.log('Invalid color format in clipboard');
          }

          }
        
        });
      }
      if (event.altKey && event.key === 'c') {
        navigator.clipboard.readText().then(text => {

          if(text.includes('gradient')){

            selectedElement.style.background = text;
            selectedElement.style.color = 'transparent'
 
      
            selectedElement.style.webkitBackgroundClip = 'text';
            selectedElement.style.webkitTextFillColor = 'transparent';
            selectedElement.style.backgroundClip = 'text';
          
    
           
         
        
     

          }else{
            const color = parseColor(text);
            if (color) {
              selectedElement.style.color = color;
              updateCSSCode();
            } else {
              console.log('Invalid color format in clipboard');
            }

          }



        
        });
      }else if (event.key === 'Delete') {
        removeElement(selectedElement);
      }else if (event.altKey && event.key === 'm') {
        if(selectedElement.tagName === 'IMG'){

          navigator.clipboard.readText().then(text => {
            const image = text;
            if (image) {
              selectedElement.src = text;
              updateCSSCode();
            } else {
              console.log('Invalid IMG');
            }
          });

        }
       
      }else if (event.altKey && event.key === 'a') {
        selectedElement.position = 'relative';
        const div = document.createElement('div');
        div.innerText = 'Click to Edit';
        selectedElement.appendChild(div)

        div.scrollIntoView({ behavior: 'smooth', block: 'center' });

      }else if (event.altKey && event.key === 'd') {
        selectedElement.position = 'relative';
        const img = document.createElement('img');
     
        function getRandomImageWithSeed() {
          const seed = Math.floor(Math.random() * 1000);
          return `https://picsum.photos/seed/${seed}/300/300`;
      }
      img.src =  getRandomImageWithSeed();

        selectedElement.appendChild(img)
      }else if (event.key === 'w') {

        function getRandomImageWithSeed(w,h) {
          const seed = Math.floor(Math.random() * 1000);
          return `https://picsum.photos/seed/${seed}/${w}/${h}`;
      }
      
        if(selectedElement.tagName === 'IMG'){
       const w =   parseFloat( window.getComputedStyle(selectedElement).width,10)
        const h =  parseFloat( window.getComputedStyle(selectedElement).height,10)
               selectedElement.src =  getRandomImageWithSeed(w,h)

        }
        
     
      }else if(event.key === ' '){
        if(selectedElement.tagName === 'IMG'){
          event.preventDefault();
          document.getElementById('fileInput').click();
        
        
        }else{
          event.preventDefault();

          selectedElement.style.backgroundColor = getRandomColor();
          updateCSSCode();

        }
      
      }else if(event.key === 'c'){

        event.preventDefault();

          selectedElement.style.background = 'transparent';
          updateCSSCode();


      }else if(event.key === 'm'){

        
const fonts = [
  'Courier', 'monospace', 'Segoe UI', 'Helvetica', 'Arial', 'Roboto',
  'Verdana', 'sans-serif', 'Times New Roman', 'Cambria', 'Cochin', 'Simpsonfont','VITAMINO','Youaretheone'
];

let index = Math.floor(Math.random() * fonts.length);
let selectedFont = fonts[index];
        selectedElement.style.fontFamily =selectedFont   ;
        updateCSSCode();


      }else if(event.key === 'n'){
       
         selectedElement.style.color = getRandomColor();
       
        updateCSSCode();


      }




     

    }

    function removeElement(element) {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
        selectedElement = null;
      }
    }
  
    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  
    function parseColor(text) {
      // Remove any leading/trailing whitespace
      text = text.trim();

      // Check for hex color with #
      if (/^#[0-9A-Fa-f]{6}$/.test(text)) {
        return text;
      }

      // Check for hex color without #
      if (/^[0-9A-Fa-f]{6}$/.test(text)) {
        return '#' + text;
      }

      // Check for rgb color
      const rgbMatch = text.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
      if (rgbMatch) {
        return `rgb(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]})`;
      }

      // Check for rgba color
      const rgbaMatch = text.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);
      if (rgbaMatch) {
        return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${rgbaMatch[4]})`;
      }

      // If none of the above formats match, return null
      return null;
    }
  
   
    function disableDefaults() {

      const images = document.getElementsByTagName('img');
      for (let img of images) {
        img.addEventListener('mousedown', preventDefault);
        img.addEventListener('dragstart', preventDefault);
      }
    
      const links = document.getElementsByTagName('a');
      for (let link of links) {
        link.addEventListener('mousedown', preventDefault);
        link.addEventListener('dragstart', preventDefault);
      }
    
      document.addEventListener('selectstart', preventDefault);
    
    
      document.addEventListener('dragstart', preventDefault);
    
      function preventDefault(e) {
        e.preventDefault();
      }
    
      
    }
  
    toggleEditMode(); 
  }
  






















