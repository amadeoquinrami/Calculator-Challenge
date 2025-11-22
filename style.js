//  eval function in javascript
//Displayoutput
let input ="";
const operators =['+', '-', '*', '/']
function displayScreen(value, displayValue){
    let lastChar = input.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }
      input += value ;
const screen = document.querySelector(".screenOutput")
    if (displayValue !== undefined){ 
        screen.textContent += displayValue;
     } else { 
      screen.textContent = input;
} 
}
function UpdateDisplayScreen(value) {
    const screen = document.querySelector(".screenOutput");
    screen.textContent = value;
}
function solve() {
    let result = eval(input);
    UpdateDisplayScreen(result);
    input = result.toString();
}
function clearScreen() {
    input = "";
    UpdateDisplayScreen(input);
}
function solve() {
    let result = eval(input);
    UpdateDisplayScreen(result);
    input = result.toString();
}
function backspace() {
    if (input.length > 0){
    input = input.slice(0, -1);
}
UpdateDisplayScreen(input);
}



