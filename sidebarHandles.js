const structure = document.getElementById('structure').addEventListener('click', ()=>{
    
    const Outlet = document.getElementById('outlet')
  const  structureContent = document.getElementById('structureContent').style.display = 'block';
  const  addElementsContent = document.getElementById('addElementsContent').style.display = 'none';

  const  styleContent = document.getElementById('styleContent').style.display = 'none';


})
const style = document.getElementById('style').addEventListener('click', ()=>{
    const Outlet = document.getElementById('outlet')
    const  structureContent = document.getElementById('structureContent').style.display = 'none';
    const  addElementsContent = document.getElementById('addElementsContent').style.display = 'none';

    const  styleContent = document.getElementById('styleContent').style.display = 'block';
  
    
})


const addElements = document.getElementById('addElements').addEventListener('click', ()=>{
  const Outlet = document.getElementById('outlet')
  const  structureContent = document.getElementById('structureContent').style.display = 'none';
  const  styleContent = document.getElementById('styleContent').style.display = 'none';
  const  addElementsContent = document.getElementById('addElementsContent').style.display = 'block';


  
})


document.addEventListener('DOMContentLoaded', () => {
  const copyDiv = document.getElementById('code');

  copyDiv.addEventListener('click', () => {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea');
      textarea.value = copyDiv.textContent;

      // Append the textarea to the body (required for the copy command)
      document.body.appendChild(textarea);

      // Select and copy the text
      textarea.select();
      document.execCommand('copy');

      // Remove the temporary textarea element
      document.body.removeChild(textarea);

      // Optional: Provide feedback to the user
      alert('Text copied to clipboard!');
  });
});
