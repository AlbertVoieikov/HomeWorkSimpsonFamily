// // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// //
// //     - Напишіть код,  котрий :
// // -- отримує текст з параграфа з id "content"
//
// let someP = document.getElementById(`content`);
// console.log(someP);
//
// // -- отримує текст з блоку з id "rules"
//
// let divEl = document.getElementById(`rules`);
// console.log(divEl);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// someP.innerText = `various text`;
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// divEl.innerText = 'all the rules in one';
//
// // -- змініть кожному елементу колір фону на червоний
// //-- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// someP.style.backgroundColor = `red`;
// divEl.style.backgroundColor = `red`;
//
// let someRules = document.getElementsByClassName(`fc_rules`)
// for (const someRule of someRules) {
//     console.log(someRule);
//     someRule.style.backgroundColor = `lightgrey`
//     someRule.style.color = `red`
//
// }
//
// // -- змініть кожному елементу колір тексту на синій
//
// someP.style.color = `blue`;
// divEl.style.color = `blue`;
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let someClass = document.querySelector(`#rules`)
// console.log(someClass.classList);


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const head = document.querySelector(`#main_header`);
head.classList.add(`group`);
console.log(head);

// b) робить шириниу елементу ul 400px

const ulStyle = document.querySelector(`ul`);
ulStyle.style.backgroundColor = `silver`;
ulStyle.style.width = `400px`;

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// e) отримує всі елементи li та змінює ім колір фону на сірий

const liWidth = document.getElementsByClassName(`linkList`);
for (const liItem of liWidth) {
    liItem.style.backgroundColor = `grey`;
    liItem.style.width = `50%`;
}

// d) отримує текст який зберігається в елементі з класом listElement2

// let liText = document.querySelector(`.listElement2`);
// console.log(liText);



// f) отримує всі елементи 'a' та додає їм клас anchor

// const ulAnchor = document.getElementsByTagName(`a`)
// for (const liAnchorEl of ulAnchor) {
//     liAnchorEl.classList.add(`anchor`);
// }
// console.log(liAnchor);

// let anchorA = document.querySelectorAll(`ul > a`);
// anchorA.classList.add(`anchor`);
// console.log(anchorA);

// g) отримує всі елементи 'a' та у випадку,
// якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
let allA = document.getElementsByTagName(`a`)
console.log(allA);


// h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year.
// Пример sep-2021)