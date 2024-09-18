// // ------------------------------------------------------ Color Picker ------------------------------------------------------------

// let injectedDiv = null;
// let currentIndex = 0;

// let items = [];

// function injectDiv() {
//     // Check if the div is already injected

//     const colorsStorage = localStorage.getItem('colors') ;
//     if(!colorsStorage){
//         localStorage.setItem('colors', "")

//     }else{
//         items = JSON.parse(colorsStorage)
//     }
//     if (injectedDiv) return;

//     // Create the div element
//     injectedDiv = document.createElement('div');
//     injectedDiv.style.position = 'fixed';
//     injectedDiv.style.top = '0px';
//     // injectedDiv.style.left = '10px';
//     injectedDiv.style.padding = '10px';
//     injectedDiv.style.backgroundColor = '#000000c4';
//     injectedDiv.style.display = 'flex';
//     injectedDiv.style.justifyContent = 'center';
//     injectedDiv.style.alignItems = 'center';
//      injectedDiv.style.gap = '20px';

//     injectedDiv.style.color = 'white';
//     // injectedDiv.style.borderRadius = '50%';
//     injectedDiv.style.zIndex = '9999';
//     injectedDiv.style.display = 'flex';
//     injectedDiv.style.flexDirection = 'column';
//     injectedDiv.style.height = '100vh';
//     injectedDiv.style.width = '100%';





//     // Add 4 items to the div
   
//     items.forEach((element, index) => {
//         const item = document.createElement('div');
//         item.textContent = element;
//         item.style.backgroundColor = element
//          item.style.padding = '4px 20px'
//           item.style.boxShadow = '3px 4px 45px 2px #00000014'
//            item.style.borderRadius = '9px' 
//            item.style.fontSize = '13px' 
//            item.style.transition = '0.2s ease-in'

//         // item.style.padding = '5px';
//         item.style.border = '1px solid transparent'; 
   
//         item.dataset.index = index;
//         injectedDiv.appendChild(item);
//     });

//     // Append the div to the body
//     document.body.appendChild(injectedDiv);
// }

// function removeDiv() {
//     if (injectedDiv) {
//         document.body.removeChild(injectedDiv);
//         injectedDiv = null;
//         currentIndex = 0; // Reset the index when removing the div
//     }
// }

// function updateSelection() {
//     if (!injectedDiv) return;

//     // Remove selection from all items
//     const items = injectedDiv.querySelectorAll('div');
//     items.forEach(item => {
//         item.style.border = '1px solid transparent'; 
//         item.style.scale = 1; 
//         item.style.marginBottom = '2px'; 
//         item.style.opacity = '3 4%'
//         // item.innerText =; 

//     });

//     // Add selection to the current item
//     const selectedItem = items[currentIndex]
//     if (selectedItem) {
//         selectedItem.style.border = '2px solid black'; 
//         selectedItem.style.scale = 1.3; 
//         selectedItem.style.opacity = '100%'; 
//         selectedItem.innerText = 'Copied' 
//         selectedItem.style.marginBottom = '2px'; 

        
        
//         console.log(`Selected Item: ${selectedItem.textContent}`); 

//         navigator.clipboard.writeText(selectedItem.textContent)
//         .then(() => {
            
//         })
//         .catch(err => {
//             console.error('Failed to copy color: ', err);
//         });
//     }
// }




// document.addEventListener('keydown', (event) => {
    
//     if (event.altKey) {
//         event.preventDefault()
//         injectDiv(); 
//     }

//     if (event.altKey && event.key === 's') {
//         event.preventDefault()
//         // Update the selected item index
//         if (injectedDiv) {
//             const items = injectedDiv.querySelectorAll('div');
//             currentIndex = (currentIndex + 1) % items.length; // Circular pattern
//             updateSelection();
//         }
//     }else if(event.altKey && event.key === 's' && event.key ===''){


//     }


//         if(event.key === 'z'){
//             pick();
//         }
//         if(event.key === 'x'){
//             items.length = 0
//         }
    
// });

// document.addEventListener('keyup', (event) => {
//     if (!event.altKey) {
        
        
//         removeDiv(); 
//     }
// });


// function pick(){
//     if (!window.EyeDropper) {
//         alert('EyeDropper API is not supported in this browser.');
//         return;
//     }

//     const eyeDropper = new EyeDropper();
   
