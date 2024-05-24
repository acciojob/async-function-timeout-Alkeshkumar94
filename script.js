document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve values from the input fields
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);
    
    // Introduce a delay using a promise
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Display the text in the output div
    document.getElementById('output').textContent = text;
});
