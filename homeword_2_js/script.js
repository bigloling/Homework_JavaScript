// Task 1

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) console.log(i)
}



// Task 2

let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork

if (key === true && documents === true && pen === true) {
    if (apple !== orange) {
        console.log(shouldGoToWork = true)
    } else {
        console.log(shouldGoToWork = false)
    }
} else shouldGoToWork = false



// Task 3

let inputYear = prompt("Введите год: ")

if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
    alert("Високосный")
} else alert("Не високосный")



// Task 4

let inputNum = prompt("Введите число: ")

if (inputNum % 5 === 0 && inputNum % 3 === 0) alert("FizBuz")
else if (inputNum % 5 === 0 && inputNum % 3 !== 0) alert("Fiz")
else if (inputNum % 3 === 0 && inputNum % 5 !== 0) alert("Buz")
else alert("NoFizNoBuz")



// Task 5

let userMonth = +prompt("Введите номер месяца: ")

switch (userMonth) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log("31 день")
        break
    case "4":
    case "6":
    case "9":
    case "11":
        console.log("30 дней")
        break
    case "2":
        let userYear = prompt("Введите номер года: ")
        if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
            console.log("29 дней")
        } else console.log("28 дней")
        break
    default:
        console.log("Неверный ввод")
        break
}



// ADVANCED level

// Task 1

let userNum = +prompt("Введите число: ")
let resultNum = userNum
let minusNum = +prompt("Сколько отнять?")
let plusNum = +prompt("Сколько прибавить?")
let multiplyNum = +prompt("На сколько умножить?")
let divideNum = +prompt("На сколько разделить?")

resultNum = (((resultNum - minusNum) + plusNum) * multiplyNum) / divideNum

alert(`(((${userNum} - ${minusNum}) + ${plusNum}) * ${multiplyNum}) / ${divideNum} = ${resultNum}`)



// Task 2

for (let i = ""; i.length <= 6; i += "#") {
    console.log(i)
}



// Task 3

let userMonth1 = prompt("Введите номер месяца")
let stopWord = 'Stop-Word'

while (userMonth1 > 12 || userMonth1 < 1) {
    alert("Неверно введен номер месяца")
    userMonth1 = prompt("Введите номер месяца")
}

if (userMonth1 == stopWord) {
    alert("Введено стоп-словоо")
} else {
    switch (userMonth1) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            alert("31 день")
            break
        case "4":
        case "6":
        case "9":
        case "11":
            alert("30 дней")
            break
        case "2":
            let userYear = prompt("Введите номер года: ")
            if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
                alert("29 дней")
            } else alert("28 дней")
            break
    }
}