//     eyeDropper.open()
//         .then(result => {

//            console.log(`Color picked: ${result.sRGBHex}`)

//            items.push(result.sRGBHex)

//            localStorage.setItem('colors', JSON.stringify(items))

//            navigator.clipboard.writeText(result.sRGBHex  )
//            .then(() => {

//             document.addEventListener('click', function(event) {
                
//                 // var messageDiv = document.getElementById('message');
//                 const messageDiv = document.createElement('div');
//                 messageDiv.innerText = 'hello hhh'
                
//                 var x = event.clientX;
//                 var y = event.clientY;
                
//                 // Set the position of the message div
//                 messageDiv.style.left = (x + 10) + 'px'; // Offset to avoid the message being hidden under the cursor
//                 messageDiv.style.top = (y + 10) + 'px';
                
//                 // Show the message div
//                 messageDiv.style.display = 'block';
    
//                 // Hide the message div after a few seconds
//                 setTimeout(function() {
//                     messageDiv.style.display = 'none';
//                 }, 2000); // Message will be visible for 2 seconds
//             });

               
//            })
//            .catch(err => {
//                console.error('Failed to copy color: ', err);
//            });


//       if(items.length > 6){
//         console.log("hehee")
//         items.shift()
//       }


      
//         }).then(x=>{
//             eyeDropper.open()

//         })
//         .catch(error => {
//             console.error('Error picking color:', error);
//         });
// }







let selectedElement = null;
let colors = ['#9461F1', '#C165F2', '#ED69F3', '#F56DD2', '#F671AC']
let data = [25, 25, 25, 25,25];




const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('content.css');


(document.head || document.documentElement).appendChild(link);




const canvas = document.createElement('canvas');

const bg = document.createElement('div');
bg.style.height = '100vh';
bg.style.width = '100%';
bg.style.position ='fixed'
bg.style.top = '0px'
// bg.style.background = '#00000052';


canvas.id = 'pieChart';
canvas.className = 'chart1';
canvas.style.width = '220px'
canvas.style.borderRadius = '50%'
canvas.style.display = 'none'
canvas.style.overflow = 'hidden'
canvas.style.position = 'absolute';
canvas.style.top = '200px';
canvas.style.left = '200px';
canvas.style.boxShadow = '1px 1px 20px -3px black';
canvas.style.justifyContent = 'center'
canvas.style.transition = ' transform 0.5s ease'
canvas.style.alignItems = 'center'
canvas.style.zIndex = '99999'

bg.appendChild(canvas)
document.body.appendChild(bg);

let selectedSegment = 0;
let rotationAngle = 0;



function drawPieChart(ctx, data, colors, highlightIndex = null) {
const total = data.reduce((sum, value) => sum + value, 0);
const radius = 110;
let startAngle = 0;

ctx.save();
ctx.translate(radius, radius);
ctx.rotate(rotationAngle);

if (colors.length === 0) {
    // Draw a single slice with the default color if there are no colors
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#242424'; // Default color
    ctx.fill();
} else {
    data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();

        if (index === highlightIndex) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        startAngle = endAngle;
    });
}

ctx.restore();
}

function updatePieChart() {
const canvas = document.getElementById('pieChart');
const ctx = canvas.getContext('2d');
canvas.width = 220;
canvas.height = 220;

const total = data.reduce((sum, value) => sum + value, 0);
const selectedSliceAngle = (data.slice(0, selectedSegment).reduce((sum, value) => sum + value, 0) / total) * 2 * Math.PI;
const rotationAdjustment = -selectedSliceAngle;

rotationAngle += Math.PI / 6;
document.querySelector('.chart1').style.transform = `rotate(${rotationAngle}rad)`;

drawPieChart(ctx, data, colors, selectedSegment);
}

async function pickColor() {
try {
    const eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();

    const selectedColor = result.sRGBHex;

    if (!colors.includes(selectedColor)) { // Check for duplicates
        if (colors.length >= 7) {
            colors.shift(); // Remove the oldest color if there are already 7
            data.shift(); // Remove the oldest data entry
        }

        colors.push(selectedColor);
        data.push(25); // Add a new data entry with a default value

        // Copy the selected color to clipboard
        navigator.clipboard.writeText(selectedColor).then(() => {
            console.log('Color copied to clipboard:', selectedColor);
        }).catch(err => {
            console.error('Failed to copy color:', err);
        });

        updatePieChart();
    } else {
        console.log('Color already exists:', selectedColor);
    }
} catch (err) {
    console.error('Failed to pick color:', err);
}
}

