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
        // item.style.border = '1px solid transparent'; 
        item.style.scale = 1; 
        item.style.marginBottom = '2px'; 
        // item.innerText =; 

    });

    // Add selection to the current item
    const selectedItem = items[currentIndex];
    if (selectedItem) {
        selectedItem.style.outline = '2px solid black'; 
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
    }else if(event.altKey && event.key === 's' && event.key ===''){


    }


        if( event.altKey && event.key === 'z'){
            pick();
        }
        if(event.altKey && event.key === 'x'){
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
        border: 2px solid #0066ff;
 
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
      // selectedElement = null;
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
     
      // console.log(selectedElement)

      chrome.runtime.sendMessage({data: selectedElement});
      const styles = sendStyle(selectedElement);
      chrome.runtime.sendMessage({style: styles});


selectedElement.addEventListener('dragover', (event) => {
  event.preventDefault(); // Necessary to allow dropping
});

selectedElement.addEventListener('drop', (event) => {
  event.preventDefault();
  const htmlData = event.dataTransfer.getData('text/html');
  if (htmlData) {
    // Append the HTML content to the drop zone
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlData;
    selectedElement.appendChild(tempDiv.firstChild);
  }

});


     
      addEditUI(selectedElement);

      
       
    }


    function hoverEnter(event) {
      if (event.target.closest('#extension-sidemenu')) {
        return;
      }
      event.target.style.outline = '2px solid black'
    
      event.target.addEventListener('mouseenter', ()=>{
        event.target.parentNode.style.outline = 'none'
       })

    }

    function hoverLeave(event) {
      if (event.target.closest('#extension-sidemenu')) {
        return;
      }
       event.target.style.outline = 'none'
             event.target.parentNode.style.outline = '2px solid black'
 }


    function addEditUI(element) {
     
      element.classList.add('extension-selected-outline');
      


      // if (element.textContent.trim() !== '') {
      //   element.addEventListener('dblclick', () => {
      //     element.contentEditable = 'true'; 
      //     element.focus();
      //   });
      // }
    

    }

    function removeEditUI(element) {
      element.classList.remove('extension-selected-outline');
  
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
  






// ------------------------------------------------------------chANGE theme ---------------------------------------------

async function changeTheme() {
  
  
  let indexx = Math.floor(Math.random() * 100);

document.body.style.backgroundColor = '#ffffff'

  let colorsh = [["#47F58D","#4BF7C4","#4FF7F8","#53C6F9","#5797FA"],["#EB4B6E","#EC5B4E","#EE8D52","#EFBE56","#F0EE59"],["#485608","#335C08","#1B6108","#086610","#076B2E"],["#143046","#15224A","#18154F","#2B1653","#411658"],["#B67BED","#DA7FEF","#F082E4","#F186C5","#F28AA8"],["#BB1F8F","#C11F63","#C61E32","#CC3D1E","#D1741D"],["#2A5DD4","#2C2DD7","#622FD9","#9733DB","#CC36DD"],["#AE2F40","#B3462F","#B8702F","#BE9D2F","#B8C32F"],["#6AD8BB","#6DD6DA","#70B8DC","#749ADE","#777DE0"],["#4A7FD3","#4D59D5","#6D50D7","#9854D9","#C257DB"],["#378382","#377087","#385A8C","#384290","#4A3995"],["#1369B9","#1238BE","#1F11C4","#5711CA","#9210D0"],["#29143F","#3A1543","#481543","#4C1636","#501728"],["#7038A9","#9638AE","#B338A8","#B93886","#BE3861"],["#42EF8A","#46F1C0","#49EFF2","#4DBFF3","#5190F5"],["#B1E1A6","#A9E3B0","#ADE5C4","#B0E6D7","#B3E7E8"],["#17AD42","#17B272","#17B8A5","#169EBD","#166FC3"],["#4ABD26","#26C32F","#25C860","#25CE94","#24D3CC"],["#797B19","#5F8019","#418519","#218B19","#199034"],["#311F4D","#422051","#552155","#5A2249","#5E223B"],["#B99105","#B2BF04","#7DC503","#44CB02","#07D201"],["#702026","#753321","#7A4F21","#7E6E21","#778321"],["#AD4A84","#B14A68","#B64C4B","#B86F4D","#BB9150"],["#15D647","#15DC84","#14E2C5","#13C6E8","#1389ED"],["#5F3EA5","#813EAA","#A63EAF","#B33E99","#B93E79"],["#AF3948","#B44E39","#B97539","#BFA039","#C1A315"],["#1BE279","#1DE6B7","#20D9E7","#24A0E9","#2768EB"],["#59464F","#5C474B","#604B48","#64554A","#68604B"],["#052586","#0B058C","#360491","#630397","#95039D"],["#E90F06","#EF5505","#F69F04","#FCED03","#C2FE06"],["#74785E","#6F7C5F","#688060","#618463","#628870"],["#8E43E8","#C246EA","#EC4AE2","#ED4DB4","#EE5187"],["#C53871","#C93A48","#CB593D","#CD863F","#CFB342"],["#637EBA","#6566BD","#8268C0","#9E6AC2","#BB6DC5"],["#B958AC","#BC5A91","#BF5D76","#C1635F","#C48362"],["#0C4344","#0C3649","#0C264E","#0D1353","#1D0D58"],["#0CCF06","#05D53E","#04DB7F","#03E1C5","#02C0E8"],["#6F518F","#855293","#985392","#9C5381","#A1546D"],["#F60E09","#F7580D","#F9A111","#FAE815","#C9FB18"],["#CE5C14","#D49713","#DAD713","#A5E012","#69E611"],["#D51214","#DA4B11","#E08B10","#E6CF0F","#C2EC0E"],["#D02926","#D55E26","#DA9526","#DCCD2A","#B8DE2D"],["#75CBA6","#78CEC2","#7BC2D0","#7DABD2","#8094D4"],["#9461F1","#C165F2","#ED69F3","#F56DD2","#F671AC"],["#62EB95","#66ECC0","#6AEEEA","#6DCCEF","#71A8F0"],["#D00672","#D60536","#DC1304","#E25503","#E99C02"],["#1C6061","#1C4E66","#1D3A6B","#1D236F","#311E74"],["#59A54B","#4CAA59","#4CAF77","#4CB399","#4FB2B6"],["#D7795E","#D9A061","#DBC664","#CFDD68","#AEDF6B"],["#9CD02B","#6CD52A","#3CD72D","#31D955","#34DB8A"],["#E9C024","#D8EA28","#A0EC2B","#69EE2F","#34EF33"],["#92A28F","#91A694","#93A99D","#95ACA6","#96AEAF"],["#0BBF74","#0AC5AF","#09A8CB","#0970D1","#0835D7"],["#11C709","#09CD3C","#08D37A","#07D9BC","#06BCDF"],["#3F2484","#5F2489","#82248E","#92247E","#98245F"],["#D6E64F","#ACE753","#82E956","#5AEB5A","#5EEC89"],["#123CEC","#2A14EF","#6F17F0","#B21BF2","#F31EF2"],["#D4CECC","#D7D3CE","#DAD9D0","#DBDDD3","#DBDFD5"],["#C58B09","#CBCA09","#96D108","#5BD707","#1DDD06"],["#42B8A2","#42AFBD","#458DC0","#476BC2","#4C4AC5"],["#DA8612","#E0C711","#C0E610","#82EC0F","#41F110"],["#ACF651","#7EF755","#59F860","#5DF993","#61FAC4"],["#46EDE0","#49CAEF","#4D9BF0","#516EF2","#6855F3"],["#331AEB","#741DEC","#B421EE","#EF24EB","#F128B0"],["#64E90D","#22EF0C","#0DF43C","#10F584","#14F7CA"],["#70052F","#75040F","#7B1C04","#804303","#866D03"],["#3A9F9A","#3B89A4","#3B6CA9","#3B4CAD","#4E3BB2"],["#DA255F","#DC272C","#DE5C2A","#E0942E","#E2CC31"],["#9E51B2","#B553AC","#B85691","#BA5876","#BD5B5B"],["#F58B58","#F6BC5B","#F7EC5F","#D6F863","#ACF968"],["#978546","#969C46","#7FA147","#66A547","#4AAA48"],["#FCA5BA","#FCAEA9","#FDCAAE","#FDE3B2","#FEFBB7"],["#D3E7BF","#CAE9C3","#C6EBCA","#C9ECD8","#CDEEE5"],["#ADC151","#8EC354","#6FC657","#59C862","#5CCB86"],["#9FB2C8","#A1A8CA","#A9A4CD","#B8A6CF","#C7A9D2"],["#174F74","#173579","#17177E","#371784","#5B1789"],["#864A2C","#8B682D","#90882D","#7D942D","#60992D"],["#F319ED","#F51DAE","#F62070","#F72433","#F95728"],["#E29E53","#E4CA57","#D4E55A","#ADE75E","#87E861"],["#CBC407","#9CD106","#61D705","#22DD04","#03E428"],["#4B7DA4","#4C64A9","#504CAE","#6F4CB2","#904EB5"],["#4DADC9","#508ACC","#5368CE","#6555D0","#8D58D2"],["#CA9CD0","#D39FC9","#D5A2BC","#D7A4AF","#D9ABA7"],["#5D11AA","#8F11B0","#B510A6","#BB1077","#C10F45"],["#4FDADF","#52B2E0","#558AE2","#5963E4","#7C5CE6"],["#85CD8D","#88D0A5","#8BD2BD","#8DD3D4","#90C0D6"],["#13CD69","#13D3A5","#12CCD9","#1194DF","#1058E5"],["#489405","#1E9904","#039F17","#03A548","#02AB7D"],["#88DCC1","#8BDEDD","#8EC9E0","#92B3E2","#959FE4"],["#0E65DC","#0D27E2","#320CE8","#760BEE","#BF0AF4"],["#9AE57A","#7EE77E","#81E8A1","#85EAC2","#88EBE2"],["#CB7D7F","#CE9580","#D0AF83","#D2C885","#C7D488"],["#AB174E","#B01621","#B63A16","#BB6D15","#C1A315"],["#3011C8","#6911CE","#A610D4","#D90FCC","#DF0E92"],["#BD96A5","#C0989B","#C3A49B","#C5B29D","#C8C1A0"],["#10134B","#211150","#371155","#4F125A","#5E1252"],["#0EEB7F","#0DF1C5","#10DAF3","#1499F5","#1858F6"],["#4E3CDB","#813FDD","#B242DF","#E146DF","#E349B2"],["#4E0459","#5E044F","#640336","#69031B","#6F0A03"],["#6D686D","#71696F","#756B6F","#786C6D","#7C706D"]]
  const colorPalette = colorsh[indexx]
  


  let colorMap = {};  // Map to store original color -> new color mapping
  let elements = document.querySelectorAll('*');
  let colorIndex = 0; // To keep track of which color from the palette to use

  // Function to generate a random gradient using the color palette
  function getRandomGradient() {
      let color1 = colorPalette[colorIndex % colorPalette.length];
      let color2 = colorPalette[(colorIndex + 1) % colorPalette.length];
      let angle = Math.floor(Math.random() * 360); // Random angle for the gradient
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }

  elements.forEach(el => {
    if (el.classList.contains('not-editable')) {
      return;
  }else{
          
      let bgColor = getComputedStyle(el).backgroundColor;
      let bgImage = getComputedStyle(el).backgroundImage;

      let color = getComputedStyle(el).color;
     
      // let color = getComputedStyle(el).color;

      // const style = ['italic', 'normal', 'bold']
      // const randomIndex = Math.floor(Math.random() * style.length);

      // // Select the style at the random index
      // const randomStyle = style[randomIndex];

      // el.style.fontStyle = randomStyle

      // el.style.fontSize = `${parseInt(getComputedStyle(el).fontSize.replace('px', '') )+  randomIndex}px`


      // Create a link element for Google Fonts



     

      // Function to check if the color is white
      function isWhite(color) {
          // RGB color values for white are 255, 255, 255
          return color === 'rgb(255, 255, 255)';
      }


      if (isWhite(color)) {
          el.style.color = 'black';
      } else {
          el.style.color = 'white';
      }




      // Check if the element has a gradient or a solid color
      if (bgImage && (bgImage.startsWith('linear-gradient') || bgImage.startsWith('radial-gradient'))) {
          // Generate a new gradient from the color palette and apply it
          el.style.backgroundImage = getRandomGradient();
      } else if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          // Check if the background color is explicitly set
          if (colorMap[bgColor]) {
              el.style.backgroundColor = colorMap[bgColor];
          } else {
              // Use the next color from the color palette
              let newColor = colorPalette[colorIndex % colorPalette.length];
              colorMap[bgColor] = newColor;
              el.style.backgroundColor = newColor;
              colorIndex++; // Move to the next color in the palette
          }
      }
  }

  });
}







