// // типы: string строковые, numbers, boolean
// let firstname = 'Anel'
// firstname = 'who?'
// // // константа не меняется как let
// const age = 18

// let isStudent = true

// let isCriminal = false

// console.log(firstname, age, isStudent)

// console.log(typeof firstname)

// camelCase

// let myName = 'Anel'

// let isRealStudent

// это все разные операторы
// let my_name
// let _name
// let name_
// let $name

// так писать нельзя
// let my-name
// let 1name


// let a = 17
// let b = 10

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// console.log(17 % 10)

// console.log(10 % 10)

// let text = prompt()

// console.log(text)

// let firstname = "Anel"
// let lastname = "ME"

// console.log(firstname+' '+lastname)



// let firstname = prompt("Напишите имя")
// let lastname = prompt("и фамилию")

// console.log ('Hello'+ ' ' +firstname + ' '+lastname +'!')



// let a = '10'
// let b = 10

// console.log(typeof a, " - type '10' ")
// console.log(typeof b, " - type 10 ")



// number()

// let a = '10'

// console.log(typeof a)

// let num1 = +prompt("first num:")
// let num2 = +prompt("sec num:")


//  первый способ
// console.log(Number(num1) + Number(num2))

// второй способ
// console.log(num1 + num2)
// console.log(num1 / num2)
// console.log(num1 - num2)
// console.log(num1 * num2)


// function greeting(){
//     console.log('how r u')
// }

// greeting()
// greeting()
// greeting()

// function quad(a){
//     return a * a
// }

// let res = quad(19)

// console.log(res)


// 1 exercise
let inputEl1 = document.getElementById("my-first-input")
let inputEl2 = document.getElementById("my-second-input")
let button = document.getElementById("button")
let resultEl = document.getElementById("result")
console.log(resultEl.textContent)
button.onclick=function () {
    let num = Number(inputEl1.value) + Number(inputEl2.value)
    resultEl.textContent = num
}

// 2 exercise
let inputNum = document.getElementById("inputNum")
let buttonNum = document.getElementById("buttonNum")
let resultNum = document.getElementById("result2")
buttonNum.onclick = function(){
  if (inputNum.value > 0) {
    resultNum.textContent = "Positive"
  } else if (inputNum.value == 0) {
    resultNum.textContent = "They are even"
  } else {
    resultNum.textContent = "Negative"
  }
}




// 3 задание
let inputEvenCheck = document.getElementById("inputEvenCheck")
let buttonEvenCheck = document.getElementById("buttonEvenCheck")
let resultEvenCheck = document.getElementById("result3")
buttonEvenCheck.onclick = function(){
  if (+inputEvenCheck.value % 2 == 0) {
    resultEvenCheck.textContent ="Even"
  } else if (+resultEvenCheck % 2 !=1) {
    resultEvenCheck.textContent ="Odd"
  }
}


// 4 задание

document.getElementById("calculate").addEventListener("click", function () {
    let input1Value = Number(document.getElementById("input1").value);
    let input2Value = Number(document.getElementById("input2").value);
  
    let plusResult = input1Value + input2Value;
    let minusResult = input1Value - input2Value;
    let multiplicationResult = input1Value * input2Value;
  
    let divisionResult =
      input2Value !== 0 ? input1Value / input2Value : "error";
  
    document.getElementById("plusResult").textContent =
      "Addition: " + plusResult;
    document.getElementById("minusResult").textContent =
      "Subtraction: " + minusResult;
    document.getElementById("multiplicationResult").textContent =
      "Multiplication: " + multiplicationResult;
    document.getElementById("divisionResult").textContent =
      "Division: " + divisionResult;
})

// 5 задание

document.getElementById("getFat").addEventListener("click", function () {
    let height = Number(document.getElementById("height").value);
    let waist = Number(document.getElementById("waist").value);
    let gender = document.getElementById("gender").value;
    let fatPercentage;
    if (waist !== 0) {
      if (gender==="male") {
        fatPercentage =64-(20*height)/waist;
      }
    } 
    else {
      fatPercentage = "error";
    }
    document.getElementById("fatPercentage").textContent =
      "Fat Percentage:" + fatPercentage.toFixed(2) + "%";
  })