async function copySelectedColorToClipboard() {
try {
    const selectedColor = colors[selectedSegment];
    await navigator.clipboard.writeText(selectedColor);
    console.log('Selected color copied to clipboard:', selectedColor);
    
 selectedElement.style.backgroundColor = selectedColor
    // content.js

} catch (err) {
    console.error('Failed to copy selected color:', err);
}
}


document.addEventListener('keydown', (e) => {
if (e.key === 'd') {
    selectedSegment = (selectedSegment + 1) % data.length;
    updatePieChart();
    copySelectedColorToClipboard();



}
if (e.key === 'r') {
    updatePieChart();
}

if(e.key === 'f'){
    injectEditMode()
}

if(e.altKey && e.key === 's'){
    // document.getElementById('selectColorBtn').click()
    pickColor()
 

}
});

window.onload = updatePieChart;



function colorWheel(){
    canvas.style.display = 'flex'
    bg.style.display = 'flex'


}


function removeColorWheel(){

canvas.style.display = 'none'
    bg.style.display = 'none'
}


document.addEventListener('keydown', (event) => {
    
    if (event.altKey) {
        event.preventDefault()
        colorWheel(); 
    }

  
        
    
});



document.addEventListener('keyup', (event) => {
    if (!event.altKey) {
        
        
        removeColorWheel(); 
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
      document.addEventListener('keydown', handleKeyDown);
      addToggleButton();
      console.log('Edit mode enabled');
    }
  
    function disableEditMode() {
      document.body.style.cursor = '';
      document.body.removeEventListener('click', handleElementClick, true);
      document.removeEventListener('keydown', handleKeyDown);
      if (selectedElement) {
        removeEditUI(selectedElement);
      }
      selectedElement = null;
      removeToggleButton();
    //   hideSidemenu();

      console.log('Edit mode disabled');
    }



  
    function handleElementClick(event) {
      if (!editMode) return;

      // Ignore clicks on the sidemenu and its contents
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

    

  
    function addEditUI(element) {
      console.log('Adding edit UI to element:', element);
      element.classList.add('extension-selected-outline');
      element.classList.add('resizable')
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

//       const handle = document.createElement('div');
// handle.id = 'handle';
// handle.style.cssText = `
//   width: 10px;
//   height: 10px;
//   background-color: #000;
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   cursor: se-resize;
// `;


   
      
      element.appendChild(menuTrigger);
    //   element.appendChild(handle)

      menuTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // showSidemenu(element);

      });

      // makeDraggable(element);
        // makeResizableAndDraggable(element, handle);

      // Show sidemenu immediately when an element is selected
    //   setTimeout(() => showSidemenu(element), 0);
    }




  
    function removeEditUI(element) {
      element.classList.remove('extension-selected-outline');
      element.classList.remove('resizable');
      element.querySelectorAll('.extension-menu-trigger').forEach(el => el.remove());
    //   const handle = element.querySelector('#handle');
    //   if (handle) handle.remove();
      
      // Remove event listeners
      element.removeEventListener('mousedown', element.startDragging);
      if (element.resizeHandle) {
        element.resizeHandle.removeEventListener('mousedown', element.startResizing);
      }
    }

    
  
   


    // function makeResizableAndDraggable(element, handle) {
   
      

    //   let isDragging = false;
    //   let isResizing = false;
    //   let startX, startY, startWidth, startHeight, startLeft, startTop, startFontSize ;
    
    //   // Function to start dragging
    //   function startDragging(e) {
    //     if (isResizing) return;
    //     isDragging = true;
    //     startX = e.clientX;
    //     startY = e.clientY;
    //     startLeft = parseInt(window.getComputedStyle(element).left, 10) || 0;
    //     startTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    //     document.addEventListener('mousemove', onDragMove);
    //     document.addEventListener('mouseup', stopDragging);
    //   }
    
    //   // Function to handle dragging
    //   function onDragMove(e) {
    //     if (!isDragging) return;
    //     const deltaX = e.clientX - startX;
    //     const deltaY = e.clientY - startY;
    //     element.style.left = `${startLeft + deltaX}px`;
    //     element.style.top = `${startTop + deltaY}px`;
    //   }
    
    //   // Function to stop dragging
    //   function stopDragging() {
    //     isDragging = false;
    //     document.removeEventListener('mousemove', onDragMove);
    //     document.removeEventListener('mouseup', stopDragging);
    //   }
    
    //   // Function to start resizing
    //   function startResizing(e) {
    //     if (isDragging) return;
    //     e.preventDefault();
    //     isResizing = true;
    //     startX = e.clientX;
    //     startY = e.clientY;
    //     startWidth = parseInt(window.getComputedStyle(element).width, 10);
    //     startHeight = parseInt(window.getComputedStyle(element).height, 10);
        
    //   startFontSize =  parseInt(window.getComputedStyle(element).fontSize, 10);
    //     document.addEventListener('mousemove', onResizeMove);
    //     document.addEventListener('mouseup', stopResizing);

    //   }
    
    //   // Function to handle resizing
    //   function onResizeMove(e) {
    //     if (!isResizing) return;
    //     const deltaX = e.clientX - startX;
    //     const deltaY = e.clientY - startY;
        
    //     const newWidth = startWidth + deltaX;
    //     const newHeight = startHeight + deltaY;
        
    //     element.style.width = `${newWidth}px`;
    //     element.style.height = `${newHeight}px`;

       
        
    //   // const diff = deltaX + deltaY
    
    //  const newFontSize = startFontSize + deltaX


    //  element.style.fontSize = `${newFontSize}px`

   


        
    //     // const images = element.getElementsByTagName('img');
    //     // for (let img of images) {
    //     //   img.style.width = `${newWidth}px`;
    //     //   img.style.height = `${newHeight}px`;
    //     //   // img.style.objectFit = 'cover';
    //     // }


    //   }
    
    //   // Function to stop resizing
    //   function stopResizing() {
    //     isResizing = false;
    //     document.removeEventListener('mousemove', onResizeMove);
    //     document.removeEventListener('mouseup', stopResizing);
    //   }
    
    //   // Attach event listeners
    //   element.addEventListener('mousedown', startDragging);
    //   handle.addEventListener('mousedown', startResizing);

    //   element.startDragging = startDragging;
    //   element.startResizing = startResizing;
    // //   element.resizeHandle = handle;

    // }










  
    function handleKeyDown(event) {
      if (!selectedElement) return;

      if (event.altKey && event.key === 'b') {
        navigator.clipboard.readText().then(text => {
          const color = parseColor(text);
          if (color) {
            selectedElement.style.backgroundColor = color;
            updateCSSCode();
          } else {
            console.log('Invalid color format in clipboard');
          }
        });
      } else if (event.altKey && event.key === 'q') {
        selectedElement.style.color = getRandomColor();
        updateCSSCode();
      } 
      if (event.altKey && event.key === 'c') {
        navigator.clipboard.readText().then(text => {
          const color = parseColor(text);
          if (color) {
            selectedElement.style.color = color;
            updateCSSCode();
          } else {
            console.log('Invalid color format in clipboard');
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

      }else if (event.altKey && event.key === 'k') {
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
        // hideSidemenu();
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
  
    function addToggleButton() {
      const toggleButton = document.createElement('button');
      toggleButton.id = 'extension-toggle-button';
      toggleButton.textContent = 'Toggle Edit Mode';
      toggleButton.addEventListener('click', toggleEditMode);
      document.body.appendChild(toggleButton);
    }
  
    function removeToggleButton() {
      const toggleButton = document.getElementById('extension-toggle-button');
      if (toggleButton) toggleButton.remove();
    }
  
//     function showSidemenu(element) {
//       console.log('Showing sidemenu for element:', element);
//       hideSidemenu(); // Remove existing sidemenu if any

//       const sidemenu = document.createElement('div');
//       sidemenu.id = 'extension-sidemenu';
//       sidemenu.className = 'extension-ui'; 
//       sidemenu.classList.add('not-editable')// Add this class for identification
//       sidemenu.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         width: 250px;
//         background-color: white;
//          margin: 0;
//     padding: 0;
//     /* box-sizing: border-box; */
//     font-family: segoe ui;
//         border: 1px solid #ccc;
//         overflow:scroll;
//         padding: 10px;
//         z-index: 2147483647;
//         font-size:11px;
//         box-shadow: 0 0 10px rgba(0,0,0,0.1);`;

//         sidemenu.innerHTML = `<div className="not-editable">
//         <div id="style-tab" class="tab-content active">
//             <label>Background Color:
//               <input type="color" id="bgcolor-picker">
//             </label>
//             <label>Text Color:
//               <input  style="background-color: white;" type="color" id="color-picker">
//             </label>
//             <label>Gradient:
//               <input style="background-color: white;"  type="text" id="gradient-input" placeholder="linear-gradient(...)">
//             </label>
//             <label>Border:
//               <input style="background-color: white;"  type="text" id="border-input" placeholder="1px solid black">
//             </label>
//             <label>Border Radius:
//               <input  type="range" id="border-radius-slider" min="0" max="50" value="0">
//               <input style="background-color: white;"  type="text" id="border-radius-input" placeholder="10px or 50%">
//             </label>
//             <label>Box Shadow:
             
//               <input type="range" id="box-shadow-inputs" min="0" max="100" value="100">
//             </label>
//           </div>
          
//           <div id="layout-tab" class="tab-content">
//            <input style="display: none;"  type="file" id="fileInput" accept="image/*" />
           
           

    
         
    
    
//           </div>
          
//           <div class="code-section">
//             <button id="toggle-code">Show CSS Code</button>
//             <div id="code-container" style="display: none;">
//               <pre id="css-code"></pre>
//               <button id="copy-code">Copy CSS</button>
//             </div>
//           </div>
//     </div>`;
    
   
//       document.body.appendChild(sidemenu);
//       console.log('Sidemenu appended to body');

//       // Force a reflow to ensure the sidemenu is rendered
//       sidemenu.offsetHeight;

//       // Make sure the sidemenu is visible
//       sidemenu.style.display = 'block';

//       // Prevent sidemenu interactions from triggering element selection

//       sidemenu.addEventListener('mousedown', (e) => e.stopPropagation());
//       sidemenu.addEventListener('click', (e) => e.stopPropagation());

//       // Add event listeners to sidemenu inputs and buttons
//       const inputs = sidemenu.querySelectorAll('input, select, button');
//       inputs.forEach(input => {
//         input.addEventListener('mousedown', (e) => e.stopPropagation());
//         input.addEventListener('click', (e) => e.stopPropagation());
//       });

//       // Tab functionality
//       const tabButtons = sidemenu.querySelectorAll('.tab-buttons button');
//       const tabContents = sidemenu.querySelectorAll('.tab-content');

//       tabButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           tabButtons.forEach(btn => btn.classList.remove('active'));
//           tabContents.forEach(content => content.classList.remove('active'));
//           button.classList.add('active');
//           sidemenu.querySelector(`#${button.dataset.tab}-tab`).classList.add('active');
//         });
//       });

//       // Style tab event listeners
//       document.getElementById('bgcolor-picker').addEventListener('input', (e) => {
//         element.style.backgroundColor = e.target.value;
//       });

//       document.getElementById('color-picker').addEventListener('input', (e) => {
//         element.style.color = e.target.value;
//       });

//       document.getElementById('gradient-input').addEventListener('input', (e) => {
//         element.style.backgroundImage = e.target.value;
//       });

//       document.getElementById('border-input').addEventListener('input', (e) => {
//         element.style.border = e.target.value;
//       });

//       document.getElementById('box-shadow-inputs').addEventListener('input', (e) => {
//         // element.style.boxShadow = e.target.value;

//         element.style.filter = `drop-shadow(30px 10px ${e.target.value}px #242424)`
      
//       });

//       document.getElementById('fileInput').addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 element.src = e.target.result;
//             };
//             reader.readAsDataURL(file);
//         }
//     });
     


//       let currentKey = null;

//       // Handle keydown event
//       document.addEventListener('keydown', (e) => {
//           if (['p', 'h', 's'].includes(e.key)) {
//               currentKey = e.key;
//           }
//       });

//       // Handle keyup event
//       document.addEventListener('keyup', (e) => {
//           if (['p', 'h', 's'].includes(e.key)) {
//               currentKey = null;
//           }
//       });

//       // Handle wheel event
//       element.addEventListener('wheel', (e) => {
//           if (!currentKey) return; // Do nothing if no key is pressed

//           const delta = e.deltaY || e.deltaX;
//           e.preventDefault(); // Prevent the default scrolling behavior

//           // Get current values
//           const computedStyle = window.getComputedStyle(element);
//           const currentPadding = parseInt(computedStyle.padding, 10);
//           const currentHeight = parseInt(computedStyle.height, 10);
//           const currentBorderRadius = parseInt(computedStyle.borderRadius, 10);

//           switch (currentKey) {
//               case 'p':
//                   // Adjust padding
//                   element.style.padding = `${currentPadding - delta}px`;
//                   console.log("zoom in padding: ", currentPadding + delta, " delta: ", delta);
//                   break;
//               case 'h':
//                   // Adjust height
//                   element.style.height = `${currentHeight - delta}px`;
//                   console.log("zoom in height: ", currentHeight + delta, " delta: ", delta);
//                   break;
//               case 's':
//                   // Adjust border-radius
//                   element.style.borderRadius = `${Math.max(currentBorderRadius - delta, 0)}px`;
//                   console.log("zoom in border-radius: ", currentBorderRadius + delta, " delta: ", delta);
//                   break;
//           }
//       });



//       // Toggle code section
//       const toggleCodeBtn = document.getElementById('toggle-code');
//       const codeContainer = document.getElementById('code-container');
//       const cssCode = document.getElementById('css-code');

//       toggleCodeBtn.addEventListener('click', () => {


//         // if (codeContainer.style.display === 'none') {
//         //   codeContainer.style.display = 'block';
//         //   toggleCodeBtn.textContent = 'Hide CSS Code';
//         //   updateCSSCode();
//         // } else {
//         //   codeContainer.style.display = 'none';
//         //   toggleCodeBtn.textContent = 'Show CSS Code';
//         // }


//         function getExplicitStyles(element) {
//   const styles = {};
//   const computedStyles = window.getComputedStyle(element);
  
//   for (let i = 0; i < element.style.length; i++) {
//     const property = element.style[i];
//     styles[property] = computedStyles.getPropertyValue(property);
//   }
  
//   return styles;
// }

// const explicitStyles = getExplicitStyles(element);
// console.log("EX Style : ",explicitStyles);




//       });

//       // Copy CSS code
//       const copyCodeBtn = document.getElementById('copy-code');
//       copyCodeBtn.addEventListener('click', () => {
//         navigator.clipboard.writeText(cssCode.textContent).then(() => {
//           alert('CSS code copied to clipboard!');
//         });
//       });

//       // Function to update CSS code
//       function updateCSSCode() {
//         const styles = getComputedStyle(element);
//         const explicitStyles = Array.from(element.style).reduce((acc, prop) => {
//           acc[prop] = styles.getPropertyValue(prop);
//           return acc;
//         }, {});

//         cssCode.textContent = Object.entries(explicitStyles)
//           .map(([prop, value]) => `${prop}: ${value};`)
//           .join('\n');
//       }

//       // Update CSS code when any style changes
//       sidemenu.addEventListener('input', updateCSSCode);
//       sidemenu.addEventListener('change', updateCSSCode);

//       // New event listeners for sliders and inputs
//       ['width', 'height', 'padding', 'border-radius'].forEach(prop => {
//         const slider = document.getElementById(`${prop}-slider`);
//         const input = document.getElementById(`${prop}-input`);

//         slider.addEventListener('input', (e) => {
//           const value = e.target.value + (prop === 'padding' || prop === 'border-radius' ? 'px' : '%');
//           input.value = value;
//           element.style[prop] = value;
//           updateCSSCode();
//         });

//         input.addEventListener('input', (e) => {
//           element.style[prop] = e.target.value;
//           updateCSSCode();
//           // Update slider if a percentage or pixel value is entered
//           const numValue = parseInt(e.target.value);
//           if (!isNaN(numValue) && numValue >= 0 && numValue <= slider.max) {
//             slider.value = numValue;
//           }
//         });
//       });

//       console.log('Sidemenu setup complete');
//     }
  
    // function hideSidemenu() {
    //   const sidemenu = document.getElementById('extension-sidemenu');
    //   if (sidemenu) {
    //     console.log('Removing existing sidemenu');
    //     sidemenu.remove();
    //   }
    // }
  
    toggleEditMode(); // Enable edit mode immediately when injected
  }
  















