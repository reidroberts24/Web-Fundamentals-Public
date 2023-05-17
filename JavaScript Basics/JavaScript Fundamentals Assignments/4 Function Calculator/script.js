var firstNum = ""
var secondNum = ""
var operator = ""
var displayDiv = document.querySelector("#display");


function press(element) {
    if (operator != "") {
        secondNum += element.toString()
        displayDiv.innerText = secondNum
    } else {
        firstNum += element.toString()
        displayDiv.innerText = firstNum
    }
}


function setOP(element) {
    operator = element
    displayDiv.innerText = "0"
}

function calculate() {
    var result
    if (operator == '+') {
        result = Number(firstNum) + Number(secondNum)
        displayDiv.innerText = result
    } else if (operator == '-') {
        result = Number(firstNum) - Number(secondNum)
        displayDiv.innerText = result    
    } else if (operator == '*') {
        result = Number(firstNum) * Number(secondNum)
        displayDiv.innerText = result
    } else if (operator == '/') {
        result = Number(firstNum) / Number(secondNum)
        displayDiv.innerText = result
    }
    firstNum = result.toString()
    secondNum = ""
}


function clr() {
    firstNum = ""
    secondNum = ""
    operator = ""
    displayDiv.innerText = "0"
}