function sendStyle(element) {
  // Check if the selected element is valid
  if (!element) {
      console.error('No element provided');
      return null;
  }

    const styles = {};

    // Get inline styles
    const inlineStyles = element.style;
    for (let i = 0; i < inlineStyles.length; i++) {
        const property = inlineStyles[i];
        styles[property] = inlineStyles.getPropertyValue(property);
    }

    // Get styles from <style> tags and external stylesheets
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        try {
            const rules = styleSheets[i].cssRules;
            if (rules) {
                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
                    // Check if the rule applies to the element
                    if (rule.selectorText && element.matches(rule.selectorText)) {
                        const style = rule.style;
                        for (let k = 0; k < style.length; k++) {
                            const property = style[k];
                            styles[property] = style.getPropertyValue(property);
                        }
                    }
                }
            }
        } catch (e) {
            // Some stylesheets may be cross-origin and cannot be accessed
            console.warn('Cannot access stylesheet:', e);
        }
    }

    return styles;




}


// const element = document.querySelector('#myElement'); // Replace with your element selector
// const explicitStyles = getAllExplicitStyles(element);
// console.log(explicitStyles);
 
     







chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "changeStyle") {
    // selectedElement.style.minHeight = '0'
    // selectedElement.style.maxHeight = '0'
    selectedElement.style[message.style.property] = message.style.value;
    const styles = sendStyle(selectedElement);
    chrome.runtime.sendMessage({style: styles});

  }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "openX") {
    console.log("open X")

    injectEditMode()
    
  }
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "changeTheme") {

    console.log("Changing Theme")
 
    changeTheme()
    
  }
});







