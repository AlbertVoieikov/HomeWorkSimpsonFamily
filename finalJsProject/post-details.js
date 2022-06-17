const postInfo = localStorage.getItem(`postsJson`)
const postInfoParse = JSON.parse(postInfo);
console.log(postInfoParse);


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(response => {
        const postContainer = document.getElementById(`postContainer`)
        for (const post of response) {
        const postWrap = document.createElement(`div`);
            postContainer.append(postWrap);
        const {userId, id, title, body} = post;
            postWrap.innerHTML =
            `<p>userId: ${userId}</p>
             <p>postId: ${id}</p>
             <p>title: ${title}</p>
             <p>body: ${body}</p>`;

            const commentBtn = document.createElement(`button`);
            commentBtn.innerText = `Comments of curent post`;
            postWrap.append(commentBtn);

            commentBtn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        const commentsWrap = document.createElement(`div`);
                        postWrap.append(commentsWrap);
                        for (const comment of value) {
                            const commentDiv = document.createElement(`div`);
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

        }


    });
