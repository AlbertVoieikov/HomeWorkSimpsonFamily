// const userDetails = document.getElementById(`userDet`);
// const userId = new URLSearchParams(location.search).get(`id`);
// document.getElementById(`button`);
// button.onclick = () => {
//     userDetails && fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then(value => value.json())
//         .then(value => {
//             const userDetails = document.getElementById(`userDet`);
//             for (const user of value) {
//                 const userDetailsDiv = document.createElement(`div`);
//                 userDetailsDiv.innerHTML = `
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
//                                 </p>`;
//                 userDetails.appendChild(userDetailsDiv);
//
//             }
//
//         })
// }