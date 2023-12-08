

// for (let i = 1; i <= num; i++){
//     let a = num/2;
//     if (i===a){
//         continue;
//     }

//     console.log(i)
// }

// let paragraph = document.querySelector("div p")
// console.log(paragraph)

// paragraph.style.backgroundColor = "yellow";
// paragraph.style.fontSize = "200%";
// paragraph.style.padding = "18px";
// paragraph.style.boxShadow = " 3px 3px 6 px black";

// console.log(paragraph)

// let button = document.querySelector("#button")

// function showResult(){
//     let newElement = document.createElement("p")
//     newElement.textContent = "you clicked me"

//     document.body.append(newElement)

//     console.log("click", showResult)
// }

// let button = document.querySelector("#button")
// let input = document.querySelector("#input")



// function getSquare(){
//     let num = 15
//     let i = 2

//     while (i*i < num){
//         let result = document.createElement("p")
//         result.textContent = '${i*i}'
//         document.body.append(result)
        
//         ++i
//      }
// }

// button.addEventListener('click', getSquare)


// 1 exercise
function Factorial() {
    let inputNumber = document.getElementById("numberInput").value;

    let factorial = 1;
    for (let i = 2; i <= inputNumber; i++) {
        factorial *= i;
    }
    let resultElement = document.createElement("p");
    resultElement.textContent = factorial;
    document.body.append(resultElement)
}


// 2 exercise
function degree() {
    let degree = document.getElementById("degree").value;

    let result1 = 1;
    for (let i = 0; i < degree; i++) {
        result1 *= 2;
    }

    let resultElement = document.getElementById("result1");
    resultElement.textContent = result1;
}


// 3 exercise
function find() {
    let input = document.getElementById("input").value;

    let small = 2;
    while (small <= input) {
        if (input % small === 0) {
            break;
        }
        small++;
    }

    let resultElement = document.getElementById("result2");
    resultElement.textContent = small;
}


// 4 exercise
function findDivide() {
    let inputNumber = document.getElementById("number").value;

    let divide = [];
    for (let i = 1; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            divide.push(i);
            if (i !== inputNumber / i) {
                divide.push(inputNumber / i);
            }
        }
    }
    divide.sort((a, b) => a - b);
    
    let resultElement = document.getElementById("result3");
    resultElement.textContent = `Делители числа ${inputNumber}: ${divide.join(', ')}`;
}


// 7 exercise
function check() {
    let inputNumber = document.getElementById("Prime").value;

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    let resultElement = document.getElementById("result7");
    if (isPrime) {
        resultElement.textContent = `${inputNumber} - prime number`;
    } else {
        resultElement.textContent = `${inputNumber} - not prime number`;
    }
}