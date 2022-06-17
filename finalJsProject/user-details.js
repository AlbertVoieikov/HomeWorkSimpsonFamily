const userDetails = localStorage.getItem(`user`);
const userDetailsParse = JSON.parse(userDetails);
console.log(userDetailsParse);

const wrapUserDetails = document.getElementById("userDet");
const divUserDetails = document.createElement(`div`);

console.log(wrapUserDetails);

wrapUserDetails.append(divUserDetails);
divUserDetails.append(userDetailsParse);
divUserDetails.innerHTML = `
                <p>id: ${userDetailsParse.id}</p>
                <p>name: ${userDetailsParse.name} </p>
                <p>username: ${userDetailsParse.username}</p>
                <p>email: ${userDetailsParse.email}</p>
                <p>address:
                     <p>street: ${userDetailsParse.address.street}</p>
                     <p>suite: ${userDetailsParse.address.suite}</p>
                     <p>city: ${userDetailsParse.address.city}</p>
                     <p>zipcode: ${userDetailsParse.address.zipcode}</p>
                     <p>geo:
                         <p>- lat: ${userDetailsParse.address.geo.lat}</p>
                         <p>- lng: ${userDetailsParse.address.geo.lng}</p>
                     </p>
                </p>
                <p>phone: ${userDetailsParse.phone}</p>
                <p>website: ${userDetailsParse.website}</p>
                <p>company:
                    <p>name: ${userDetailsParse.company.name}</p>
                    <p>catchPhrase: ${userDetailsParse.company.catchPhrase}</p>
                    <p>bs: ${userDetailsParse.company.bs}</p>
                </p>`


const postsBtn = document.querySelector(`.btn-posts`);

postsBtn.addEventListener(`click`, () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userDetailsParse.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            window.localStorage.setItem('postsJson', JSON.stringify(posts))
            const postWrap = document.querySelector(`.userPosts`);
            for (const post of posts) {
                const id = post.id;
                const title = post.title;

                const postsItem = document.createElement(`div`);
                postsItem.classList = `postsItem`;
                postsItem.innerHTML = `
                    <a class='postItem_link' href="post-details.html?${id}">PostID ${id}</a>
                    <h3 class='postItem_title'>${title}</h3>`;

                postWrap.append(postsItem);

            }

            postsBtn.disabled = true;

        })

})


