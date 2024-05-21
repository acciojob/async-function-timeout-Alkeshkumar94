//your JS code here. If required.
const message=document.getElementById('text');
const delay=document.getElementById('delay');
const btn=document.getElementById('btn');
const output=document.getElementById('output');

const wait=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
btn.addEventListener('click',async ()=>{
	  const messageValue = message.value;
    const delayValue = parseInt(delay.value);

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
})
