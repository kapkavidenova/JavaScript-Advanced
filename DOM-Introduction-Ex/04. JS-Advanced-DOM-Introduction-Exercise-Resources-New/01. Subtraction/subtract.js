function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let result = firstNum - secondNum;

    let sub = document.getElementById('result');
    sub.textContent = result;
    //console.log(result);
}
sabtract(5,4);