selectedElement2 = selectedElement;
let isDragging = false;
let dragEnabled = true;
let startX, startY;
let initialBackgroundPositionX, initialBackgroundPositionY;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "uploadIMg" ) {
    console.log("Run IS", selectedElement)
   
    selectedElement.style.background = 'center / cover';
    selectedElement.style.backgroundImage = `url('https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg')`;
    setupEventListeners();


    

  }
});

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file && selectedElement) {
    const reader = new FileReader();
    reader.onload = function(e) {
      selectedElement.style.backgroundImage = `url('${e.target.result}')`;
      selectedElement.style.backgroundPosition = 'center';
    };
    reader.onerror = function(e) {
      console.error('Error reading file:', e);
    };
    reader.readAsDataURL(file);
  }
}

function startDrag(event) {
  if (!dragEnabled || !selectedElement) return;
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  const computedStyle = window.getComputedStyle(selectedElement);
  const bgPos = computedStyle.backgroundPosition.split(' ');
  initialBackgroundPositionX = parseFloat(bgPos[0]) || 0;
  initialBackgroundPositionY = parseFloat(bgPos[1]) || 0;
}

function drag(event) {
  if (!isDragging || !selectedElement) return;
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  selectedElement.style.backgroundPosition = `${initialBackgroundPositionX + dx}px ${initialBackgroundPositionY + dy}px`;
}

