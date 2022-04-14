/* task № 1 */

    /*
    Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
    */

/*
let word1 = 'hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let bool1 = true;
let bool2 = false;
*/

//console.log(number6);
//alert(word3);
//document.write(number3);
/*---------------------------------------*/

/* task № 2 */

    /*
    Створити об'єкт book з наступними полями :
    назва, (тип string)
    кількість сторінок (числовий тип),
    жанр (string)
    */

/*
let book = {
    title: 'Warrior cats',
    pages: 320,
    genre: 'fantasy'
};
console.log(book);
*/
/*---------------------------------------*/

/* task № 3 */

    /*
    Створити об'єкт book з наступними полями :
    назва, (тип string)
    кількість сторінок (числовий тип),
    жанр (string)
    автори (тип - масив, кожен елемент масиву - це стрінга)
    */

/*
let book = {
    title: 'Health Policy Analysis',
    pages: 234,
    genre: 'scientific literature',
    authors: [
        'John W. Seavey',
        'Semra A. Aytur',
        'Robert J. McGrath'
    ]
};
console.log(book);
*/
/*---------------------------------------*/

/* task № 4 */

    /*
    Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
    З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    */

/*
const firstName = 'Albert';
const middleName = 'Ihorovych';
const lastName = 'Voieikov';

let person1 = (`${firstName} ${middleName} ${lastName}`);
let person = firstName + ' ' + middleName + ' ' + lastName;

console.log(person);
console.log(person1);
*/
/*---------------------------------------*/

/* task № 5 */

/*
    За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
    По-Батькові та роками. та вивести в консоль
*/

/*
const firstName = prompt('Please enter your name:');
console.log(firstName);

const middleName = prompt('Please enter your surname');
console.log(middleName);

const yearBirth = prompt('Please enter year of birth');
console.log(yearBirth);
*/
/*---------------------------------------*/

/* task № 6 */

    /*
    За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
    */

/*
let a = 100;
let b = '100';
let c = true;

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);
*/
/*---------------------------------------*/

/* task № 7 */

    /*
    Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори.
    Вивести кожну книгу як окремий об'єкт.
    */

/*let books = [
         {
            title: 'Health Policy Analysis',
            pages: 234,
            genre: 'scientific literature',
            authors: [
                'John W. Seavey',
                'Semra A. Aytur',
                'Robert J. McGrath'
            ]
        },
         {
            title: 'Warrior cats',
            pages: 320,
            genre: 'fantasy',
            author: 'Erin Hunter'
        }
];
console.log(books)

console.log(books[0]);
console.log(books[1]);

for (const book of books){
    console.log(book)
};*/


