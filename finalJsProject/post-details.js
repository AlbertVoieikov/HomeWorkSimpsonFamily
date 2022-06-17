const postInfo = localStorage.getItem(`postsJson`)
const postInfoParse = JSON.parse(postInfo);
console.log(postInfoParse);

const postContainer = document.getElementById(`postContainer`);
const postItemWrap = document.createElement(`div`);
// const {userId, id, title, body} = postInfoParse;
postItemWrap.append(postInfoParse);
postItemWrap.innerHTML =
    `<p>userId: ${postInfoParse.userId}</p>
    <p>id: ${postInfoParse.id}</p>
    <p>title: ${postInfoParse.title}</p>
    <p>body: ${postInfoParse.body}</p>`
postContainer.append(postItemWrap);

























// fetch(fetch(`https://jsonplaceholder.typicode.com/users/${postInfoParse.id}/posts`))
//     .then(response => response.json())
//     .then(value => {
//
//     });
//







//
// const postInfo = localStorage.getItem(`postsJson`)
// const postInfoParse = JSON.parse(postInfo);
// console.log(postInfoParse);
//
// const postContainer = document.getElementById(`postContainer`);
// const postsWrap = document.createElement(`div`)
// postContainer.append(postsWrap);
//
// const postInfoDiv = document.createElement(`div`);
//
// postsWrap.append(postInfoDiv)
// postInfoDiv.append(postInfoParse)
// postInfoDiv.classList = `postDiv`;
// postInfoDiv.innerHTML = `
//     <p>UserID: ${postInfoParse.userId}</p>
//     <p>PostID: ${postInfoParse.id}</p>
//     <p>Title: ${postInfoParse.title}</p>
//     <p>Body: ${postInfoParse.body}</p>
//    `;
//








