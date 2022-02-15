const greetingDisplay = document.getElementById("greeting-display");


document.getElementById('recipient-input').addEventListener('keyup', writeGreeting);
document.getElementById('sender-input').addEventListener('keyup', writeGreeting);

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    let fromMsg = document.getElementById('recipient-input').value;
    let greeting = document.getElementById('greeting-select').value;
    let toMsg = document.getElementById('sender-input').value;


    greetingDisplay.textContent = `${fromMsg}, ${greeting}, ${toMsg}`;
}
