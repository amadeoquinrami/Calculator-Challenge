
let input ="";
const operators =['+', '-', '*', '/']
function displayScreen(value, displayValue){
    let lastChar = input.slice(-1); // prevents double operators
    if (operators.includes(lastChar) && operators.includes(value)) { // findss the last charcter or operator
        return;
    }
      input += value ;

    if (displayValue !== undefined){ 
        UpdateDisplayScreen(displayValue);
     } else { 
      UpdateDisplayScreen(input);
    } 
}
function UpdateDisplayScreen(value) {
    const screen = document.querySelector(".screenOutput");
    screen.textContent = value;
}
function solve() { // handles the erros such as dividing by zeroo
    try {
        if (input.includes("/0")) {
            UpdateDisplayScreen("Cannot divide by zero");
            input = "";
            return;
        }
     let result = eval(input);
     if(!isFinite(result)){
        UpdateDisplayScreen("Math ERROR");
        input = "";
        return;
     }
     UpdateDisplayScreen(result);
     input = result.toString();

    }catch (error) {
    UpdateDisplayScreen("Invalid Input");
        input = "";
    }
} 
function clearScreen() {
    input = "";
    UpdateDisplayScreen(input);
}
function backspace() {
    if (input.length > 0){
    input = input.slice(0, -1);
}
UpdateDisplayScreen(input);
}



