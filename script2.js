//3rd attempt

let input1 = '';
let input2 = '';
let result = '';
let useOperator = '';
let operator1 = '';
let operator2 = '';

const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.opera');
const output = document.querySelector('.output');
const clr = document.querySelector('.clr');
const enter = document.querySelector('.enter');

for (numb of number) {
    numb.addEventListener('click', (e) => {
        let val = e.target.innerText;
        // adds to input1 until operator1 is clicked
        if (input1 === '' || operator1 === '') {
            input1 += val;
            output.textContent = input1;
        }
        // 
        else if (input2 === '' && operator2 === '') {
            input2 += val;
            output.textContent = input2;
    }
        else  {
            input2 += val;
            output.textContent = input2;
    }
}
    )
}

//if operator2 != '', clear input2 and assign new numbers 


for (opera of operator) {
    opera.addEventListener('click', (e) => {
        if (operator1 === ''){
            operator1 = e.target.innerText;
            currentOperand = operator1;
        }
        else if (operator2 === ''){
            result = operate(input1, input2);
            operator2 = e.target.innerText;
            currentOperand = operator2;
            input2 = '';
        }
        else {
            result = operate(result, input2);
            operator2 = e.target.innerText;
            currentOperand = operator2;
            input2 = '';
        }
    });
    }
//console.log(`input1:${input1}\ninput2:${input2}\noperator1: ${operator1}\noperator2:${operator2}\ncurrent:${currentOperand}\nresult: ${result}`)
function operate(x, y) {
    if (currentOperand === '+') {
        let sum = Number(x) + Number(y);
        output.textContent = sum;
        return sum
    }
    else if (currentOperand === '-') {
        let diff = Number(x) - Number(y);
        output.textContent = diff;
        return diff
    }
    else if (currentOperand === '*') {
        let product = Number(x) * Number(y);
        output.textContent = product;
        return product
    }
    else if (currentOperand === '/') {
        let quotient = Number(x) / Number(y);
        output.textContent = quotient;
        return quotient
    }}

//when trying to add 3rd operand, applies it to input1 instead of result
// result = input1 + input2, then do result = result + input2

enter.addEventListener('click', (e) => {
    if (operator1 != '' && operator2 === '')
     result = operate(input1, input2);
    else if (operator2 != '')
     result = operate(result, input2);
    });

clr.addEventListener('click', (e) => {
    input1 = '';
    input2 = '';
    result = '';
    operator1 = '';
    operator2 = '';
    output.textContent = '0';
})

// 1st input = input1
// 2nd input = operator1
// 3rd input = input2
// 4th input a = enter display outputput and store in result
// 4th input b = operator2, display output and store in result
// 5th input a = input2 if number, operator2 if operator
// 5th input b = input2
// 6th input a = input2 if number, operator2 if operator
// 6th input b = 4th input a/b tree