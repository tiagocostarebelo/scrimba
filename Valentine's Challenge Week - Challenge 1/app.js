document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
 

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    const foodSelected = document.getElementById('food-select').value;
    const foodCost = parseInt(foodSelected);
    const transportSelected = document.getElementById('transport-select').value;
    const transportCost = parseInt(transportSelected);
    const sum = foodCost + transportCost;
    const ballons = document.getElementById('balloon-checkbox').checked;
  
    if(foodSelected != '' && transportSelected != '')
    {
        if (ballons == true) {
            costEl.textContent = `${sum}$ + Balloons`;
        } else {        
            costEl.textContent = `${sum}$`;
        }
    } else if(foodSelected == '') {
        alert('Please pick your food')
    }
    if(transportSelected == '') {
        alert ('Please select your transportation')
    }
}
 