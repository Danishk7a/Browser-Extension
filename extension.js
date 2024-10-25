const fontawesome = document.createElement('link');
    let colorsh = [['red','blue','green','pink','yellow'],["#47F58D","#4BF7C4","#4FF7F8","#53C6F9","#5797FA"],["#EB4B6E","#EC5B4E","#EE8D52","#EFBE56","#F0EE59"],["#485608","#335C08","#1B6108","#086610","#076B2E"],["#143046","#15224A","#18154F","#2B1653","#411658"],["#B67BED","#DA7FEF","#F082E4","#F186C5","#F28AA8"],["#BB1F8F","#C11F63","#C61E32","#CC3D1E","#D1741D"],["#2A5DD4","#2C2DD7","#622FD9","#9733DB","#CC36DD"],["#AE2F40","#B3462F","#B8702F","#BE9D2F","#B8C32F"],["#6AD8BB","#6DD6DA","#70B8DC","#749ADE","#777DE0"],["#4A7FD3","#4D59D5","#6D50D7","#9854D9","#C257DB"],["#378382","#377087","#385A8C","#384290","#4A3995"],["#1369B9","#1238BE","#1F11C4","#5711CA","#9210D0"],["#29143F","#3A1543","#481543","#4C1636","#501728"],["#7038A9","#9638AE","#B338A8","#B93886","#BE3861"],["#42EF8A","#46F1C0","#49EFF2","#4DBFF3","#5190F5"],["#B1E1A6","#A9E3B0","#ADE5C4","#B0E6D7","#B3E7E8"],["#17AD42","#17B272","#17B8A5","#169EBD","#166FC3"],["#4ABD26","#26C32F","#25C860","#25CE94","#24D3CC"],["#797B19","#5F8019","#418519","#218B19","#199034"],["#311F4D","#422051","#552155","#5A2249","#5E223B"],["#B99105","#B2BF04","#7DC503","#44CB02","#07D201"],["#702026","#753321","#7A4F21","#7E6E21","#778321"],["#AD4A84","#B14A68","#B64C4B","#B86F4D","#BB9150"],["#15D647","#15DC84","#14E2C5","#13C6E8","#1389ED"],["#5F3EA5","#813EAA","#A63EAF","#B33E99","#B93E79"],["#AF3948","#B44E39","#B97539","#BFA039","#C1A315"],["#1BE279","#1DE6B7","#20D9E7","#24A0E9","#2768EB"],["#59464F","#5C474B","#604B48","#64554A","#68604B"],["#052586","#0B058C","#360491","#630397","#95039D"],["#E90F06","#EF5505","#F69F04","#FCED03","#C2FE06"],["#74785E","#6F7C5F","#688060","#618463","#628870"],["#8E43E8","#C246EA","#EC4AE2","#ED4DB4","#EE5187"],["#C53871","#C93A48","#CB593D","#CD863F","#CFB342"],["#637EBA","#6566BD","#8268C0","#9E6AC2","#BB6DC5"],["#B958AC","#BC5A91","#BF5D76","#C1635F","#C48362"],["#0C4344","#0C3649","#0C264E","#0D1353","#1D0D58"],["#0CCF06","#05D53E","#04DB7F","#03E1C5","#02C0E8"],["#6F518F","#855293","#985392","#9C5381","#A1546D"],["#F60E09","#F7580D","#F9A111","#FAE815","#C9FB18"],["#CE5C14","#D49713","#DAD713","#A5E012","#69E611"],["#D51214","#DA4B11","#E08B10","#E6CF0F","#C2EC0E"],["#D02926","#D55E26","#DA9526","#DCCD2A","#B8DE2D"],["#75CBA6","#78CEC2","#7BC2D0","#7DABD2","#8094D4"],["#9461F1","#C165F2","#ED69F3","#F56DD2","#F671AC"],["#62EB95","#66ECC0","#6AEEEA","#6DCCEF","#71A8F0"],["#D00672","#D60536","#DC1304","#E25503","#E99C02"],["#1C6061","#1C4E66","#1D3A6B","#1D236F","#311E74"],["#59A54B","#4CAA59","#4CAF77","#4CB399","#4FB2B6"],["#D7795E","#D9A061","#DBC664","#CFDD68","#AEDF6B"],["#9CD02B","#6CD52A","#3CD72D","#31D955","#34DB8A"],["#E9C024","#D8EA28","#A0EC2B","#69EE2F","#34EF33"],["#92A28F","#91A694","#93A99D","#95ACA6","#96AEAF"],["#0BBF74","#0AC5AF","#09A8CB","#0970D1","#0835D7"],["#11C709","#09CD3C","#08D37A","#07D9BC","#06BCDF"],["#3F2484","#5F2489","#82248E","#92247E","#98245F"],["#D6E64F","#ACE753","#82E956","#5AEB5A","#5EEC89"],["#123CEC","#2A14EF","#6F17F0","#B21BF2","#F31EF2"],["#D4CECC","#D7D3CE","#DAD9D0","#DBDDD3","#DBDFD5"],["#C58B09","#CBCA09","#96D108","#5BD707","#1DDD06"],["#42B8A2","#42AFBD","#458DC0","#476BC2","#4C4AC5"],["#DA8612","#E0C711","#C0E610","#82EC0F","#41F110"],["#ACF651","#7EF755","#59F860","#5DF993","#61FAC4"],["#46EDE0","#49CAEF","#4D9BF0","#516EF2","#6855F3"],["#331AEB","#741DEC","#B421EE","#EF24EB","#F128B0"],["#64E90D","#22EF0C","#0DF43C","#10F584","#14F7CA"],["#70052F","#75040F","#7B1C04","#804303","#866D03"],["#3A9F9A","#3B89A4","#3B6CA9","#3B4CAD","#4E3BB2"],["#DA255F","#DC272C","#DE5C2A","#E0942E","#E2CC31"],["#9E51B2","#B553AC","#B85691","#BA5876","#BD5B5B"],["#F58B58","#F6BC5B","#F7EC5F","#D6F863","#ACF968"],["#978546","#969C46","#7FA147","#66A547","#4AAA48"],["#FCA5BA","#FCAEA9","#FDCAAE","#FDE3B2","#FEFBB7"],["#D3E7BF","#CAE9C3","#C6EBCA","#C9ECD8","#CDEEE5"],["#ADC151","#8EC354","#6FC657","#59C862","#5CCB86"],["#9FB2C8","#A1A8CA","#A9A4CD","#B8A6CF","#C7A9D2"],["#174F74","#173579","#17177E","#371784","#5B1789"],["#864A2C","#8B682D","#90882D","#7D942D","#60992D"],["#F319ED","#F51DAE","#F62070","#F72433","#F95728"],["#E29E53","#E4CA57","#D4E55A","#ADE75E","#87E861"],["#CBC407","#9CD106","#61D705","#22DD04","#03E428"],["#4B7DA4","#4C64A9","#504CAE","#6F4CB2","#904EB5"],["#4DADC9","#508ACC","#5368CE","#6555D0","#8D58D2"],["#CA9CD0","#D39FC9","#D5A2BC","#D7A4AF","#D9ABA7"],["#5D11AA","#8F11B0","#B510A6","#BB1077","#C10F45"],["#4FDADF","#52B2E0","#558AE2","#5963E4","#7C5CE6"],["#85CD8D","#88D0A5","#8BD2BD","#8DD3D4","#90C0D6"],["#13CD69","#13D3A5","#12CCD9","#1194DF","#1058E5"],["#489405","#1E9904","#039F17","#03A548","#02AB7D"],["#88DCC1","#8BDEDD","#8EC9E0","#92B3E2","#959FE4"],["#0E65DC","#0D27E2","#320CE8","#760BEE","#BF0AF4"],["#9AE57A","#7EE77E","#81E8A1","#85EAC2","#88EBE2"],["#CB7D7F","#CE9580","#D0AF83","#D2C885","#C7D488"],["#AB174E","#B01621","#B63A16","#BB6D15","#C1A315"],["#3011C8","#6911CE","#A610D4","#D90FCC","#DF0E92"],["#BD96A5","#C0989B","#C3A49B","#C5B29D","#C8C1A0"],["#10134B","#211150","#371155","#4F125A","#5E1252"],["#0EEB7F","#0DF1C5","#10DAF3","#1499F5","#1858F6"],["#4E3CDB","#813FDD","#B242DF","#E146DF","#E349B2"],["#4E0459","#5E044F","#640336","#69031B","#6F0A03"],["#6D686D","#71696F","#756B6F","#786C6D","#7C706D"]]

