// ============= task 1 =============
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б (S = ab)

// let rectangle = (a, b) => a * b;
// console.log(rectangle(12, 10));

//___________________________________

// ============= task 2 =============
//- створити функцію яка обчислює та повертає площу кола з радіусом r (S = π * R^2)

// let circle = (π, r) => π * (r * r);
// console.log(circle(3.14, 2));

//___________________________________

// ============= task 3 =============
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r  (S = 2 π r ( r + h))

// let cylinder = (π, r, h) => 2 * π * r * (r + h);
// console.log(cylinder(3.14, 2, 5));

//___________________________________

// ============= task 4 =============
//- створити функцію яка приймає масив та виводить кожен його елемент

// let arrayItems = (array) => {
//      for (const arrayElement of array) {
//          console.log(arrayElement);
//      }
// }

//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  arrayItems(numbers);

//___________________________________

// ============= task 5 =============
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => document.write(`<p>${text}</p>`);
// paragraph(`hi, this function creates a paragraph`);
//___________________________________

// ============= task 6 =============
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//let list = (arg) => {
//    document.write(`<ul>`);
//        document.write(`<li>${arg}</li>`);
//        document.write(`<li>${arg}</li>`);
//        document.write(`<li>${arg}</li>`);
//    document.write(`</ul>`);
//}
    //list(`hello my dear friend`);

//___________________________________

// ============= task 7 =============
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (arg, size) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${arg}</li>`);
//     }
//     document.write(`</ul>`);
// }
//   list(`hello my dear friend`, 3);

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

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let listArray = (array) => {
//      document.write(`<ul>`);
//          for (const arrayElement of array) {
//              document.write(`<li>${arrayElement}</li>`);
//         }
//      document.write(`</ul>`);
//  }
// listArray(numbers);

//___________________________________

// ============= task 9 =============
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//  та виводить їх в документ. Для кожного об'єкту окремий блок.

//let users = [
    //    {
//        id: 1,
//        name: `vasya`,
//        age: 16
        //    },
//   {
//        id: 2,
//        name: `kolya`,
//        age: 18
        //    },
//    {
//        id: 3,
//        name: `maryna`,
//        age: 17
        //    },
//    {
//        id: 4,
//        name: `sveta`,
//        age: 15
        //    }
//];

// let listArray = (array) => {
//     for (const user of array) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//         //       console.log(user)
//     }
// }
// listArray(users);

//___________________________________

// ============= task 10 =============
//- створити функцію яка повертає найменьше число з масиву

// let numbers = [45, 8, -9, 10];
//
// let getMinNum = (array) => {
//     let minNum = array[0];
//     for (const arrItem of array) {
 //        if (arrItem < minNum){
//             minNum = arrItem
//         };
//     }
//     return minNum;
// }
// console.log(getMinNum(numbers));

//___________________________________

// ============= task 11 =============
//- створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let calc = (array) => {
//     let result = 0;
//     for (const arrayElement of array) {
//         result = result + arrayElement;
//
//     }
 //    return result;
// }

// console.log(calc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//___________________________________

// ============= task 12 =============

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let averageValue = (array) => {
//     return array.reduce((a, b) => a + b, 0) / array.length;
  //  let result = 0;
  //  for (const arrayElement of array) {
  //      result = (result + arrayElement);
  //  }
  //  return result / array.length;
// }
// let array = [4, 5, 6, 7];
// console.log(averageValue(array));

//___________________________________

// ============= task 13 =============

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//  а виводить найбільше (Math використовувати заборонено);
// let array = [22,3,49,5,6,75,8]
// let arrValue = (array) => {
//      let minValue = array[0];
//      let maxValue = array[0];
//      for (const item of array) {
//          if (item > maxValue) maxValue = item;
//          if (item < minValue) minValue = item;
//      };
//       console.log(maxValue);
//      return minValue;
//  };
//  let minValue = arrValue(array);
//  console.log(minValue);

//___________________________________

// ============= task 14 =============

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomNum = (value) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.round(Math.random()*100));
//     }
 //    return array;
// };
// console.log(randomNum(100));
//___________________________________

// ============= task 15 =============

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// let randomNum = (limit) => {
//     let array = [];
//     for (let i = 0; i < limit; i++){
 //        array.push(Math.round(Math.random()*limit));
//     }
//     return array;
// };
// console.log(randomNum(50));

//___________________________________

// ============= task 16 =============

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let directArr = [1,2,3];
// let reverseArr = directArr.reverse();
// console.log(reverseArr);

let directArr = [1,2,3];
let reverseArr = (array) => array.reverse();

reverseArr(directArr);
console.log(directArr);




//___________________________________