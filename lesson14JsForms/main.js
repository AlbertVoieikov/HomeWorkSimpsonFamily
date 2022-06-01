// ======================== task № 1 ========================
//
// Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// document.getElementById('btn').onclick = function() {
//     document.getElementById('text').hidden = true;
// }

//__________________________________________________________


// ======================== task № 2 ========================
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

// let f1 = document.forms.f1;
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let userage = f1.age.value;
//     if (userage <= 17) {
//         console.log(`access denied`);
//     } else {
//         console.log(`access granted`);
//     }
//
//     f1.age.value = '';
// }

//__________________________________________________________


// ======================== task № 3 ========================
//
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API.
// Отже дайте формі та інпутам всі необхідні атрибути.


// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
// let btnSub = document.getElementById('sbmt')
// btnSub.onclick = function () {
//     let userNameInput = form1.username;
//     let userPassInput = form1.password;
//     let userAgeInput = form2.age;
//     let userEmailInput = form2.email;
//
//     let userName = userNameInput.value;
//     let userPass = userPassInput.value;
//     let userAge = userAgeInput.value;
//     let userEmail = userEmailInput.value;
//
//     let user = {
//         userName: userName,
//         userPass: userPass,
//         userAge: userAge,
//         userEmail: userEmail,
//     }
//     console.log(user);
//     userNameInput.value = '';
//     userPassInput.value = '';
//     userAgeInput.value = '';
//     userEmailInput.value = '';
// }


//__________________________________________________________


// ======================== task № 4 ========================
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)





//__________________________________________________________