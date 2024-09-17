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
let data = [];
let colors = [];

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
} catch (err) {
    console.error('Failed to copy selected color:', err);
}
}


document.addEventListener('keydown', (e) => {
if (e.key === 'd') {
    selectedSegment = (selectedSegment + 1) % data.length;
    updatePieChart();
    copySelectedColorToClipboard(); // Copy the color of the selected segment to the clipboard
}
if (e.key === 'r') {
    updatePieChart();
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




