function stopDrag() {
  isDragging = false;
}

function toggleDrag() { 
  dragEnabled = !dragEnabled;
  const button = document.getElementById('toggleDrag');
  if (button) {
    button.textContent = dragEnabled ? 'Disable Drag' : 'Enable Drag';
    button.classList.toggle('disabled', !dragEnabled);
  }
}

function setupEventListeners() {
  
  // const input = document.createElement('input');
  // input.type = 'file';
  // input.id = 'imageInput';
  // input.accept = 'image/*';

  // document.body.appendChild(input)



  const imageInput = document.getElementById('imageInput');
  const toggleDragButton = document.getElementById('toggleDrag');

  if (imageInput) {
    imageInput.addEventListener('change', handleImageUpload);
  }

  if (selectedElement) {
    selectedElement.addEventListener('mousedown', startDrag);
  }

  if (toggleDragButton) {
    toggleDragButton.addEventListener('click', toggleDrag);
  }

  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', stopDrag);

      window.toggleEditMode();

}

// Call this function to clean up event listeners when necessary
function removeEventListeners() {
  const imageInput = document.getElementById('imageInput');
  const toggleDragButton = document.getElementById('toggleDrag');

  if (imageInput) {
    imageInput.removeEventListener('change', handleImageUpload);
  }

  if (selectedElement) {
    selectedElement.removeEventListener('mousedown', startDrag);
  }

  if (toggleDragButton) {
    toggleDragButton.removeEventListener('click', toggleDrag);
  }

  window.removeEventListener('mousemove', drag);
  window.removeEventListener('mouseup', stopDrag);
}



// document.addEventListener('DOMContentLoaded', () => {
//   const editableArea = selectedElement

//   // Handle Ctrl + A to select all text
//   editableArea.addEventListener('keydown', (event) => {
//       if (event.ctrlKey && event.key === 'a') {
//           event.preventDefault();
//           editableArea.select();
//       }
//   });

//   // Handle double-click to select all text
//   editableArea.addEventListener('dblclick', () => {
//       editableArea.select();
//   });
// });
