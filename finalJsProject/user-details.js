let userDetails = localStorage.getItem(`user`);
let userDetailsParse = JSON.parse(userDetails);
console.log(userDetailsParse);

const wrapUserDetails = document.getElementById(`userDet`);
const divUserDetails = document.createElement(`div`);
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
wrapUserDetails.append(divUserDetails);

fetch(`https://jsonplaceholder.typicode.com/users/${userDetailsParse.id}/posts`)
    .then(response => response.json())
    .then(postsList => {
        for (const post of postsList) {
            const postDiv = document.createElement(`div`);
            postDiv.classList = `post`;
            const h2Element = document.createElement(`h2`);
            h2Element.innerText = post.id + `. ` + post.title;
            const formElement = document.createElement(`form`);
            formElement.setAttribute(`action`, `post-details.html`);
            const postButton = document.createElement(`button`);
            postButton.innerText = `Post of current user`;
            postButton.classList = `button`;
            postButton.onclick = () => {
                localStorage.setItem(`post`, JSON.stringify(post));
            }
            formElement.append(postButton);
            postDiv.append(formElement);
            divUserDetails.append(postDiv);

        }

    });










// const wrapUserDetails = document.getElementById(`userDet`);
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(users => {
//         const wrapUserDetails = document.getElementById(`userDet`);
//         for (const userItem of users) {
//             if (userItem.id) {
//                 const divElement = document.createElement(`div`);
//                 divElement.innerHTML = `
//                 <p>id: ${userItem.id}</p>
//                 <p>name: ${userItem.name} </p>
//                 <p>username: ${userItem.username}</p>
//                 <p>email: ${userItem.email}</p>
//                 <p>address:
//                      <p>street: ${userItem.address.street}</p>
//                      <p>suite: ${userItem.address.suite}</p>
//                      <p>city: ${userItem.address.city}</p>
//                      <p>zipcode: ${userItem.address.zipcode}</p>
//                      <p>geo:
//                          <p>- lat: ${userItem.address.geo.lat}</p>
//                          <p>- lng: ${userItem.address.geo.lng}</p>
//                      </p>
//                 </p>
//                 <p>phone: ${userItem.phone}</p>
//                 <p>website: ${userItem.website}</p>
//                 <p>company:
//                     <p>name: ${userItem.company.name}</p>
//                     <p>catchPhrase: ${userItem.company.catchPhrase}</p>
//                     <p>bs: ${userItem.company.bs}</p>
//                 </p>`
//                 wrapUserDetails.append(divElement);
//
//                 // const buttonElement = document.getElementsByClassName(`button`)
//                 // buttonElement.disabled = true;
//             }
//         }
//     })