fontawesome.rel = 'stylesheet';
fontawesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontawesome);
let selectedElement = null;
const Extension = document.createElement('div');
Extension.id = 'Extension'
Extension.style.position = 'fixed';
Extension.style.top = '30px';
Extension.classList.add('not-editable')
Extension.classList.add('not-selectable')
Extension.style.right = '30px';
Extension.style.backgroundColor = '#171717';
Extension.style.height = '400px';
Extension.style.width = '300px';
Extension.style.zIndex = '99999999';
// Extension.style.cursor = 'move'; 
Extension.style.boxShadow = '1px 2px 10px 2px black'; 

// Extension.style.padding = '20px'; 


const ExtensionHeader = document.createElement('div');
ExtensionHeader.id = 'ExtensionHeader'
ExtensionHeader.classList.add('not-editable')
ExtensionHeader.classList.add('not-selectable')

const ExtensionBody = document.createElement('div');
ExtensionBody.id = 'extensionBody'
ExtensionBody.classList.add('not-editable')
ExtensionBody.classList.add('not-selectable')




// -------------------------------------------------------------------header------------------------------------------
const header = document.createElement('div');
header.id = 'header';
header.innerText = '#ReDesign'
header.classList.add('not-editable')
ExtensionHeader.appendChild(header)

