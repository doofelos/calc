let input1 = '';
let operator = '';
let input2 = '';
let output = '';


const number = document.querySelectorAll('.num');
const opera = document.querySelectorAll('.opera');

function clicker1() {
    for (numb of number) {
    numb.addEventListener('click', (e) => {
    let val = e.target.innerText;
    return input1 += val;
});
}}
clicker1();

function clicker2() {
    for (numb of number) {
    numb.addEventListener('click', (e) => {
    let val = e.target.innerText;
    return input2 += val;
});
}}
clicker2();

function clicker3() {
    for (oper of opera) {
    oper.addEventListener('click', (e) => {
    let val = e.target.innerText;
    return operator = val;
});
}}
clicker3();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    input1 = "";
    input2 = "";
    operator = "";

    return output = `${input1} ${operator} ${input2}`;
}


// store clicked value in inputs/operator
// tie functions to operators
// tie enter to output