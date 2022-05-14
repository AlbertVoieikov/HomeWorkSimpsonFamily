// // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// //
// //     - Напишіть код,  котрий :

// // -- отримує текст з параграфа з id "content"
//
// const someP = document.getElementById(`content`);
// const textSomeP = someP.innerText;
// console.log(textSomeP);

// // -- отримує текст з блоку з id "rules"
//
// const divEl = document.getElementById(`rules`);
// console.log(divEl.innerText);

// // -- замініть текст параграфа з id 'content' на будь-який інший
//
// someP.innerText = `various text`;

// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
// divEl.innerText = 'all the rules in one';

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

// // -- змініть кожному елементу колір тексту на синій
//
// someP.style.color = `blue`;
// divEl.style.color = `blue`;

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let someClass = document.querySelector(`#rules`)
// console.log(someClass.classList);


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// // a) додає клас з назвою групи, елементу з ід main_header
//
// const head = document.querySelector(`#main_header`);
// head.classList.add(`group`);
// console.log(head);

// // b) робить шириниу елементу ul 400px
//
// const ulStyle = document.querySelector(`ul`);
// ulStyle.style.backgroundColor = `silver`;
// ulStyle.style.width = `400px`;

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const liWidth = document.getElementsByClassName(`linkList`);
// for (const liItem of liWidth) {
//     liItem.style.backgroundColor = `grey`;
//     liItem.style.width = `50%`;
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let liText = document.querySelector(`.listElement2`);
// const inerT = liText.innerText;
// console.log(inerT);

// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// const ulAnchor = document.getElementsByTagName(`a`)
// for (const liAnchorEl of ulAnchor) {
//     liAnchorEl.classList.add(`anchor`);
//     }
// console.log(ulAnchor);

// g) отримує всі елементи 'a' та у випадку,
// якщо текстовий контен елементу дорівнює link3,
// // змінює йому розмір тексту на 40 пікселів
//
// let allA = document.getElementsByTagName(`a`);
// for (const allAitem of allA) {
//     if (allAitem.innerText ===`link3`)
//         allAitem.style.fontSize = `40px`;
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX.
// // Де XXX - текстовий контент елементу a
//
// let allA = document.getElementsByTagName(`a`);
// for (const allAitem of allA) {
//     allAitem.classList.add(`element_${allAitem.innerText}`)
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let h3BgColor = prompt(`Your color`)
// let h3Color = document.getElementsByClassName(`sub-header`);
// for (const h3Coloritem of h3Color) {
//     h3Coloritem.style.background = h3BgColor;
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// // якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let h3TxtColor = prompt(`Your color`)
//  let h3Color = document.getElementsByClassName(`sub-header`);
//  for (const h3Coloritem of h3Color) {
//      if (h3Coloritem.innerText === `content 2 segment`)
//      h3Coloritem.style.color = h3TxtColor;
//     }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// // Текст отримати з prompt()
//
// let contOneTxt = prompt(`enter your text`)
// let contOne = document.getElementsByClassName(`content_1`);
// for (const contOneitem of contOne) {
//     contOneitem.innerText = contOneTxt;
// }

// // l) отримати елементи p та змінити їм padding на 20px
//
// let padingP = document.getElementsByTagName(`p`)
// for (const item of padingP) {
//     item.style.padding = `20px`;
// }

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year.
// // Пример sep-2021)
//
// let targEl = document.getElementsByClassName(`text2`);
// for (const targElItem of targEl) {
//     targElItem.innerText = `sep-2021`;
// }