const cross = document.createElement('div');
cross.innerText = 'x'
cross.classList.add('not-editable')
cross.id = 'close'
// cross.style.color = 'white'
const minimize = document.createElement('div');
// minimize.style.color = 'white'
minimize.id = 'minimize'

minimize.innerText = '-';
minimize.classList.add('not-editable')
  const setting = document.createElement('i');
  setting.className = 'fa-solid fa-gear';
  setting.id = 'setting';

ExtensionHeader.appendChild(cross)
ExtensionHeader.appendChild(minimize)
ExtensionHeader.appendChild(setting)

cross.addEventListener('click', ()=>{
    document.getElementById('Extension').style.display = 'none'
    
})

minimize.addEventListener('click', ()=>{

    if(ExtensionBody.style.display  === 'none'){
        ExtensionBody.style.display = 'block'
        Extension.style.height = '400px';
    }else{
        ExtensionBody.style.display = 'none'
        Extension.style.height = '2px';
    }

})


const displayArea = document.createElement('div');
displayArea.id = 'displayArea'
// for(let i = 0 ; i < 5 ; i++){

//     const div =  document.createElement('div');
//     div.id = `color-${i}`;
//     div.style.width = '100%';
//     div.style.height = '100%';
//     displayArea.appendChild(div)


// }
let currentPalatte = null; 

function rgbStringToHex(rgbArray) {
    return rgbArray.map(rgb => {
        // Extract the RGB values using a regular expression
        const result = rgb.match(/\d+/g);
        if (result) {
            const r = parseInt(result[0]).toString(16).padStart(2, '0');
            const g = parseInt(result[1]).toString(16).padStart(2, '0');
            const b = parseInt(result[2]).toString(16).padStart(2, '0');
            return `#${r}${g}${b}`;
        }
        return null; // In case the input format is incorrect
    });
}

let websitePalatte = [];

function WebsiteThemeColor() {

  let elements = document.querySelectorAll('*');


  elements.forEach(el => {
   

      let bgColor = getComputedStyle(el).backgroundColor;

      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
       
  
        if(websitePalatte.includes(bgColor)){

        }else{
                websitePalatte.push(bgColor)

        }
      }
  });

    websitePalatte =  rgbStringToHex(websitePalatte)
  console.log('Website Colors : ', websitePalatte)
  currentPalatte = websitePalatte
}

WebsiteThemeColor()




