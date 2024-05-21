// Get references to the input elements and the button
const messageInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Function to create a delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Add an event listener to the button
btn.addEventListener('click', async () => {
    // Get the message and delay values
    const messageValue = messageInput.value;
    const delayValue = parseInt(delayInput.value);

    // Validate the delay input
    if (isNaN(delayValue) || delayValue < 0) {
        alert('Please enter a valid positive number for the delay.');
        return;
    }

    // Clear the output initially
    output.textContent = '';

    // Convert delay to milliseconds
    const delayInMs = delayValue * 1000;

    // Wait for the specified delay
    await wait(delayInMs);

    // Display the message
    output.textContent = messageValue;
});
