    //Є змінна х, якій ви надаєте довільне числове значення.
    //Якщо змінна a не дорівнює нулю, виведіть 'Вірно',
    //інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    //let x = -3;
    //const a = x;
    //if (a !== 0){
    //    console.log('Вірно')
    //}else{
    //    console.log('Невірно')
    //};
    //________________________________

    //Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
    //(в першу, другу, третю или четверту частину години).
    //У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    //let time = 35;
    //if (time >= 0 && time <= 14){
    //    console.log('first quarter');
   // }else if (time >= 15 && time <= 29){
     //   console.log('second quarter');
    //}else if (time >= 30 && time <= 44){
    //    console.log('third quarter');
    //}else if (time >= 45 && time <= 59){
    //    console.log('fourth quarter');
    //}

    //let day = 25;
    //if (day >= 1 && day <= 10){
    //    console.log('the first part of the month');
    //}else if (day >= 11 && day <= 20){
    //    console.log('the second part of the month');
    //}else if (day >= 21 && day <= 31){
    //    console.log('the third part of the month');
    //}
//________________________________________________________

    //Скласти розклад на тиждень за домопоги switch.
    //Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
    //(можна замість плану на день, назву дня англійською).

    //let day = 5;
    //switch (day) {
    //    case 1:
    //        console.log('javascript' + '-' + 'lecture at 20:00');
    //        break;
    //    case 2:
   //         console.log('javascript' + '-' + 'tasks');
    //        break;
    //    case 3:
   //         console.log('javascript' + '-' + 'lecture at 20:00');
   //         break;
    //    case 4:
    //        console.log('javascript' + '-' + 'tasks');
    //        break;
    //    case 5:
   //         console.log('english' + '-' + 'tasks');
    //        break;
   //     case 6:
   //         console.log('english' + '-' + 'lecture at 11:30');
   //         break;
   //     case 7:
   //         console.log('rest');
   //         break;
        //default:
          //  console.log('remember your schedule')


   // }
//___________________________________________________________________

    //Користувач вводить або має два числа.
    //Потрібно знайти та вивести максимальне число з тих двох .
    //також потрібно врахувати коли введені рівні числа.

    let a = 12;
    let b = 12;
    let value = a > b ? a : b || a === b;

    console.log(value);