const lockedColorInfo = {0:false,1:false, 2:false, 3 :false, 4:false}
// const lockedColors = {0:false,1:false, 2:false, 3:false, 4:false}
function getContrastYIQ(hexcolor) {
  const r = parseInt(hexcolor.slice(1, 3), 16);
  const g = parseInt(hexcolor.slice(3, 5), 16);
  const b = parseInt(hexcolor.slice(5, 7), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}




function DisplayPalatte(arr){

  console.log("HIS IS : " , arr)
  // console.log("HIS IS Length : " , arr.length)
  displayArea.innerHTML = '';

  
  for (let i = 0 ; i < arr.length  ; i++) {
   let  textColor  = getContrastYIQ(arr[i])

   const div2 = document.createElement('div');
   div2.style.height = '100%';
   div2.style.width = '100%';
   div2.style.background = `url('${chrome.runtime.getURL('transparent.jpg')}')`;

    const div = document.createElement('div');
    div.style.height = '100%';
    div.style.width = '100%';
    div.style.borderRadius = '';

    
      div.style.backgroundColor =  arr[i];


    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.gap = '30px'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'

   


    div.addEventListener('mouseover', () => {
      lock.style.display = 'block'; 
      copyBtn.style.display = 'block'; 
  });

  div.addEventListener('mouseout', () => {
    if (lock.classList.contains('fa-lock-open')) 
      {

        lock.style.display = 'none'; 
      }else{
        
    lock.style.display = 'block'; 

      }

    copyBtn.style.display = 'none'; 
  });

  const copyBtn = document.createElement('i');
  copyBtn.className = "fa-regular fa-copy hovericons";
  copyBtn.style.display = 'none'
  copyBtn.style.cursor = 'pointer'; 
  copyBtn.style.color = textColor; 
  div.appendChild(copyBtn);

  copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(arr[i]).then(() => {
      
  }).catch(err => {
      console.error('Failed to copy color:', err);
  });

  })


  

  const lock = document.createElement('i');
  lock.className = 'fa-solid fa-lock-open hovericons';
  lock.style.display = 'none'; 
  lock.style.color = textColor ; 
  lock.style.cursor = 'pointer'; 
  div.appendChild(lock);

  if(lockedColorInfo[i]){

     lock.classList.remove('fa-lock-open')
     lock.classList.add('fa-lock');
     lock.style.display = 'block'; 

  }
  
  lock.addEventListener('click', () => {
    // Toggle class names correctly
    if (lock.classList.contains('fa-lock-open')) {

      lock.classList.remove('fa-lock-open');
      lockedColorInfo[i] = true
      // console.log('LOck : ', lockedColorInfo )
   
     
      lock.classList.add('fa-lock');
    } else {
      lock.classList.remove('fa-lock');
      lock.classList.add('fa-lock-open');
            lockedColorInfo[i] = false
                  // console.log(' status : ', lockedColorInfo)

     
    }
  });



    const colorCode = document.createElement('div');
    
    colorCode.innerText = arr[i];
    colorCode.className = 'hovericons'
    colorCode.fontSize = '13px'
    colorCode.style.color = textColor
    colorCode.style.cursor = 'pointer'; 
    div.appendChild(colorCode)

    
    colorCode.addEventListener('click', ()=>{

      const colorPickerWindowsAb = document.createElement('div');
      colorPickerWindowsAb.style.position = 'absolute';
      colorPickerWindowsAb.style.display = 'flex'
      colorPickerWindowsAb.style.justifyContent = 'center'
      colorPickerWindowsAb.style.alignItems = 'center';
      colorPickerWindowsAb.style.width = '100%';
      colorPickerWindowsAb.style.height = '50%'
      colorPickerWindowsAb.style.backgroundColor = '#00000020'

      
      const colorPickerDiv = document.createElement("div");
      colorPickerDiv.className = "color-picker";
  
      const canvas = document.createElement("canvas");
      canvas.id = "colorCanvas";
      canvas.width = 100;
      canvas.height = 60;
  
      const hueSlider = document.createElement("input");
      hueSlider.type = "range";
      hueSlider.id = "hueSlider";
      hueSlider.min = 0;
      hueSlider.max = 360;

      const transparency = document.createElement('input')
      transparency.type = "range";
      transparency.id = "transparency";
      transparency.min = 0;
      transparency.max = 100;
      transparency.defaultValue = 100;



  
      const controlsDiv = document.createElement("div");
      controlsDiv.className = "controls";
  
      const hexInput = document.createElement("input");
      hexInput.type = "text";
      hexInput.id = "hexInput";
      hexInput.value = "#000000";
      hexInput.maxLength = 7;

      const colorOverlay = document.createElement("div");
      colorOverlay.className = "color-overlay";
      colorOverlay.id = "colorPreview";
  
      controlsDiv.appendChild(hexInput);
      controlsDiv.appendChild(colorOverlay);
      colorPickerDiv.appendChild(canvas);
      colorPickerDiv.appendChild(hueSlider);
      colorPickerDiv.appendChild(transparency);
      colorPickerDiv.appendChild(controlsDiv);
      colorPickerWindowsAb.appendChild(colorPickerDiv);
      displayArea.appendChild(colorPickerWindowsAb);
  
  
      colorPickerWindowsAb.addEventListener('click', ()=>{


        colorPickerWindowsAb.style.display = 'none'

      })

      colorPickerDiv.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the parent
    });


      // ---------------------------------------------------------Tested Code --------------------------------------------------------


      transparency.addEventListener('input', (e)=>{
        e.preventDefault()
          div.style.backgroundColor = `${arr[i]}${e.target.value}`;
          console.log("op : ", `${arr[i]}${e.target.value}`)
          if(e.target.value >= 100){
            div.style.backgroundColor = `${arr[i]}`;

          }


          hexInput.focus()
          hexInput.select()

      })
    
      hexInput.focus()
      hexInput.select()
  
      
    const ctx = canvas.getContext('2d');
    let isDragging = false;

    function drawColorCanvas(hue) {
        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                const saturation = x / canvas.width;
                const lightness = 1 - y / canvas.height;
                const [r, g, b] = hslToRgb(hue / 360, saturation, lightness);
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, y, 1, 1);
               
            }
        }
    }

    function hslToRgb(h, s, l) {
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
    }

    function generateHueGradient() {
      let gradient = '';
      for (let i = 0; i <= 360; i++) {
          const [r, g, b] = hslToRgb(i / 360, 1, 0.5);
          gradient += `rgb(${r}, ${g}, ${b}), `;
      }
      return gradient.slice(0, -2);
  }
    function updateColorCanvas() {
        const hue = hueSlider.value;
        drawColorCanvas(hue);
        const [r, g, b] = hslToRgb(hue / 360, 1, 0.5);
        const hex = rgbToHex(r, g, b);
        arr[i] = hex;
        colorOverlay.style.backgroundColor = hex;
        hueSlider.style.background = `linear-gradient(to right, ${generateHueGradient()})`;

        hexInput.value = hex;

     
        div.style.backgroundColor =  hex;
     
        hexInput.focus()
        hexInput.select()
    }

    function getColor(event) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, canvas.width - 1));
        const y = Math.max(0, Math.min(event.clientY - rect.top, canvas.height - 1));
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        const r = imageData[0];
        const g = imageData[1];
        const b = imageData[2];
        const hex = rgbToHex(r, g, b);
        hexInput.value = hex;
   
        colorOverlay.style.backgroundColor = hex;
        hexInput.focus()
        hexInput.select()
    
     
        div.style.backgroundColor =  hex; 
    }

    hueSlider.addEventListener('input', updateColorCanvas);
    canvas.addEventListener('mousedown', (event) => {
        isDragging = true;
        getColor(event);
    });
    canvas.addEventListener('mousemove', (event) => {
        if (isDragging) {
            getColor(event);
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    hexInput.addEventListener('input', (event) => {
        let hex = event.target.value;
        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }
        if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            const [h, s, l] = rgbToHsl(r, g, b);
            hueSlider.value = Math.round(h * 360);
            arr[i] = event.target.value
            updateColorCanvas();
        }
    });

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; 
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h, s, l];
    }

    updateColorCanvas();












      // ---------------------------------------------------------Tested Code --------------------------------------------------------






    })


    



    div2.appendChild(div)
    displayArea.appendChild(div2);
  }

}
Extension.appendChild(ExtensionHeader)
Extension.appendChild(ExtensionBody)
ExtensionBody.appendChild(displayArea)




