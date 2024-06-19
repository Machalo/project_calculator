function add(a,b){
    return Math.round((+a + +b)*1000 ) /1000 ;
}

function sub(a,b){
    return Math.round((+a - +b)*1000 ) /1000 ;
}

function mult(a,b){
    return Math.round((+a * +b)*1000 ) /1000 ;
}

function div(a,b){
    if (b == 0){
        return "Can't divide by 0"
    }
    else {
        return Math.round((+a / +b)*1000 ) /1000 ;
    }
}

let firstNum = "";
let operator = "";
let secondNum = "";
let equal = false;

function operate (numOne, ope, numTwo){
    let calcul = 0;
    if (ope === "+") {
        calcul = add(numOne,numTwo);
    }
    else if (ope === "-") {
        calcul = sub(numOne,numTwo);
    }
    else if (ope === "*") {
        calcul = mult(numOne,numTwo);
    }
    else if (ope === "/") {
        calcul = div(numOne,numTwo);
    }

    if (calcul.length >= 14 && !isNaN(calcul)) {
        return calcul.toExponential(0);
    }
    else{
        return calcul;
    }
}

const buttons = document.querySelectorAll("button");
const screenOp = document.getElementById("operation");
const screenResult = document.getElementById("result");



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "clear"){
            firstNum = "";
            operator = "";
            secondNum = "";
            equal = false;
            screenResult.textContent = 0;
        }
        if (operator.length == 0){
            if (button.className == "number" && firstNum.length <= 10) {
                firstNum += button.id;
                screenOp.textContent = firstNum;
                screenResult.textContent = 0;
            }
            else if (button.className == "operator" && firstNum.length >= 1) {
                operator += button.id;
                screenOp.textContent = operator;
            }
        }
        else if (operator.length >= 1){
            if (button.className == "number" && secondNum.length <= 10) {
                secondNum += button.id;
                screenOp.textContent = secondNum;
            }
            else if (button.className == "equal" && secondNum.length >= 1){
                screenResult.textContent = operate(firstNum,operator,secondNum);
                equal =true;
            }
        }
        
        if (equal == true){
            firstNum = "";
            operator = "";
            secondNum = "";
            equal = false;
        }
        
    })
})





