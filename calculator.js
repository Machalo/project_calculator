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
let virgule = false;

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

    if (calcul > 999999999 || calcul < -999999999) {
        return calcul.toExponential(6);
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
            virgule = false;
            screenResult.textContent = 0;
            screenOp.textContent = 0;
        }
        if (operator.length == 0){
            if (button.className == "number" && firstNum.length <= 9) {
                firstNum += button.id;
                screenOp.textContent = firstNum;
                screenResult.textContent = 0;
            }
            else if (button.className == "operator" && (firstNum.length >= 1 || (!isNaN(firstNum) && firstNum != ""))) {
                operator += button.id;
                screenOp.textContent = operator;
                virgule = false;
            }
            else if (button.className == "dot" && firstNum.length >= 1 && virgule == false) {
                firstNum += button.id;
                screenOp.textContent = firstNum;
                virgule = true;
            }
            else if(button.id == "backspace" && !isNaN(firstNum)){
                firstNum = firstNum.slice(0,-1);
                screenOp.textContent = firstNum;
            }
        }
        else if (operator.length >= 1){
            if (button.className == "number" && secondNum.length <= 9) {
                secondNum += button.id;
                screenOp.textContent = secondNum;
            }
            else if (button.className == "equal" && secondNum.length >= 1){
                let calc = operate(firstNum,operator,secondNum)
                screenResult.textContent = calc;
                firstNum = calc;
                operator = "";
                secondNum = "";
                virgule = false;
            }
            else if (button.className == "dot" && secondNum.length >= 1 && virgule == false) {
                secondNum += button.id;
                screenOp.textContent = secondNum;
                virgule = true;
            }
            else if (button.id == "backspace" && secondNum.length >= 1){
                secondNum = secondNum.slice(0,-1);
                screenOp.textContent = secondNum;
            }
        }        
    })
})