DisplayPalatte(websitePalatte.slice(0, 5))
// Buttons




// Create the main div
const container = document.createElement('div');
container.style.display = 'flex';
container.style.height = '40%';
container.style.width = '100%';
container.style.flexDirection = 'column';
// container.style.width = '100%';


// Create the button element
const button = document.createElement('div');
button.id = 'toggleEditMode';
button.classList.add('not-editable')
button.classList.add('no-select')

const icon = document.createElement('i');
icon.className = 'fa-solid fa-arrow-pointer icon';
icon.classList.add('not-editable')

button.addEventListener('click',injectEditMode)

button.innerHTML = `${icon.outerHTML} &nbsp; Select Element`;
container.appendChild(button);


container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.gap = '20px';


// Create a div element
const div = document.createElement('div');
div.style.width = '160px';
div.style.display = 'flex';
div.style.gap = '20px';


// Create a span element
const span = document.createElement('span');
span.textContent = 'Apply the Palette ';
span.classList.add('no-select')

span.classList.add('not-editable')


// Create a checkbox input
const checkbox = document.createElement('input');
checkbox.id = 'applyPalatte';
checkbox.classList.add('not-editable')
checkbox.type = 'checkbox';

const savedValue = localStorage.getItem('applyPalatte');
if (savedValue === 'true') {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('applyPalatte', checkbox.checked);
});



// Append the span and checkbox to the div
div.appendChild(span);
div.appendChild(checkbox);

container.appendChild(div)

const themeandpickerBtn = document.createElement('div')
themeandpickerBtn.style.display = 'flex'
themeandpickerBtn.style.gap = '7px'

// Create the button for generating the palette
const changeThemeButton = document.createElement('div');
changeThemeButton.id = 'changeTheme';
changeThemeButton.classList.add('not-editable')
changeThemeButton.classList.add('no-select')
changeThemeButton.innerHTML = '<i class="fa-solid fa-palette icon"></i> &nbsp; Generate Palette';
changeThemeButton.addEventListener('click', changeTheme)

// Create the color picker button
const colorPickerButton = document.createElement('span');
colorPickerButton.id = 'colorPickerButton';
colorPickerButton.innerHTML = '<i class="fa-solid fa-eye-dropper icon"></i>';
colorPickerButton.style.padding = '6px';
colorPickerButton.style.backgroundColor = '#242424';
colorPickerButton.style.cursor = 'pointer';
colorPickerButton.style.borderRadius = '7px';
colorPickerButton.classList.add('not-editable')
colorPickerButton.addEventListener('click',(event) =>{
  activateColorPicker(event)})
themeandpickerBtn.appendChild(changeThemeButton)
themeandpickerBtn.appendChild(colorPickerButton)


// Append the buttons to the container
container.appendChild(themeandpickerBtn);


// Append the container to the body (or another element)
ExtensionBody.appendChild(container);






// -----------------------------------------------------Color Picker ---------------------------------------------------------------

let cursorPosition = { x: 0, y: 0 };

