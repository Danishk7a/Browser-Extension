const express = require('express');
const axios = require('axios')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/generatePalatte', async (req, res) => {

  const response = await  axios.post('http://colormind.io/api/',{model:'default'});
console.log(response.data.result)
return res.json({arr:response.data.result});

});

app.post('/pairing', async (req, res) => {
   



    const { colorpalatte, lockedKeys } = req.body;

    // Log the received data
    console.log('Received color palette:', colorpalatte);
    console.log('Received locked keys:', lockedKeys);

    // Send a response back to the client
    // res.json({ message: 'Data received successfully!' });


    const filteredColors = colorpalatte.filter((color, index) => lockedKeys[index]);
// console.log("? : ", filteredColors)

function hexToRgb(hex) {
    // Remove the hash (#) if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}

function convertHexArrayToRgb(hexArray) {
    return hexArray.map(hexToRgb);
}
        // console.log(req.body.lockedKeys)


        

const rgbColors = convertHexArrayToRgb(filteredColors);


function normalizeArray(inputArray) {
    const desiredLength = 5;
    const outputArray = [...inputArray]; // Create a copy of the input array

    // Append nulls until the array reaches the desired length
    while (outputArray.length < desiredLength) {
        outputArray.push("N");
    }

    return outputArray;
}

let Narray = normalizeArray(rgbColors)
console.log("N ", Narray)




    const url = "http://colormind.io/api/";
const data = {
    model: "default",
    input: Narray
};

// const data = req.body.colorsData;




// console.log(rgbColors); // Output: [ [ 242, 242, 244 ], [ 255, 87, 51 ], [ 66, 135, 245 ] ]

function rgbToHex(rgbArray) {
    return rgbArray.map(rgb => {
        const hex = rgb.map(value => {
            // Convert each RGB component to a hex string
            const hexValue = value.toString(16).padStart(2, '0'); // Ensure two digits
            return hexValue;
        }).join(''); // Join the hex components

        return `#${hex}`; // Prepend '#' to form a hex color
    });
}

// Example usage
// const rgbColors = [      
//     [202, 191, 12],
//     [154, 213, 12],
//     [60, 151, 69], 
//     [112, 93, 65], 
//     [131, 55, 45]
// ];

// const hexColors = rgbToHex(rgbColors);
// console.log(hexColors);



axios.post(url, data)
    .then(response => {
        const palette = response.data.result;
      let hexColorsData =  rgbToHex(palette);
        // console.log( "Response : " , palette);
        res.json({msg:hexColorsData})

    })
    .catch(error => {
        console.error('Error:', error);
    });

   
  
  });




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
