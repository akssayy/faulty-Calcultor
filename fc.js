
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let b = prompt("enter operation")
let c = prompt("enter second number")

let obj ={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1) {

    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}

else {

    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}