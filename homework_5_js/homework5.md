### NORMAL level

## Disclaimer

**Важно**: циклы `for`, `for in`, `for of` под запретом! 
Исключение составляют задачи, где использование явно требуется по условию.


#### Task 1 🖥

Дан массив:

```JS
    const colors = ['red', 'green', 'blue']
```

Выведите в консоль его длину.

#### Solution

```javascript
console.log(colors.length)
```



#### Task 2 🖥

Дан массив:

```JS
    const animals = ['monkey', 'dog', 'cat']
```

Выведите в консоль его последний элемент вне зависимости от его длинны.

#### Solution

```javascript
console.log(animals[animals.length - 1])
```



#### Task 3 🖥

Дан массив:

```JS
    const numbers = [5, 43, 63, 23, 90]
```

Удалите все элементы в массиве и выведите в консоль полученный результат.
Длина пустого массива должна быть равна 0.

> Решите двумя способами - через метод массива и через свойство

#### Solution

```javascript
numbers.splice(0, numbers.length) // 1

while (numbers.length > 0) numbers.pop() // 2

numbers = [] // 3

numbers = numbers.slice(0, 0) // 4
```



#### Task 4 🖥

Дан массив:

```JS
    const students = ['Polina', 'Dasha', 'Masha']
```

Используя только методы массива, сделайте следующее:
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.

#### Solution

```javascript
students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')

console.log(students)
```



#### Task 5 🖥

Дан массив:

```JS
    const cats = ['Gachito', 'Tom', 'Batman']
```

Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**, 
а затем через **`forEach()`**

#### Solution

```javascript
for (let i = 0; i < cats.length; i++) console.log(cats[i])

for (cat of cats) console.log(cat)

cats.forEach(cat => console.log(cat))
```



#### Task 6 🖥

```JS
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
```

+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`**

> Соедините массив двумя способами - через метод и через spread

#### Solution

```javascript
const numbers1 = evenNumbers.concat(oddNumbers)
const numbers2 = [...evenNumbers, ...oddNumbers]

numbers1.indexOf(8)
```



#### Task 7 🖥

Дан массив:

```JS
    const binary = [0, 0, 0, 0]
```
 
Превратите данный массив в строку.

> [0, 0, 0, 0] -> '0101010'

#### Solution

```javascript
console.log(binary.join('1'))
```



#### Task 8 🖥

Есть массив профилей:
```JS
const profiles = [
  {
    name: 'John',
    data: {
      friends: {
        count: 25,
        list: []
      },
    }
  },
  {
    name: 'Mariam',
    data: {
      friends: {
        count: 1,
        list: []
      },
    }
  },
  {
    name: 'Boris',
    data: {
      friends: {
        count: 5,
        list: []
      }
      blocked: true,
    }
  },
  
  {
    name: 'Alice',
    data: null,
  },
]
```

Создайте новый массив, в котором будут только незаблокированные профили в которых есть данные (`data`), 
профили должны быть отсортированы по убыванию лайков.

#### Solution

```javascript
const sortedProfiles = profiles.filter(profile => !profile.data?.blocked && profile.data).sort((p1, p2) => p2.data.friends.count - p1.data.friends.count)
```



#### Task 9 🖥

Реализуйте функцию которая будет проверять, является ли слово палиндромом.

#### Solution

```javascript
const palindrome = (str) => str == str.split('').reverse().join('') ? console.log('Palindrome') : console.log('Not a palindrome')
```



#### Task 10 🖥

```JS
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
```

> Выведите в консоль среднее значение чисел в многомерном массиве.

#### Solution

```javascript
// Среднее значение для всего массива
matrix.flat().reduce((acc, arr) => acc + arr) / matrix.flat().length

// Без flat()
const flatMat = matrix.reduce((arr1, arr2) => arr1.concat(arr2))
flatMat.reduce((acc, arr) => acc + arr) / flatMat.length

// Среднее значение для каждого подмассива
matrix.forEach((arr) => {
    console.log(arr.reduce((acc, num) => acc + num) / arr.length)
})
```



#### Task 11 🖥

Дан массив:
```JS
   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
```

За один проход, создайте два массива. В один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. Ожидается решение через `reduce()`.

```JS
   const [positive, negative] = getSplit(mixedNumbers);
   
   console.log(positive); // [24, 43, 0, 412, 4]
   console.log(negative); // [-14, -89, -1]
```

#### Solution

```javascript
function getSplit(arr) {
    const [positive, negative] = arr.reduce((acc, num) => {
            num < 0 ? acc[1].push(num) : acc[0].push(num)
            return acc
        }, [[],[]])
    return [positive, negative]
}
```



#### Task 12 🖥

Создайте функцию `fromKebabToCamelCase(val)`:

```JS
fromKebabToCamelCase("kebab-case") == 'kebabCase';
fromKebabToCamelCase("-webkit-appearance") == 'WebkitAppearance';
fromKebabToCamelCase("use-style-decorator") == 'useStyleDecorator';
```

> split(), map(), join()

#### Solution

```javascript
function fromKebabToCamelCase(val) {
    let result = val.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')

    return !val.startsWith('-') ? result = result.charAt(0).toLowerCase() + result.slice(1) : result
}
```



## Bonus content

#### Решение задачи 7 из предыдущей домашки

Опишите по пунктам, как отработает этот код?
Важно ответить на вопрос, что будет записано в `this` и почему?
```JS

// (0) JS нашёл и создал функцию `makeProfile`
function makeProfile() {
  return {
    name: "John",
    self: this
  };
}
// (1) запуск функции `makeProfile()`
/**
 * return {
    name: "John",
    self: this  // Функция вызвана не из объекта, а в глобальной области видимости
                // this === undefined в строгом режиме
                // this === window в нестрогом режиме, в браузере
  }

  вернули в строгом режиме
  {
    name: "John",
    self: undefined,
  }
  
  или в нестрогом режиме
  {
    name: "John",
    self: window
  }
 **/
let user = makeProfile();

/**
 * В строгом режиме
 * user = {
    name: "John",
    self: undefined,
  }
 * 
 * В нестрогом режиме
 * user = {
    name: "John",
    self: window
  }
 * 
 **/

alert( user.self.name ); // Каким будет результат?

// user.self === window - в нестрогом режиме
// user.self === undefined - в строгом режиме

// user.self.name === '' - в нестрогом режиме
// user.self.name -> Ошибка! - в строгом режиме

```