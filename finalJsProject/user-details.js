const userDetails = document.getElementById(`userDet`);
const userUrl = new URL(`https://jsonplaceholder.typicode.com/users`)
const userId = new URLSearchParams(location.search).get('id');

userId && fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        const userDetails = document.getElementById(`userDet`);
        for (const user of value) {
            const userDetailsDiv = document.createElement(`div`);
            userDetails.appendChild(userDetailsDiv);
            for (const userKey in user) {
                const divElement = document.createElement(`div`);
                // divElement.innerText = `${userKey}: ${user[userKey]}`;
                divElement.innerHTML = `
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
                </p>`
                userDetails.appendChild(divElement);
                document.getElementById(`userBtn`)
                // userDetailsBtn.disabled = true;
            }
        }

    })










// <p>id: ${user.id}</p>
// <p>name: ${user.name} </p>
// <p>username: ${user.username}</p>
// <p>email: ${user.email}</p>
// <p>address:
//      <p>street: ${user.address.street}</p>
//      <p>suite: ${user.address.suite}</p>
//      <p>city: ${user.address.city}</p>
//      <p>zipcode: ${user.address.zipcode}</p>
//      <p>geo:
//          <p>- lat: ${user.address.geo.lat}</p>
//          <p>- lng: ${user.address.geo.lng}</p>
//      </p>
// </p>
// <p>phone: ${user.phone}</p>
// <p>website: ${user.website}</p>
// <p>company:
//     <p>name: ${user.company.name}</p>
//     <p>catchPhrase: ${user.company.catchPhrase}</p>
//     <p>bs: ${user.company.bs}</p>
// </p>



// let usersContainer = document.getElementById(`users`)
// usersContainer && fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(response => {
//         for (const user of response) {
//             const userDiv = document.createElement(`div`);
//             userDiv.id = `userDiv`;
//             userDiv.classList = `userDiv`;
//             userDiv.innerHTML = `
//                 <p>user id - ${user.id}</p>
//                 <p>user name - ${user.name}</p>`;
//
//             usersContainer.appendChild(userDiv);
//
//             const button = document.createElement(`button`);
//             button.id = `userButton`;
//             button.innerHTML = `<a href="user-details.html?id=${user.id}">User details</a>`;
//             userDiv.appendChild(button);
//         }
//     })
//
// const userDetails = document.getElementById(`userDet`);
// const userUrl = new URL(`https://jsonplaceholder.typicode.com/users`)
// const userId = new URLSearchParams(location.search).get('id');
//
// userId && fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(value => {
//         const userDetails = document.getElementById(`userDet`);
//         for (const user of value) {
//             const userDetailsDiv = document.createElement(`div`);
//             userDetails.appendChild(userDetailsDiv);
//             for (const userKey in user) {
//                 const divElement = document.createElement(`div`);
//                 divElement.innerText = `${userKey}: ${user[userKey]}`;
//                 userDetails.appendChild(divElement);
//             }
//         }
//
//     })




//_______________________________________________________________

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(value => {
//         const wrapDiv = document.createElement(`div`);
//         document.body.append(wrapDiv);
//         for (const user of value) {
//             const divContainer = document.createElement(`div`);
//             wrapDiv.append(divContainer);
//             const {id, name} = user;
//             divContainer.innerHTML = `
//             <p>UserId: ${user.id}</p>
//             <p>Name: ${user.name}</p>`
//
//             const userDetailsBtn = document.createElement(`button`);
//
//             userDetailsBtn.innerHTML = `<a href="https://jsonplaceholder.typicode.com/users/${user.id}">User details</a>`
//             divContainer.append(userDetailsBtn);
//
//             userDetailsBtn.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/users`)
//                     .then(value => value.json())
//                     .then(value => {
//                         const userContainer = document.createElement(`div`);
//                         divContainer.append(userContainer);
//                         for (const userContainerElement of value) {
//                             const userDiv = document.createElement(`div`);
//                             userDiv.innerHTML = `
//                                 <p>id: ${user.id}</p>
//                                 <p>name: ${user.name} </p>
//                                 <p>username: ${user.username}</p>
//                                 <p>email: ${user.email}</p>
//                                 <p>address:
//                                      <p>street: ${user.address.street}</p>
//                                      <p>suite: ${user.address.suite}</p>
//                                      <p>city: ${user.address.city}</p>
//                                      <p>zipcode: ${user.address.zipcode}</p>
//                                      <p>geo:
//                                          <p>- lat: ${user.address.geo.lat}</p>
//                                          <p>- lng: ${user.address.geo.lng}</p>
//                                      </p>
//                                 </p>
//                                 <p>phone: ${user.phone}</p>
//                                 <p>website: ${user.website}</p>
//                                 <p>company:
//                                     <p>name: ${user.company.name}</p>
//                                     <p>catchPhrase: ${user.company.catchPhrase}</p>
//                                     <p>bs: ${user.company.bs}</p>
//                                 </p>
//                                 `
//                             userContainer.append(userDiv);
//                         }
//                     })
//             }
//         }
//
//     });