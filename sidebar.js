const Structure = [ {height:{}}]

const elements = document.querySelectorAll('.height');

elements.forEach(element => {
  element.addEventListener('input', (e) => {

   

    e.preventDefault()
    
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeStyle",
        style: {
          property: "height",
          value: `${e.target.value}px`
        }
      });
    });

    
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Select all inputs of type number, range, and color
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const rangeInputs = document.querySelectorAll('input[type="range"]');
  const colorInputs = document.querySelectorAll('input[type="color"]');
  
  // Function to handle changes on number inputs
  const handleNumberInputChange = (event) => {
      console.log(`Number input changed to: ${event.target.value} ss ${event.target.name}`);
      
   

      event.preventDefault()
    
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "changeStyle",
        style: {
          property: event.target.name,
          value: `${event.target.value}px`
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
          value: `${event.target.value}px`
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
