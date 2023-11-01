let input1 = '';
let input2 = '';
let result = '';
let useOperator = '';
let operator1 = '';
let operator2 = '';
let currentOperand = '';

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
            console.log('input1');
            
        }
        // 
        else if (input2 === '' && operator2 === '') {
            input2 += val;
            output.textContent = input2;
            console.log('input2');
    }
        else  {
            input2 += val;
            output.textContent = input2;
            console.log('input2else');
    }
}
    )
}

// 3 
// * 
// 6 
// *  = 18
// 9
// enter = 162
// + = 1458


for (opera of operator) {
    opera.addEventListener('click', (e) => {
        if (operator1 === ''){
            operator1 = e.target.innerText;
            currentOperand = operator1;
            console.log('opera1');
        }
        else if (operator2 === ''){
            result = operate(input1, input2);
            operator2 = e.target.innerText;
            currentOperand = operator2;
            input2 = '';
            console.log('opera2');
        }
        else if (input2 != '' && operator2 != '') {
            result = operate(result, input2);
            operator2 = e.target.innerText;
            currentOperand = operator2;
            input2 = '';
            console.log('opera3');
        }
        else if (input2 === '' && operator2 != '') {
            operator2 = e.target.innerText;
            currentOperand = operator2;
            input2 = '';
            console.log('opera4');
        }
    });
    }

//console.log(`input1:${input1}\ninput2:${input2}\noperator1:${operator1}\noperator2:${operator2}\ncurrent:${currentOperand}\nresult: ${result}`)
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


enter.addEventListener('click', (e) => {
    if (operator1 != '' && operator2 === '') {
     result = operate(input1, input2);
     console.log('enter1');
    }
    else if (operator2 != '') {
     result = operate(result, input2);
     console.log('enter2');
     input2 = '';
    }
    });

clr.addEventListener('click', (e) => {
    input1 = '';
    input2 = '';
    result = '';
    operator1 = '';
    operator2 = '';
    output.textContent = '0';
})
