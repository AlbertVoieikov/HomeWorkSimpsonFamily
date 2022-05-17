// ==================== task 1 =========================

// // Все робити за допомоги js.

// // - створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// //- клонувати його повністю, та додати клон в body.
//
// const block = document.createElement(`div`);
// block.innerText = `it's your block`;
//
// block.classList.add(`wrap`);
// block.classList.add(`collapse`);
// block.classList.add(`alpha`);
// block.classList.add(`beta`);
//
// block.style.backgroundColor = `grey`;
// const red = Math.random() * 255;
// const green = Math.random() * 255;
// const blue = Math.random() * 255;
// block.style.color = `rgb(${red} ${green} ${blue})`;
// block.style.fontSize = `25px`;
// block.style.marginTop = `10px`;
//
// document.body.appendChild(block);
//
// const blockClone = block.cloneNode(true);
// blockClone.innerText = `it's your block clone`;
// document.body.appendChild(blockClone);

//______________________________________________________

// ==================== task 2 =========================

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий
// // для кожного елементу масиву
// // створює li та додає його до блоку .menu
// // Завдання робити через цикли.
//
// let someArray = ['Main','Products','About us','Contacts'];
//
// for (const item of someArray) {
//     const ulItem = document.createElement(`li`);
//     ulItem.innerText = `${item}`;
//
//     let menu = document.getElementsByClassName(`menu`)[0];
//     menu.append(ulItem);
// }

//______________________________________________________

// ==================== task 3 =========================

// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title
// // та monthDuration
// // Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const blockItem = document.createElement(`div`);
//     blockItem.innerText =
//         `
//         ${coursesAndDurationArrayElement.title}  -  ${coursesAndDurationArrayElement.monthDuration}
//         `
//     document.body.appendChild(blockItem);
// }

//______________________________________________________

// ==================== task 4 =========================

// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// // в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// // з monthDuration елементу.
// //     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const blockItem = document.createElement(`div`);
//     blockItem.innerHTML =
//         `<h1 class='heading'>${coursesAndDurationArrayElement.title}</h1>
//          <p>${coursesAndDurationArrayElement.monthDuration}</p>
//          <hr/>
//         `
//     document.body.appendChild(blockItem);
// }