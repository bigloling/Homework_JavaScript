### NORMAL level

#### Task 1 💻

Написать перебор от 1 до 20, где выведутся все числа кратные трём.

> Для вычисления кратности обратите внимание на оператор %

#### Solution

```javascript
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) console.log(i)
    }
```



#### Task 2 💻

Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
Для решения этой задачи нам помогут логические операторы **`|| &&`**.

```javascript
    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true
```

> Ответ поместите в переменную **shouldGoToWork**

#### Solution

```javascript
    if (key === true && documents === true && pen === true) {
        if (apple !== orange) {
            console.log(shouldGoToWork = true)
        } else {
            console.log(shouldGoToWork = false)
        }
    } else shouldGoToWork = false
```



#### Task 3 (boolean operators, conditionals)

Напишите программу, которая спрашивает у пользователя номер года, а затем выводит на 
экран, високосный ли это год.

#### Solution

```javascript
    let inputYear = prompt("Введите год: ")

    if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
        alert("Високосный")
    } else alert("Не високосный")
```



#### Task 4 💻

Запросить у пользователя число: 

    1. Если число делится без остатка на 5 выводим сообщение Fiz
    2. Если число делится без остатка на 3 выводим сообшение Buz
    3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

#### Solution

```javascript
    let inputNum = prompt("Введите число: ")

    if (inputNum % 5 === 0 && inputNum % 3 === 0) alert("FizBuz")
    else if (inputNum % 5 === 0 && inputNum % 3 !== 0) alert("Fiz")
    else if (inputNum % 3 === 0 && inputNum % 5 !== 0) alert("Buz")
    else alert("NoFizNoBuz")
```



#### Task 6 💻

Используя конструкцию `switch`, напишите программу, которая спрашивает у пользователя 
номер месяца и года, а затем выводит на экран количество дней в этом месяце.

Если номер месяца введён неверно - напишите об этом в консоль (можно использовать 
`console.error()`)

> используйте метод для определения високосного года из задания 3

#### Solution

```javascript
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
```



### ADVANCED level

#### Task 1 👨‍🏫 

Напишите программу, которая выполняет следующие операции: 

1. Запрашивает у пользователя число.
2. Последовательно задает вопрос: 
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
> ((((6 - 10) + 5) * 20) / 2 = 110)

#### Solution

```javascript
    let userNum = +prompt("Введите число: ")
    let resultNum = userNum
    let minusNum = +prompt("Сколько отнять?")
    let plusNum = +prompt("Сколько прибавить?")
    let multiplyNum = +prompt("На сколько умножить?")
    let divideNum = +prompt("На сколько разделить?")

    resultNum = (((resultNum - minusNum) + plusNum) * multiplyNum) / divideNum

    alert(`(((${userNum} - ${minusNum}) + ${plusNum}) * ${multiplyNum}) / ${divideNum} = ${resultNum}`)
```



#### Task 2 👨‍🏫

Написать программу, которая будет выводить в консоль лесенку.

```
    #
    ##
    ###
    ####
    #####
    ######
```

#### Solution

```javascript
    for (let i = ""; i.length <= 6; i += "#") {
        console.log(i)
    }
```



#### Task 3 👨‍🏫 

Дополните результат задания 6 так, чтобы программа спрашивала пользователя до тех пор, пока он не введёт корректное значение или напишет в окошко `prompt()` специальное стоп-слово.

> Вам понадобится бесконечный цикл

#### Solution

```javascript
    let userMonth = prompt("Введите номер месяца")
    let stopWord = 'Stop-Word'

    while ((userMonth > 12 || userMonth < 1) && userMonth != stopWord) {
        alert("Неверно введен номер месяца")
        userMonth = prompt("Введите номер месяца")
    }

    if (userMonth == stopWord) {
        alert("Введено стоп-словоо")
    } else {
        switch (userMonth) {
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
```
