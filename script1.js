let input1 = '';
let input2 = '';
let input3 = '';
let result = '';
let operator = '';
let operator2 = '';
let display = '';

const number = document.querySelectorAll('.num');
const opera = document.querySelectorAll('.opera');
const out = document.querySelector('.output');
const clr = document.querySelector('.clr');
const enter = document.querySelector('.enter');

for (numb of number) {
    numb.addEventListener('click', (e) => {
        let val = e.target.innerText;
        if (operator === '') {
            input1 += val;
            out.textContent = input1;
        }
        else if (operator != '' && input2 == '') {
            input2 += val;
            enter.addEventListener('click', (e) => {
                result = operate(input1, input2);
            });
            console.log('2nd');
            out.textContent = input2;
        }
        else if (input2 != '' && operator != '') {
            input3 += val;
            out.textContent = input3;
            enter.addEventListener('click', (e) => {
                result = operate(result, input3)
            });
            console.log('3rd');
            out.textContent = result;
        }
    });
    }

    //first click result = (input1 + input2)
    //second result = result + inp3)
    //subsequent result = result + inp4)



function operate(x, y) {
    if (operator === '+') {
        let sum = Number(x) + Number(y);
        out.textContent = sum;
        return sum
    }
    else if (operator === '-') {
        let diff = Number(x) - Number(y);
        out.textContent = diff;
        return diff
    }
    else if (operator === '*') {
        let product = Number(x) * Number(y);
        out.textContent = product;
        return product
    }
    else if (operator === '/') {
        let quotient = Number(x) / Number(y);
        out.textContent = quotient;
        return quotient
    }}

for (oper of opera) {
    oper.addEventListener('click', (e) => {
        operator = e.target.innerText;
    });
    }

clr.addEventListener('click', (e) => {
    input1 = '';
    input2 = '';
    input3 = '';
    operator = '';
    out.textContent = '0';
})

// PSEUDO
// input/operator/ouput/display values set as null
// if click without an operator, assign value to input1
// if single operator value exists, STOP assigning to input1, START assign to input2 
// if click enter, evaluate "input1 operator input2"
// if click clear, clear all values

//NEXT
// hold output for subsequent operators (3+2-6)
// can do this by having 2 variables, reuse second if first  != ''
//if input 2 != '' and click operator, treat click as enter and throw result in input1?
// make look nice
// add positive/negative
// add remaining operators

//BLOCKER
//when try to input3, appends to input2
//adds input3 attempt as "input2 and click + input1"
//input 2 can't accept more than one char