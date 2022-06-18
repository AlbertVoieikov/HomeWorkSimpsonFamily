const postInfo = localStorage.getItem(`postsJson`)
const postInfoParse = JSON.parse(postInfo);
console.log(postInfoParse);

const idFromUrlParametrs = new URLSearchParams(location.search).get(`id`);
const postWithidFromUrlParametrs = postInfoParse.find(x => x.id === +idFromUrlParametrs);
const postDet = document.createElement(`div`);
postDet.classList = `postDet`;
postDet.innerHTML =
    `<p>userId: ${postWithidFromUrlParametrs.userId}</p>
    <p>id: ${postWithidFromUrlParametrs.id}</p>
    <p>title: ${postWithidFromUrlParametrs.title}</p>
    <p>body: ${postWithidFromUrlParametrs.body}</p>`;

const postContainer = document.getElementById(`postContainer`)
postContainer.append(postDet)

const commentBtn = document.createElement(`button`);

commentBtn.innerText = `Comments of curent post`;
postContainer.append(commentBtn);

commentBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postWithidFromUrlParametrs.id}/comments`)
        .then(value => value.json())
        .then(value => {
            const commentsWrap = document.createElement(`div`);
            commentsWrap.classList = `commentsWrap`;
            postContainer.append(commentsWrap);
            for (const comment of value) {
                const commentDiv = document.createElement(`div`);
                commentDiv.classList = `commentDiv`;
                commentDiv.innerHTML =
                    `<p>postId: ${comment.postId}</p>
                    <p>commentId: ${comment.id}</p>
                    <p>name: ${comment.name}</p>
                    <p>email: ${comment.email}</p>
                    <p>body: ${comment.body}</p>`;
                    commentsWrap.append(commentDiv);
            }
            commentBtn.disabled = true;
        })
}