const postTitle = localStorage.getItem(`post`)
const postTitleParse = JSON.parse(postTitle);
console.log(postTitleParse);

const postsWrap = document.createElement(`div`)
document.body.append(postsWrap);
let postTitleDiv = document.createElement(`div`);
postTitleDiv.classList = `postDiv`;
postTitleDiv.innerHTML = `
    <p>post id - ${postTitleParse.id}</p>
    <p>title - ${postTitleParse.title}</p>
   `;

postsWrap.appendChild(postTitleDiv)
