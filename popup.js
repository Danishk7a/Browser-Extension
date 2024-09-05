
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
  document.getElementById('changeTheme').click()
  }
});



document.getElementById('changeTheme').addEventListener('click', () => {
 
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: changeTheme
      });
  });


});



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


// ==========================================Theme Colors =============================================================================


























// ==================================================Color Picker ===============================================================


function activateColorPicker() {
    if (!window.EyeDropper) {
        console.error('EyeDropper API is not supported in this browser.');
        return;
    }

    const eyeDropper = new EyeDropper();

    eyeDropper.open().then(result => {
        const selectedColor = result.sRGBHex;
        console.log('Selected color:', selectedColor);
        
        updateColorUI(selectedColor);
        copyToClipboard(selectedColor);
        
    }).catch(error => {
        console.error('EyeDropper failed:', error);
    });
}

function updateColorUI(color) {
    const colorDisplay = document.getElementById('Display');
    if (colorDisplay) {
        colorDisplay.style.backgroundColor = color;
        colorDisplay.textContent = color;
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Color code copied to clipboard:', text);
        // Optionally, show a temporary message to the user
        showCopiedMessage();
    }).catch(err => {
        console.error('Failed to copy color code: ', err);
    });
}

function showCopiedMessage() {
    const message = document.createElement('div');
    message.textContent = 'Color copied!';
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.backgroundColor = 'rgba(0,0,0,0.7)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.removeChild(message);
    }, 2000);
}

// Event listener for the color picker button
document.getElementById('colorPickerButton').addEventListener('click', activateColorPicker);

// Event listener for the color display div
document.getElementById('Display').addEventListener('click', function() {
    const colorCode = this.textContent;
    copyToClipboard(colorCode);
});




// ==================================================Color Picker ===============================================================





// ===================================================Tech Detector =============================================






// -----------------------------------------------------open builder--------------------------------
document.getElementById('openbuilder').addEventListener('click', () => {
  chrome.tabs.create({ url: 'http://localhost:5173' });
});
// -----------------------------------------------------open builder=-----------------------------









// ---------------------------------------------------------------Gradient Generator -----------------------------------------------

const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const angleInput = document.getElementById('angle');
const gradientBox = document.getElementById('Extension_Logo');


function updateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const angle = angleInput.value;

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  gradientBox.style.background = gradient;
 
}


color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
angleInput.addEventListener('input', updateGradient);






// ---------------------------------------------------------------Gradient Generator -----------------------------------------------

















// ---------------------------------------------------------disable default -----------------------------------------------------

// popup.js

function disableDefaults() {
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    img.addEventListener('mousedown', function(e) {
      e.preventDefault();
    });
    
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
  }
  console.log('Image dragging disabled');
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: '(' + disableDefaults.toString() + ')();'}
    );
  });
});



// ---------------------------------------------------------disable default -----------------------------------------------------























document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('home-nav').click();

})


// Click event for the "color-nav" element
document.getElementById('color-nav').addEventListener('click', () => {
  const outlet = document.getElementById('outlet');
  outlet.innerHTML = '';
  const colorsPage = document.getElementById('colorsPage').style.display = 'flex';

   document.getElementById('viewPage').style.display = 'none'
   document.getElementById('Responsive').style.display = 'none';


  //  document.getElementById('Extension_Logo').style = '';
   const displayTheme = document.getElementById('displayimg')
   document.getElementById('Extension_Logo').style.background = 'linear-gradient(45deg, red, blue)' ;
   displayTheme.style.opacity = '0%'



 




   const navLink2 = document.getElementById('color-nav');
   navLink.style.textDecoration = 'underline #0AB76E'
   navLink.style.textUnderlineOffset = '8px'


const navLink = document.getElementById('home-nav');
navLink.style.textDecoration = 'none'
navLink.style.textUnderlineOffset = 'none'


const navLink3 = document.getElementById('view-nav');
navLink.style.textDecoration = 'none'
navLink.style.textUnderlineOffset = 'none'

  

  outlet.appendChild(colorsPage);
});




