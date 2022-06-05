// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        const wrapDiv = document.createElement(`div`);

        document.body.append(wrapDiv);
        for (const user of value) {
            const divContainer = document.createElement(`div`);
            wrapDiv.append(divContainer);
            const {id, name} = user;
            divContainer.innerHTML = `
                <p>UserId: ${user.id}</p>
                <p>Name: ${user.name}</p>`
            divContainer.style.border = `1px solid blue`;

            const userDetailsBtn = document.createElement(`button`);
            userDetailsBtn.id = `userBtn`;

            userDetailsBtn.innerHTML = `<a href="user-details.html?id=${user.id}">User details</a>`
            divContainer.append(userDetailsBtn);

            userDetailsBtn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users${user.id}`)
                    .then(value => value.json())
                    .then(value => {
                        const userContainer = document.createElement(`div`);
                        divContainer.append(userContainer);
                        for (const userContainerElement of value) {
                            const userDiv = document.createElement(`div`);
                            userDiv.innerHTML = `
                                <p>id: ${user.id}</p>
                                <p>name: ${user.name} </p>
                                <p>username: ${user.username}</p>
                                <p>email: ${user.email}</p>
                                <p>address:
                                     <p>street: ${user.address.street}</p>
                                     <p>suite: ${user.address.suite}</p>
                                     <p>city: ${user.address.city}</p>
                                     <p>zipcode: ${user.address.zipcode}</p>
                                     <p>geo:
                                         <p>- lat: ${user.address.geo.lat}</p>
                                         <p>- lng: ${user.address.geo.lng}</p>
                                     </p>
                                </p>
                                <p>phone: ${user.phone}</p>
                                <p>website: ${user.website}</p>
                                <p>company:
                                    <p>name: ${user.company.name}</p>
                                    <p>catchPhrase: ${user.company.catchPhrase}</p>
                                    <p>bs: ${user.company.bs}</p>
                                </p>
                                `

                            userContainer.append(userDiv);
                            // userDetailsBtn.disabled = true;


                        }
                    })
            }
        }

    });




// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
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