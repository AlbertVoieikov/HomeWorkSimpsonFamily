let userDetails = localStorage.getItem(`user`);
let userDetailsParse = JSON.parse(userDetails);
console.log(userDetailsParse);

const wrapUserDetails = document.getElementById(`userDet`);
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => {
        const wrapUserDetails = document.getElementById(`userDet`);
        for (const userItem of users) {
            if (userItem.id) {
                const divElement = document.createElement(`div`);


                divElement.innerHTML = `
                <p>id: ${userItem.id}</p>
                <p>name: ${userItem.name} </p>
                <p>username: ${userItem.username}</p>
                <p>email: ${userItem.email}</p>
                <p>address:
                     <p>street: ${userItem.address.street}</p>
                     <p>suite: ${userItem.address.suite}</p>
                     <p>city: ${userItem.address.city}</p>
                     <p>zipcode: ${userItem.address.zipcode}</p>
                     <p>geo:
                         <p>- lat: ${userItem.address.geo.lat}</p>
                         <p>- lng: ${userItem.address.geo.lng}</p>
                     </p>
                </p>
                <p>phone: ${userItem.phone}</p>
                <p>website: ${userItem.website}</p>
                <p>company:
                    <p>name: ${userItem.company.name}</p>
                    <p>catchPhrase: ${userItem.company.catchPhrase}</p>
                    <p>bs: ${userItem.company.bs}</p>
                </p>`
                wrapUserDetails.append(divElement);

                // const buttonElement = document.getElementsByClassName(`button`)
                // buttonElement.disabled = true;
            }
        }
    })