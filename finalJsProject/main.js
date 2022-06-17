// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку " Post of current user  ", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения
// информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать,
// так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((value) => value.json())
    .then((users) => {
        for (const user of users) {
            const userDiv = document.createElement(`div`);
            userDiv.classList = `user`;
            const h2Element = document.createElement(`h2`);
            h2Element.innerText = user.id + `. ` + user.name;
            const formElement = document.createElement(`form`);
            formElement.setAttribute(`action`, `user-details.html`);
            const buttonElement = document.createElement(`button`);
            buttonElement.innerText = `User details`;
            buttonElement.classList = `button`;
            formElement.append(buttonElement);
            userDiv.append(h2Element, formElement);
            document.body.append(userDiv);
            buttonElement.onclick = () => {
                localStorage.setItem(`user`, JSON.stringify(user));
            };
        }
    });









// const userhHtml = `
//     <div class="user-container">
//     <h1>Name</h1>
//     <button href="user-details.html" target="_blank">User details</button>
//     </div>
// `;
// function openUserDetails(user) {
//     localStorage.setItem(`user`, JSON.stringify(user))
//     // додати в локал сторедж
//     // додати в локал сторедж
//     window.open("user-details.html");
// }
// function renderUsers(users) {
//     const container = document.getElementById("users-container");
//     console.log("container", container);
//
//     users.forEach((user) => {
//         const userContainer = document.createElement("div");
//         userContainer.innerHTML = `
//             <p>ID: ${user.id}</p>
//             <h1>${user.name}</h1>
//             <button onclick="openUserDetails(${user.id})">User details</button>
//             <hr>`;
//
//         container.appendChild(userContainer);
//     });
//
//     // container.append(JSON.stringify(usersHtml));
//
//     console.log("container", container);
// }
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((value) => value.json())
//     .then((users) => {
//         renderUsers(users);
//     });