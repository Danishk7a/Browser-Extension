
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

  // document.getElementById('code').innerHTML = '';
  function displayStyles(data) {
    // Update the content of each placeholder
    document.getElementById('height-px').textContent = data.height.px;
    document.getElementById('height-percent').textContent = data.height.percent;
    document.getElementById('width-px').textContent = data.width.px;
    document.getElementById('width-percent').textContent = data.width.percent;
    document.getElementById('padding-top-px').textContent = data.padding.top.px;
    document.getElementById('padding-top-percent').textContent = data.padding.top.percent;
    document.getElementById('padding-right-px').textContent = data.padding.right.px;
    document.getElementById('padding-right-percent').textContent = data.padding.right.percent;
    document.getElementById('padding-bottom-px').textContent = data.padding.bottom.px;
    document.getElementById('padding-bottom-percent').textContent = data.padding.bottom.percent;
    document.getElementById('padding-left-px').textContent = data.padding.left.px;
    document.getElementById('padding-left-percent').textContent = data.padding.left.percent;
    document.getElementById('margin-top-px').textContent = data.margin.top.px;
    document.getElementById('margin-top-percent').textContent = data.margin.top.percent;
    document.getElementById('margin-right-px').textContent = data.margin.right.px;
    document.getElementById('margin-right-percent').textContent = data.margin.right.percent;
    document.getElementById('margin-bottom-px').textContent = data.margin.bottom.px;
    document.getElementById('margin-bottom-percent').textContent = data.margin.bottom.percent;
    document.getElementById('margin-left-px').textContent = data.margin.left.px;
    document.getElementById('margin-left-percent').textContent = data.margin.left.percent;
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
