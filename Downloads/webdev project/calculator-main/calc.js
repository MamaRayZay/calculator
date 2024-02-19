document.addEventListener('DOMContentLoaded', () => {
    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
    const equalsButton = document.querySelector('[data-equals]');
    const deleteButton = document.querySelector('[data-delete]');
    const allClearButton = document.querySelector('[data-all-clear]');
    const previousOperandTextElement = document.querySelector('[data-previous-operand]');
    const currentOperandTextElement = document.querySelector('[data-current-operand]');

    let currentOperand = '';
    let previousOperand = '';
    let operation = null;

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.innerText);
            updateDisplay();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            chooseOperation(button.innerText);
            updateDisplay();
        });
    });

    equalsButton.addEventListener('click', button => {
        compute();
        updateDisplay();
    });

    allClearButton.addEventListener('click', button => {
        clear();
        updateDisplay();
    });

    deleteButton.addEventListener('click', button => {
        deleteOne();
        updateDisplay();
    });

    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + number.toString();
    }

    function chooseOperation(selectedOperation) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = selectedOperation;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
    }

    function updateDisplay() {
        currentOperandTextElement.innerText = currentOperand;
        if (operation != null) {
            previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
        } else {
            previousOperandTextElement.innerText = '';
        }
    }

    function clear() {
        currentOperand = '';
        previousOperand = '';
        operation = undefined;
    }

    function deleteOne() {
        currentOperand = currentOperand.toString().slice(0, -1);
    }
});
