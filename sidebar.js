
document.addEventListener('DOMContentLoaded', () => {

  // Select all inputs of type number, range, and color
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const rangeInputs = document.querySelectorAll('input[type="range"]');
  const colorInputs = document.querySelectorAll('input[type="color"]');
  
  // Function to handle changes on number inputs
  const handleNumberInputChange = (event) => {
      // console.log(`Number input changed to: ${event.target.value} ss ${event.target.name}`);
      console.log(`${event.target.value}${event.target.name == 'width'?'%':'px'}`);
      
   

      event.preventDefault()
    
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeStyle",
        style: {
          property: event.target.name,
          value: `${event.target.value}${event.target.name == 'width'?'%':'px'}`
        }
      });
    });



     
  };

  // Function to handle changes on range inputs
  const handleRangeInputChange = (event) => {

    console.log(`Number input changed to: ${event.target.value} ss ${event.target.name}`);
      
   

    event.preventDefault()
    
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeStyle",
        style: {
          property: event.target.name,
          value: `${event.target.value}${event.target.name == 'width'?'%':'px'}`
        }
      });
    });


      // You can add additional functionality here
  };





  // Function to handle changes on color inputs
  const handleColorInputChange = (event) => {

    console.log(`Number input changed to: ${event.target.value} ss ${event.target.name}`);
      
   

    event.preventDefault()
    
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeStyle",
        style: {
          property: event.target.name,
          value:event.target.value
        }
      });
    });

  };



  // Attach event listeners
  numberInputs.forEach(input => input.addEventListener('input', handleNumberInputChange));
  rangeInputs.forEach(input => input.addEventListener('input', handleRangeInputChange));
  colorInputs.forEach(input => input.addEventListener('input', handleColorInputChange));
  document.getElementById('positionSelect').addEventListener('change', function(event) {
    // Log information to the console
    console.log("POSITIONS : ", event.target.id, " : ", event.target.value);

    // Get the selected value
    const selectedValue = event.target.value;

    // Send a message to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "changeStyle",
            style: {
                property: "position", // Fixed property name
                value: selectedValue
            }
        });
    });
});



});
document.getElementById('widthUnit').addEventListener('click', (e) => {
  const currentText = e.target.innerText;

  switch (currentText) {
      case 'px':
          e.target.innerText = '%';
          break;
      case '%':
          e.target.innerText = 'vh';
          break;
      case 'vh':
          e.target.innerText = 'em';
          break;
      case 'em':
          e.target.innerText = 'rem';
          break;
      case 'rem':
          e.target.innerText = 'px';
          break;
      default:
          e.target.innerText = 'px'; // Default case in case the text is unexpected
  }
});



document.addEventListener('DOMContentLoaded', ()=>
  {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "openX"
    });
  });

  
});


document.getElementById('ChangeTheme').addEventListener('click', ()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "changeTheme"
    });
  });

})


document.getElementById('upload').addEventListener('click', ()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "uploadIMg"
    });
  });

})



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.log("FYIS IS OOO : " ,  message.data);

  // document.getElementById('code').innerHTML = message.data
});



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("styling  : " ,  message.style);


 const container  =  document.getElementById('code')
 container.innerHTML = ''
  for (const [property, value] of Object.entries(message.style)) {
    const div = document.createElement('div');
    div.className = 'property';
    div.innerHTML = `<span class="property-name">${property}:</span> ${value}`;
    container.appendChild(div);
}


displayStyles( message.style)

  
});




document.querySelector('#text').addEventListener('dragstart', (event) => {
  // Set the HTML content as data
  const htmlData = `<div>Double Click to Edit </div>
`
  event.dataTransfer.setData('text/html', htmlData);
});



document.querySelector('#img').addEventListener('dragstart', (event) => {
  // Set the HTML content as data
  const htmlData = `<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" height="100px" width="100px">`;
  
  event.dataTransfer.setData('text/html', htmlData);
});

document.querySelector('#canvas').addEventListener('dragstart', (event) => {
  // Set the HTML content as data
  const htmlData = `<canvas width="200px" height="200px"></canvas>
`
  event.dataTransfer.setData('text/html', htmlData);
});
