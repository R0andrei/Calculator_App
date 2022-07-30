var xDisplay = document.getElementById("calcText");
var index = 1;
var numberIn = [];
var no = null;
var check = false;

function newNumber(n) {
    if(check) {
        xDisplay.innerText = n;
        check = false;
    } else {
    xDisplay.innerText += n;
    numberIn[index - 1] = n;
    index++;
}
}

function deleteAll() {
    xDisplay.innerText = null;
    no = null;
    index = 1;
    numberIn = [];
    check = false;
}

function addNumber() {
    eqNumber();
    check = false;
    if (no === null) {
        xDisplay.innerText = "";
    } else {
        xDisplay.innerText = no + " + ";
    }
}

function subNumber() {
    eqNumber();
    check = false;
    if (no === null) {
        xDisplay.innerText = "-";
    } else {
        xDisplay.innerText = no + " - ";
    }
}

function multNumber() {
    eqNumber();
    check = false;
    if (no === null) {
        xDisplay.innerText = "";
    } else {
        xDisplay.innerText = no + " * ";
    }
}

function divNumber() {
    eqNumber();
    check = false;
    if (no === null) {
        xDisplay.innerText = "";
    } else {
        xDisplay.innerText = no + " / ";
    }
}

function eqNumber() {
    let len = numberIn.length;
    let multNo = 0;
    let divNo = 0;
    check = true;
    if (xDisplay.innerText.includes("+")) {
        for (let i = 0; i <= index - 2; i++) {
            no += Number(numberIn[i]) * Math.pow(10, index - 2 - i);
        }
        index = 1;
        numberIn = [];
        xDisplay.innerText = no;
    } else if (xDisplay.innerText.includes("*")) {
        for (let i = 0; i <= index - 2; i++) {
            multNo += Number(numberIn[i]) * Math.pow(10, index - 2 - i);
        }
        if (len !== 0) {
            no *= multNo;
            index = 1;
            numberIn = [];
            xDisplay.innerText = no;
        }
    } else if (xDisplay.innerText.includes("/")) {
        for (let i = 0; i <= index - 2; i++) {
            divNo += Number(numberIn[i]) * Math.pow(10, index - 2 - i);
        }
        if (len !== 0) {
            no /= divNo;
            index = 1;
            numberIn = [];
            xDisplay.innerText = no;
        }
    } else if (xDisplay.innerText.includes("-")) {
        for (let i = 0; i <= index - 2; i++) {
            no -= Number(numberIn[i]) * Math.pow(10, index - 2 - i);
        }
        index = 1;
        numberIn = [];
        xDisplay.innerText = no;
    } else {
        for (let i = 0; i <= index - 2; i++) {
            no += Number(numberIn[i]) * Math.pow(10, index - 2 - i);
        }
        index = 1;
        numberIn = [];
    }
}