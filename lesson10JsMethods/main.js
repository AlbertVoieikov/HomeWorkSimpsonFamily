// ========================== task 1 ============================
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// ______________________________________________________________

// ========================== task 2 ============================
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
//  console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// ______________________________________________________________

// ========================== task 3 ============================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());

// ______________________________________________________________

// ========================== task 4 ============================
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

// ______________________________________________________________

// ========================== task 5 ============================
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//  let str = 'Ревуть воли як ясла повні';
//  console.log(str.split(' '));


 // ______________________________________________________________

// ========================== task 6 ============================
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let mapArr = numbers.map(value => {return value + ''});
// console.log(mapArr);

// ______________________________________________________________

// ========================== task 7 ============================
// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності
// від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (nums,direction) => {
//     if (direction === 'ascending'){
//         nums.sort((item1, item2) => item1 - item2)
//     }else if (direction === 'descending'){
//         nums.sort((item1, item2) => item2 - item1)
//     }
//     return nums;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// let nums = [11,21,3];
// console.log(nums.sort((item1, item2) => item1 - item2));
// console.log(nums.sort((item1, item2) => item2 - item1));

// ______________________________________________________________

// ========================== task 8 ============================
// - є масив
// let coursesAndDurationArray = [
 //    {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
 //    {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//   ];

// console.log(coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration));

// let filterMonthDuration = coursesAndDurationArray.filter((item) => {
//     return item.monthDuration > 5;
// });
// console.log(filterMonthDuration);

// ______________________________________________________________

// ========================== task 9 ============================
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//  let deckCards = [
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'redJoker', value: 'joker', color: 'red'},
//     {cardSuit: 'blackJoker', value: 'joker', color: 'black'},
// ];
// let filterCard = deckCards.filter((item) => {
//     return (item.cardSuit === 'spade' && item.value === 'ace');
// });
//console.log(filterCard);


//let filterCard = deckCards.filter((item) => {
//    return (item.value === '6');
//});
//console.log(filterCard);

//let filterCard = deckCards.filter((item) => {
//    return (item.color === 'red');
//});
//console.log(filterCard);

// let filterCard = deckCards.filter((item) => {
//     return (item.cardSuit === 'diamond');
// });
// console.log(filterCard);

// let filterCard = deckCards.filter((item) => {
//      return (item.cardSuit === 'clubs' && item.value > '8' ||
//          item.value === '10' && item.cardSuit === 'clubs' ||
//          item.cardSuit === 'blackJoker' && item.value === 'joker'
//      );
//  });
//  console.log(filterCard);