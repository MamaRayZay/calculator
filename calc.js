
// let allClearButton = document.querySelector('[data-allClear]');
// let deleteButton = document.querySelector('[data-delete]');
// let equalToButton = document.querySelector('[data-equalTo]');
// let previousInputElement = document.querySelector('[data-previousInput]');
// let currentInputElement = document.querySelector('[data-currentInput]');
// let arithmeticOperators = document.querySelectorAll('.signs');
// var previousInput = 0;
// var currentInput = 0;
// var answer = 0;

// setUpButtons();
// getOperatorButton();

// function setUpButtons(){
//     let numberButtons = document.querySelectorAll('[data-number]');
// for(let i = 0; i < numberButtons.length; i++){
//     numberButtons[i].addEventListener('click', function(){
//         currentInputElement.innerHTML =  currentInputElement.innerHTML + numberButtons[i].innerHTML; 
//     })
// }
// }

// function getOperatorButton(){
//   for(let i = 0; i < arithmeticOperators.length; i++){
//     arithmeticOperators[i].addEventListener('click', function(){
//       previousInput = currentInput;
//       currentInput = parseInt(currentInputElement.innerHTML);
//       currentInputElement.innerHTML = '';
//        if(arithmeticOperators[i].innerHTML === '+'){
//            addition();
//          } else if(arithmeticOperators[i].innerHTML === '*'){
//           multiply();
//          } else if(arithmeticOperators[i].innerHTML === '-'){
//           substract();
//          } else if(arithmeticOperators[i].innerHTML === '/'){
//           divide();
//          }
//     });
//   } ;  
// } 

// function addition() {
//   answer = parseInt(answer) +  parseInt(currentInput);
//   if(previousInput > 0){
//   currentInputElement.innerHTML = answer;
//   }
// }

// function multiply(){
//   answer = parseInt(answer) * parseInt(currentInput);
//   if(previousInput > 0){
//   currentInputElement.innerHTML = answer;
//   } 
// }

// function substract(){
//   answer = parseInt(answer) -  parseInt(currentInput);
//   if(previousInput > 0){
//   currentInputElement.innerHTML = answer;
//   } 
// }

// function divide(){
//   answer = parseInt(answer) +  parseInt(currentInput);
//   if(previousInput > 0){
//   currentInputElement.innerHTML = answer;
//   } 
// }

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[signs]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    
};
clear() {
}

delete() {
}

appendNumber(number) {
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
}
// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })