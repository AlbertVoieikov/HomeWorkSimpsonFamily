// ===================== task 1 =====================
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// };
// let user1 = new User(1, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user2 = new User(2, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user3 = new User(3, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user4 = new User(4, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user5 = new User(5, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user6 = new User(6, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user7 = new User(7, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user8 = new User(8, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user9 = new User(9, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let user10 = new User(10, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`);
// let usersArray = [];
// usersArray.push(user1, user2, user3, user4);
//
// console.log(usersArray);
// console.log(user1);

// // ===================== task 2 =====================
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// // залишивши тільки об'єкти з парними id (filter)
//
// let filterUsersArray = usersArray.filter((user) => {
//      return user.id % 2 === 0;
//  });
// console.log(filterUsersArray);

// // ===================== task 3 =====================
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(usersArray.sort((item1,item2) => user2.id - user1.id));

// // ===================== task 4 =====================
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// // order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// };
// let client1 = new Client(1, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`]);
// let client2 = new Client(2, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`, `potato`]);
// let client3 = new Client(3, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`, `potato`, `potato`]);
// let client4 = new Client(4, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`,`potato`]);
// let client5 = new Client(5, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`, `potato`, `potato`, `potato`]);
// let client6 = new Client(6, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`]);
// let client7 = new Client(7, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`]);
// let client8 = new Client(8, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`]);
// let client9 = new Client(9, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`]);
// let client10 = new Client(10, `igor`, `igorov`, `igor@gmail.com`, `+380881234567`, [`tomato`, `potato`]);
//
// let clientsArray = [];
// clientsArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//
// console.log(clientsArray);

// // ===================== task 5 =====================
// // - Взяти масив (Client [] з попереднього завдання).
// // Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clientsArray.sort((client1, client2) => client1.order.length - client2.order.length));

// ===================== task 6 =====================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
//
// function Car(model, producer, manufactureYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.manufactureYear = manufactureYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity
//         this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     }
//         this.info = function () {
//             for (const item in this) {
//                 console.log(`${item} : ${this[item]}`)
//             }
//
//         // console.log
//         // (
//         //     `model: vito;`,
//         //     `producer: mercedes;`,
//         //     `manufactureYear: 2018;`,
//         //     `maxSpeed: 180km/h;`,
//         //     `engineCapacity: 3,2l`
//         // )
//     }
//         this.increaseMaxSpeed = function (newSpeed){
//             this.maxSpeed += newSpeed
//         }
//         this.changeYear = function (newValue){
//             this.manufactureYear = newValue
//         }
//         this.addDriver = function (driver){
//             this.driver = driver;
//         }
// }
// let car1 = new Car (`vito`, `mercedes`, 2018, 180, `3,2l`);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.changeYear(2020);
// car1.addDriver(`Kostya`);
// console.log(car1);

// // ===================== task 7 =====================
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// // рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} кілометрів на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// // і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, manufactureYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.manufactureYear = manufactureYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     }
//     info () {
//         for (const item in this) {
//                 console.log(`${item} : ${this[item]}`)
//             }
//      }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.manufactureYear = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
// let car1 = new Car (`vito`, `mercedes`, 2018, 180, `3,2l`);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.changeYear(2020);
// car1.addDriver(`Kostya`);
// console.log(car1);

// // ===================== task 8 =====================
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// // Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let arrayOfCinder = [
//     new Cinderella(`katya`, 25, 38),
//     new Cinderella(`polina`, 28, 34),
//     new Cinderella(`maryna`, 31, 36),
//     new Cinderella(`olena`, 25, 39),
//     new Cinderella(`sveta`, 24, 40),
//     new Cinderella(`margo`, 30, 33),
//     new Cinderella(`albina`, 22, 35),
//     new Cinderella(`vaselyna`, 20, 38),
//     new Cinderella(`yulya`, 35, 39),
//     new Cinderella(`oleksandra`, 21, 41)
// ];
// class Prince {
//     constructor(name, age, findShoesSize) {
//         this.name = name;
//         this.age = age;
//         this.findShoesSize = findShoesSize;
//     }
// }
// let ourPrince = new Prince (`Kostya`, 33, 40);
//
// let findCinder = (arrayOfCinder, prince) => {
//     for (const girl of arrayOfCinder) {
//         if(girl.footSize === prince.findShoesSize)
//             return `${girl.name}`
//     }
// }
// console.log(findCinder(arrayOfCinder, ourPrince));
//
// let ourCinder = arrayOfCinder.find(value => value.footSize === ourPrince.findShoesSize);
// console.log(ourCinder);