// Function to update cursor position
function updateCursorPosition(event) {
  cursorPosition.x = event.clientX;
  cursorPosition.y = event.clientY;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', updateCursorPosition);

// Function to get current cursor position
function getCursorLocation() {
  return cursorPosition;
}



function activateColorPicker(event) {
  if (!window.EyeDropper) {
      console.error('EyeDropper API is not supported in this browser.');
      return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper.open().then(result => {
      const selectedColor = result.sRGBHex;
      console.log('Selected color:', selectedColor);
      
      updateColorUI(selectedColor);
      copyToClipboard(selectedColor,event);
      
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

function copyToClipboard(text,event) {
  navigator.clipboard.writeText(text).then(() => {
      console.log('Color code copied to clipboard:', text);
      // Optionally, show a temporary message to the user
      showCopiedMessage(event);
  }).catch(err => {
      console.error('Failed to copy color code: ', err);
  });
}

function showCopiedMessage(event) {
    const { x, y } = getCursorLocation();

  const message = document.createElement('div');
  message.textContent = 'Color copied!';
  message.style.position = 'fixed';
  message.style.top = `${y}px`; // Vertical position of the cursor
  message.style.left = `${x + 20}px`;
  message.style.backgroundColor = 'rgba(0,0,0,0.7)';
  message.style.color = 'white';
  message.style.padding = '10px';
  message.style.borderRadius = '5px';
  document.body.appendChild(message);

  setTimeout(() => {
      document.body.removeChild(message);
  }, 2000);
}



// -----------------------------------------------------Color Picker ---------------------------------------------------------------





document.body.appendChild(Extension);
let offsetX, offsetY;

ExtensionHeader.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - Extension.getBoundingClientRect().left;
    offsetY = e.clientY - Extension.getBoundingClientRect().top;

    const onMouseMove = (e) => {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Prevent going outside the window
        const rightBoundary = window.innerWidth - Extension.offsetWidth;
        const bottomBoundary = window.innerHeight - Extension.offsetHeight;

        if (newX < 0) newX = 0;
        if (newX > rightBoundary) newX = rightBoundary;
        if (newY < 0) newY = 0;
        if (newY > bottomBoundary) newY = bottomBoundary;

        Extension.style.left = `${newX}px`;
        Extension.style.top = `${newY}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});


let generattedPalatte = []


function makeRequest( currentPalatte, lockedColorInfo){
  fetch('http://localhost:3000/pairing', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
     
        colorpalatte: currentPalatte,
        lockedKeys: lockedColorInfo,
    }),
})
.then(response => {
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
})
.then(data => {
    console.log('Success:', data);
    generattedPalatte = data.msg

    for(let k=0; k< currentPalatte.length;k++){
          
      if(lockedColorInfo[k]){

        console.log("This i locked index : ", k);

      }else{

        currentPalatte[k] = generattedPalatte[k]

      }

    }

})
.catch(error => {
    console.error('Error:', error); // Handle any errors
});


}




function updateColors(currentPalatte, lockedColorInfo) {
  return currentPalatte.map((color, index) => {
      
      return lockedColorInfo[index] ? color : colorsh[Math.floor(Math.random() * 100)];
  });
}







async function changeTheme() {
  
  console.log("This is Current Plaaete Status  : ",  currentPalatte)
  
    let indexx = Math.floor(Math.random() * 100);


	  if(localStorage.getItem('applyPalatte')=== 'true'){
	document.body.style.backgroundColor = '#ffffff'}

  generattedPalatte = colorsh[indexx];
 

    
if (Object.values(lockedColorInfo).some(value => value === true)) {
       makeRequest(currentPalatte, lockedColorInfo);

    

 

}else{
  currentPalatte  =generattedPalatte



}





    let colorMap = {};  // Map to store original color -> new color mapping
    let elements = document.querySelectorAll('*');
    let colorIndex = 0; // To keep track of which color from the palette to use

    // Function to generate a random gradient using the color palette
    function getRandomGradient() {
        let color1 = currentPalatte[colorIndex % currentPalatte.length];
        let color2 = currentPalatte[(colorIndex + 1) % currentPalatte.length];
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
        el.style.color =getContrastYIQ(bgColor)
        // const style = ['italic', 'normal', 'bold']
        // const randomIndex = Math.floor(Math.random() * style.length);

        // // Select the style at the random index
        // const randomStyle = style[randomIndex];

        // el.style.fontStyle = randomStyle

        // el.style.fontSize = `${parseInt(getComputedStyle(el).fontSize.replace('px', '') )+  randomIndex}px`


        // Create a link element for Google Fonts

  
  
       

        // Function to check if the color is white
        // function isWhite(color) {
        //     // RGB color values for white are 255, 255, 255
        //     return color === 'rgb(255, 255, 255)';
        // }


        // if (isWhite(color)) {
        //     el.style.color = 'black';
        // } else {
        //     el.style.color = 'white';
        // }



  
        // Check if the element has a gradient or a solid color
        if (bgImage && (bgImage.startsWith('linear-gradient') || bgImage.startsWith('radial-gradient'))) {
            // Generate a new gradient from the color palette and apply it
            if(localStorage.getItem('applyPalatte')=== 'true'){
              el.style.backgroundImage = getRandomGradient();

            }
        } else if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            // Check if the background color is explicitly set
            if (colorMap[bgColor]) {
              if(localStorage.getItem('applyPalatte') === 'true'){
                el.style.backgroundColor = colorMap[bgColor];}
            } else {
                // Use the next color from the color palette
                let newColor = currentPalatte[colorIndex % currentPalatte.length];
                colorMap[bgColor] = newColor;
                if(localStorage.getItem('applyPalatte')=== 'true'){
                el.style.backgroundColor = newColor;
                el.style.color =getContrastYIQ(newColor)}


         
        
                // if(colorIndex<5){
                  colorIndex++;
                // } 
            }
        }
    }

    });

    console.log("MAP  : ", colorMap)
    console.log("MAP Length  : ",Object.keys(colorMap).length )

   
DisplayPalatte(currentPalatte);
    
  }






  function appendMenuAfterSelectandClick() {
    console.log("Creating SelectedMenu and Xcross");

    // Create the main menu container
    const SelectedMenu = document.createElement('div');
    SelectedMenu.id = 'SelectedMenu';
    SelectedMenu.classList.add('not-selectable');

    // Create the X cross button with content and text
    const Xcross = document.createElement('div');
    Xcross.style.display = 'flex';
    Xcross.style.height = '25px';
    Xcross.style.width = '50%';
    Xcross.style.borderRadius = '11px';
    Xcross.style.justifyContent = 'space-between';
    Xcross.style.alignItems = 'center';
    Xcross.style.padding = '0 10px';  // Add padding for text
    Xcross.style.gap = '10px';
    Xcross.classList.add('not-selectable');
    Xcross.style.cursor = 'pointer';
    Xcross.style.backgroundColor = '#313030';

   if(selectedElement.tagName !== 'IMG'){
    const backgroundColorBOx = document.createElement('div');
    const backgroundColorLabel = document.createElement('div');
    backgroundColorLabel.innerText = 'Background'
      backgroundColorBOx.appendChild(backgroundColorLabel)


      // Create color input fields
      const colorInput1 = document.createElement('input');
      colorInput1.type = 'color';
      // colorInput1.value ='notset' 
      colorInput1.classList.add('not-selectable')

  
      const colorInput2 = document.createElement('input');
      colorInput2.type = 'color';
      // colorInput2.value ='notset' 
      colorInput2.classList.add('not-selectable')




      // Create color input fields
      const colorInput3 = document.createElement('input');
      colorInput3.type = 'color';
      colorInput3.classList.add('not-selectable')

  
      const colorInput4 = document.createElement('input');
      colorInput4.type = 'color';
      colorInput4.classList.add('not-selectable')
   

      colorInput1.addEventListener('input', updateGradient);
         colorInput2.addEventListener('input', updateGradient);
           colorInput3.addEventListener('input', updateTextGradient);
         colorInput4.addEventListener('input', updateTextGradient);




 // Append color inputs to SelectedMenu
 backgroundColorBOx.appendChild(colorInput1);
 backgroundColorBOx.appendChild(colorInput2);  
 backgroundColorBOx.appendChild(colorInput3);  
 backgroundColorBOx.appendChild(colorInput4);  

 SelectedMenu.appendChild(backgroundColorBOx)


function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex; // Ensure two digits
    });
    return `#${result.join('')}`;
}


 function updateGradient() {
const color1 = colorInput1.value;
  const color2 = colorInput2.value;
  selectedElement.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

}



 function updateTextGradient() {
const color3 = colorInput3.value;
  const color4 = colorInput4.value;
  selectedElement.style.background = `linear-gradient(to right, ${color3}, ${color4})`;
  selectedElement.style.webkitBackgroundClip = 'text'; // For WebKit browsers
selectedElement.style.backgroundClip = 'text'; // Standard property
selectedElement.style.webkitTextFillColor = 'transparent';
 
}







   }else{

    const SelectedIMG = document.createElement('img');
   const colorsDiv =  document.createElement('div');
   colorsDiv.id  = 'showExtractedcolors'
   colorsDiv.style.height = '200px'
   colorsDiv.style.width = '100%'
   colorsDiv.style.display = 'flex';
   colorsDiv.style.alignItems = 'center';
   colorsDiv.style.gap = '20px';
   colorsDiv.style.flexWrap = 'wrap';

    SelectedIMG.src = selectedElement.src;
    SelectedIMG.style.width = '100px';
    SelectedIMG.style.height = '100px';
    SelectedMenu.appendChild(SelectedIMG)
    SelectedMenu.appendChild(colorsDiv)

    extractDistinctColors(selectedElement)

    // ------------------------------------------------------Extract Img Color ----------------------------------------------------------
    function extractDistinctColors(img) {
      const canvas = document.createElement('canvas');
  
      const ctx = canvas.getContext('2d');

      // Set canvas size to image size
      canvas.width = img.width;
      canvas.height = img.height;

      

      // Draw the image on canvas
      ctx.drawImage(img, 0, 0);

      // Get pixel data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const colorMap = {};

      // Loop through pixel data
      for (let i = 0; i < data.length; i += 4) {
          const r = data[i];     // Red
          const g = data[i + 1]; // Green
          const b = data[i + 2]; // Blue

          // Create a color key
          const colorKey = `${r},${g},${b}`;
          
          // Combine colors with similar shades (tolerance)
          let found = false;
          for (const key in colorMap) {
              if (isSimilar(colorKey, key)) {
                  colorMap[key] += 1; // Increment count of similar color
                  found = true;
                  break;
              }
          }

          if (!found) {
              colorMap[colorKey] = 1; // Add new color
          }
      }

      // Sort colors by frequency and get the top 5 distinct colors
      const sortedColors = Object.entries(colorMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);

      displayColors(sortedColors);
  }

    function isSimilar(color1, color2) {
      const [r1, g1, b1] = color1.split(',').map(Number);
      const [r2, g2, b2] = color2.split(',').map(Number);
      const tolerance = 50; // Define the tolerance for color similarity

      return (
          Math.abs(r1 - r2) < tolerance &&
          Math.abs(g1 - g2) < tolerance &&
          Math.abs(b1 - b2) < tolerance
      );
  }

    function displayColors(colors) {
    
      colorsDiv.innerHTML = ''; // Clear previous colors

      colors.forEach(([colorKey, count]) => {
          const [r, g, b] = colorKey.split(',').map(Number);
          const colorDiv = document.createElement('div');
          colorDiv.className = 'color-box';
          colorDiv.style.padding= '30px'
          colorDiv.style.height= '50px'
          colorDiv.style.width= '50px'
          colorDiv.style.borderRadius= '11px'

          colorDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
          // colorDiv.textContent = `rgb(${r},${g},${b}): ${count}`;
          colorsDiv.appendChild(colorDiv);
      });
  }

    // ------------------------------------------------------Extract Img Color ----------------------------------------------------------

   }


    // Add visible content to Xcross
    const tagText = document.createElement('span');
    tagText.textContent = selectedElement ? `${selectedElement.tagName}${selectedElement.id ? ' #' + selectedElement.id : ''}` : 'Element';
    tagText.style.color = '#fff';
    tagText.classList.add('not-selected');

    const xIcon = document.createElement('i');
    xIcon.className = 'fa-regular fa-circle-xmark not-selected';
    xIcon.style.color = '#fff';

    // Append text and icon to Xcross
    Xcross.appendChild(tagText);
    Xcross.appendChild(xIcon);

  

    // For debugging, add mousedown event
    Xcross.addEventListener('mousedown', function(e) {
        console.log("Mouse down on Xcross");
        SelectedMenu.remove()
        window.toggleEditMode();
        e.stopPropagation();
    });

    // Append Xcross to SelectedMenu
    SelectedMenu.appendChild(Xcross);
    
    // Check if extensionBody exists
    const extensionBody = document.getElementById('extensionBody');
    if (extensionBody) {
        // Clear any existing SelectedMenu
        const existingMenu = extensionBody.querySelector('#SelectedMenu');
        if (existingMenu) {
            extensionBody.removeChild(existingMenu);
        }
        
        extensionBody.appendChild(SelectedMenu);
        console.log("SelectedMenu appended to extensionBody");
    } else {
        console.error("extensionBody not found");
        return;
    }

    // Debug log to verify element creation
    console.log("Created SelectedMenu with Xcross:", SelectedMenu);
}






  function injectEditMode() {
    if (window.domEditModeInjected) {
      window.toggleEditMode();
      return;
    }

   // Select all elements on the page
   const allElements = document.querySelectorAll('*');

function handleMouseEnter(event) {
    // Stop event from bubbling up to parent elements
    event.stopPropagation();
    
    if (!event.target.classList.contains('not-selectable')) {
        event.target.style.outline = '2px solid blue';
    }
}

function handleMouseLeave(event) {
    // Stop event from bubbling up to parent elements
    event.stopPropagation();
    
    if (!event.target.classList.contains('not-selectable')) {
        event.target.style.outline = 'none';
    }
}

allElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
});
  
  
    window.domEditModeInjected = true;
    let editMode = false;

  
  
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
    }



  
    function handleElementClick(event) {
      if (!editMode) return;

      // Ignore clicks on the sidemenu and its contents
      // if (event.target.closest('#extension-sidemenu')) {
      if (event.target.classList.contains('not-selectable')) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (selectedElement) {
        removeEditUI(selectedElement);
      }
      
      selectedElement = event.target;
      if(selectedElement.classList.contains('not-selectable')){

      }else{

        addEditUI(selectedElement);
      }
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
      // element.classList.add('extension-selected-outline');
      // element.classList.add('resizable')
      element.style.position = 'relative';

  
      // ------------------------------------------------------------------Append in Extension -----------------------------------------
    
      appendMenuAfterSelectandClick()
      disableDefaults();

   

      setTimeout(() => showSidemenu(element), 0);
    }




  
    function removeEditUI(element) {
      element.classList.remove('extension-selected-outline');
      element.classList.remove('resizable');
      element.querySelectorAll('.extension-menu-trigger').forEach(el => el.remove());
      // const handle = element.querySelector('#handle');
      // if (handle) handle.remove();
      
      // Remove event listeners
      element.removeEventListener('mousedown', element.startDragging);
      if (element.resizeHandle) {
        element.resizeHandle.removeEventListener('mousedown', element.startResizing);
      }


   
        allElements.forEach(element => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        });


    }

    
  
   


   










  
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
    
    }
  
    function removeToggleButton() {

    }
  
    function showSidemenu(element) {
     
 




      //   navigator.clipboard.writeText(cssCode.textContent).then(() => {
      //     alert('CSS code copied to clipboard!');
      //   });
      // });

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


   

    }
  
    



  
    toggleEditMode(); // Enable edit mode immediately when injected
  }
  