// Click event for the "home-nav" element
document.getElementById('home-nav').addEventListener('click', () => {
  const outlet = document.getElementById('outlet');
  outlet.innerHTML = ''; // Clear the current content
  const homePage = document.getElementById('Responsive').style.display = 'flex';
  
  
  // Hide other pages
  document.getElementById('colorsPage').style.display = 'none';
  document.getElementById('viewPage').style.display = 'none'


     const displayTheme = document.getElementById('displayimg')
   displayTheme.style.opacity = '100%'

  const navLink = document.getElementById('home-nav');
  navLink.style.textDecoration = 'underline #0AB76E'
  navLink.style.textUnderlineOffset = '8px'
  
  const navLink2 = document.getElementById('color-nav');
  navLink.style.textDecoration = 'none'
  navLink.style.textUnderlineOffset = 'none'
  
  const navLink3 = document.getElementById('view-nav');
  navLink.style.textDecoration = 'none'
  navLink.style.textUnderlineOffset = 'none'
  
  

  outlet.appendChild(homePage);






});




// Click event for the "view-nav" element
document.getElementById('view-nav').addEventListener('click', () => {
  const outlet = document.getElementById('outlet');
  outlet.innerHTML = ''; 
  const viewPage = document.getElementById('viewPage').style.display = 'flex';
  
  // Hide other pages
  document.getElementById('colorsPage').style.display = 'none';
  document.getElementById('Responsive').style.display = 'none';
  

  const navLink = document.getElementById('home-nav');
  navLink.style.textDecoration = 'none'
  navLink.style.textUnderlineOffset = 'none'
  
  const navLink2 = document.getElementById('color-nav');
  navLink.style.textDecoration = 'none'
  navLink.style.textUnderlineOffset = 'none'
  
  const navLink3 = document.getElementById('view-nav');
  navLink.style.textDecoration = 'underline #0AB76E'
  navLink.style.textUnderlineOffset = '8px'
  
  // Show the viewPage

  outlet.appendChild(viewPage);
});







const box =document.getElementById('Extension_Logo')
box.addEventListener('click', () => {
  // Get the background style of the clicked element
  const background = window.getComputedStyle(box).backgroundImage;
  
  // Copy the background style to clipboard
  navigator.clipboard.writeText(background)
      .then(() => {
          console.log('Background copied to clipboard:', background);
          // Optionally, provide user feedback
          // alert('Background copied to clipboard: ' + background);
      })
      .catch(err => {
          console.error('Failed to copy background:', err);
      });
});














// -------------------------------------------------------------Mobile Responsive -------------------------------------------

document.getElementById('MobileView').addEventListener('click', ()=>{
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: MobileView
    });
});



})



function MobileView() {
  // Check if the simulator already exists
  if (document.getElementById('mobile-view-simulator')) {
      return;
  }

  // Create the simulator container
  const simulator = document.createElement('div');
  simulator.id = 'mobile-view-simulator';
  simulator.style.position = 'fixed';

  simulator.style.zIndex = '9999';
  simulator.style.backgroundColor = 'transparent';

  // simulator.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  // simulator.style.borderRadius = '40px'


  simulator.style.top = '0';
  simulator.style.left = '0';
  simulator.style.width = '100vw';
  simulator.style.height = '100vh';
  simulator.style.display = 'flex';
  simulator.style.justifyContent = 'center';
  simulator.style.alignItems = 'center';
  simulator.style.padding = '20px';
  


  // Create the phone frame
  const phoneFrame = document.createElement('div');
  phoneFrame.style.width = '375px'; // iPhone X width
  phoneFrame.style.height = '90vh';
  phoneFrame.style.backgroundColor = '#000';
  phoneFrame.style.borderRadius = '40px';
  phoneFrame.style.padding = '20px';
  phoneFrame.style.boxSizing = 'border-box';

  // Create the screen area
  const screen = document.createElement('div');
  screen.style.width = '100%';
  screen.style.height = '100%';
  screen.style.backgroundColor = '#fff';
  screen.style.borderRadius = '30px';
  screen.style.overflow = 'hidden';

  // Create the iframe to load the current page
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.src = window.location.href;

  // Assemble the components
  screen.appendChild(iframe);
  phoneFrame.appendChild(screen);
  simulator.appendChild(phoneFrame);

  // Create close button


  // Add the simulator to the page
  document.body.innerHTML = ''
  document.body.appendChild(simulator);
}


// -------------------------------------------------------------Mobile Responsive -------------------------------------------
