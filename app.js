// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// textBox.addEventListener("keydown", (event) => {
//     output.textContent = `you pressed "${event.key}".`;
// });
// различие между
// const button = document.getElementById("button")
// button.addEventListener("click", (event) => {
//     console.log("you clicked me", event)
// })
// и
// button.onclick = () => {
//     console.log("you clicked me", event)
// };
// function clickMe() {
//     console.log("ypu clicked me")
// }

// const input = document.querySelector(".input")
// const greeting = document.querySelector(".greeting")
// input.addEventListener("change", (event) => {
//     greeting.textContent = `hiii, ${event.target.value}`
// })

// let firstname = "anel"
// let age = 23
// let isTeacher = true
// let status

// function greeting(){
//     console.log(`hi, my name is ${firstname}`)
// }

let Person = {
    firstname: "anel",
    lastname: "abildiyeva",
    age: 18,
    isTeacher: false,
    isStudent: true,
    status: undefined,
    lang: ["kaz", "rus", "eng"],
    faculty: "translation studies",
    haircolor: "black",
    eyecolor: "brown, almost black",
    weight: 45,
    height: 155,

    greeting(){
        console.log(`hi, my name ${this.firstname}`)
    },
} 

let cats = {
    Mandarinka: {
        poroda:"i don't know :D",

        age: 6,

        color: ["black", "white", "brown"],

        gender: "female",

        isKids: false,
    },
    
    Pushok: {
        poroda: "british",
        age: 4,
        color: ["black", "gray"],
        gender: "male"
    },

    Murka: {
        poroda: "i don't know :D",
        age: 6,
        color: "black",
        gender: "male"
    },

    Bezzubiy: {
        poroda: "i don't know :D",
        age: 4,
        color: "black",
        gender: "male"
    }

}
// Person.firstname = "Saule"
// Person.lang.push("ger")
// console.log(Person)

// Person.skills = ["js", "html", "css"]
// Person.greeting()

// let _name = Person.firstname
// console.log(_name)

// console.log(Person.firstname)
// console.log(Person["age"])

for (let key in cats){
    console.log(key)
    console.log(cats[key])
}

// console.log(Person.hasOwnProperty("firstname"))
// console.log(Person.hasOwnProperty("toString"))