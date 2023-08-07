// Task 1

function getSum(num) {
    let result = 0

    for (; num >= 1; num--) result += num

    return result
}



// Task 2

let overPayment = (creditSum) => creditSum * 0.17 * 5



// Task 3
function getSum(a, b) {
    let res = 0
    let min, max

    if (a > b) { max = a; min = b }
    else if (a < b) { max = b; min = a }
    else return a

    for (min; min <= max; min++) {
        res += min
    }

    return res
}



// Task 4

let foo = () => console.log('foo')
let boo = () => console.log('boo')

let fooboo = (bool, funFoo, funBoo) => bool ? funFoo() : funBoo()



// Task 5

const mul = (a, b) => a * b

function withNumberArgs(func) {
    return function(a, b) {
        return typeof(a) == 'string' || typeof(b) == 'string' ? 0 : func(a, b)
    }
}

const safeMul = withNumberArgs(mul)

safeMul(5, 5)
safeMul(5, "5")




// ADVANCED level

// Task 1

function triangle(a, b, c) {
    let max = Math.max(a, b, c)
    return max < a + b + c - max ? true : false
}



// Task 2

const balance = prompt("Enter your bank account balance:")

const phoneCost = 2000
const headphonesCost = 400
const powerBankCost = 100
const phoneChargerCost = 50
const tax = balance * 0.13
let purchaseAmount = 0


function purchase(balance) {
    let resultBalance = balance

    while(resultBalance > 0) {
        let choice = prompt(`Your balance: ${resultBalance}. With tax: ${resultBalance - tax}\nSelect products:\n1. Phone - 2000\n2. Headphones - 400\n3. Power bank - 100\n4. Phone charger - 50\n5. Stop selecting`)
        if (choice === '5') break;
        else {
            switch (choice) {
                case '1':
                    purchaseAmount += phoneCost
                    resultBalance -= phoneCost
                    alert("Item added")
                    break;
                case '2':
                    purchaseAmount += headphonesCost
                    resultBalance -= headphonesCost
                    alert("Item added")
                    break;
                case '3':
                    purchaseAmount += powerBankCost
                    resultBalance -= powerBankCost
                    alert("Item added")
                    break;
                case '4':
                    purchaseAmount += phoneChargerCost
                    resultBalance -= phoneChargerCost
                    alert("Item added")
                    break;
                default:
                    alert("Invalid input")
                    break;
            }
        }
    }


    alert(`Purchase amount (with tax): ${purchaseAmount + tax}\nYour balance: ${balance}`)
    
    if(balance - tax < purchaseAmount) alert("Not enough money to buy")
    else alert("Purchase successful")
}

purchase(balance)



// Task 3

let m = prompt("Enter the Length of the chocolate bar:")
let n = prompt("Enter the Width of the chocolate bar:")

function splitting(m, n) {
    while (m < 1 || n < 1 || m % 1 !== 0 || n % 1 !== 0) {
        alert("Invalid input. Try again")
        m = prompt("Enter the Length of the chocolate bar:")
        n = prompt("Enter the Width of the chocolate bar:")
    }

    alert(`Minimum number of fractures for a chocolate bar of size ${m} x ${n}: ${Number(m) + Number(n) - 2}`)
}

splitting(m, n)