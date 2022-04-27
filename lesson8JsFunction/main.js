// ============= task 1 =============
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б (S = ab)

// function rectangle(a, b) {
//     let result = a * b;
//     return result;
// }
// let area = rectangle(12, 10)
// console.log(area);

//___________________________________

// ============= task 2 =============
//- створити функцію яка обчислює та повертає площу кола з радіусом r (S = π * R^2)

// function circle(π, r) {
//     let result = π * (r * r); // не зрозумів, як підвести число до квадрату R^2 - не спрацювало ((
//     return result;
// }
// let area = circle(3.14, 2);
// console.log(area);

//___________________________________

// ============= task 3 =============
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r  (S = 2 π r ( r + h))

// function cylinder(π, r, h) {
//      let result = 2 * π * r * (r + h);
//      return result;
// }let area = cylinder(3.14, 2, 5);
//  console.log(area);

//___________________________________

// ============= task 4 =============
//- створити функцію яка приймає масив та виводить кожен його елемент

// function arrayItems(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayItems(numbers);

//___________________________________

// ============= task 5 =============
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

 // function paragraph(text) {
 //     document.write(`<p>${text}</p>`);
 // }
 // paragraph(`hi, this function creates a paragraph`);

//___________________________________

// ============= task 6 =============
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(arg) {
//     document.write(`<ul>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// list(`hello my dear friend`);

//___________________________________

// ============= task 7 =============
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(arg, size) {
//      document.write(`<ul>`);
//         for (let i = 0; i < size; i++) {
//             document.write(`<li>${arg}</li>`);
//         }
//      document.write(`</ul>`);
//  }
//  list(`hello my dear friend`, 3);

//___________________________________

// ============= task 8 =============
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//  та будує для них список

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function listArray(array) {
//     document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//    }
//     document.write(`</ul>`);
// }
// listArray(numbers);

//___________________________________

// ============= task 9 =============
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//  та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
       id: 1,
        name: `vasya`,
        age: 16
    },
    {
        id: 2,
        name: `kolya`,
        age: 18
    },
    {
        id: 3,
        name: `maryna`,
        age: 17
    },
    {
        id: 4,
        name: `sveta`,
        age: 15
    }
];
function listArray(array) {
    for (const user of array) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
 //       console.log(user)
   }
}
listArray(users);

//___________________________________

// ============= task 10 =============
//- створити функцію яка повертає найменьше число з масиву

let numbers = [45, 8, -9, 10];

function getMinNum(array) {
    let minNum = array[0];
    for (const arrItem of array) {
        if (arrItem < minNum){
            minNum = arrItem
        };
    }
    return minNum;
}
console.log(getMinNum(numbers));

//___________________________________

// ============= task 11 =============
//- створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function calc(array) {
    let result = 0;
    for (const arrayElement of array) {
        result = result + arrayElement;

    }
    return result;
}
console.log(calc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));