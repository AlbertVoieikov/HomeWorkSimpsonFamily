// ====================== № 1 ========================

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// let posts = document.getElementById(`posts`)
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(postsList => {
//         for (const post of postsList) {
//             let postDiv = document.createElement(`div`);
//             postDiv.classList = `postDiv`;
//             postDiv.innerHTML = `<p>user id - ${post.userId}</p>
//             <p>post id - ${post.id}</p>
//             <p>title - ${post.title}</p>
//             <p>body - ${post.body}</p>`;
//
//             posts.appendChild(postDiv)
//         }
//     });

// ___________________________________________________

// ====================== № 2 ========================

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let coments = document.getElementById(`comments`)
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(comentsList => {
        for (const coment of comentsList) {
            let comentDiv = document.createElement(`div`);

            comentDiv.innerHTML = `<h2>User ID - ${coment.userId}</h2>
            <h3>Post ID - ${coment.id}</h3>
            <p>Title - ${coment.title}</p>
            <span>Body - ${coment.body}</span>`;

            coments.appendChild(comentDiv)
        }
    });
// ___________________________________________________