const express = require('express');
const axios = require('axios')
const app = express();
const port = 3000;
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

app.get('/pairing', async (req, res) => {
   
    const url = "http://colormind.io/api/";
const data = {
    model: "default",
    input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
};

axios.post(url, data)
    .then(response => {
        const palette = response.data.result;
        console.log(palette);
    })
    .catch(error => {
        console.error('Error:', error);
    });

   
  
  });




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
