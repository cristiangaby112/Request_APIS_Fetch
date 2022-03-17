const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector('#app');
// const tample = document.createDocumentFragment('ul');


// fetch(`${API_URL}/users`)
// .then(response => response.json())
// .then((users) => {
// //   users.forEach((user) => {
// //     let elem = document.createElement('li');
// //     elem.appendChild(document.createTextNode(`${user.name} ${user.email}`))
// //     tample.appendChild(elem);
// //   });

// //   HTMLResponse.appendChild(tample);
//   const tample = users.map((user) => `<li>${user.name} ${user.email}</li>`);
//   HTMLResponse.innerHTML = `<ul>${tample}</ul>`;
//   console.log(users)
// });

async function onRequest(){
  let json = await fetch(`${API_URL}/users`)
  .then(response => response.json())
  console.log(json)
}

onRequest()

// const xhr = new XMLHttpRequest();

// function onRequest(){
//   if(this.readyState === 4 && this.status === 200){
//     //0 = UNSET,  no se ha llamado al metodo open
//     // 1 = OPENED, se ha llamado al metodo open.
//     // 2 = HEADERS_RECEIVED,  se ha llamado al metodo send()
//     // 3 = LOANDING, esta cargando, es decir, esta reciviendo la respuesta.
//     // 4 = DONE, se ha completado la operacion.
//     // console.log(this.response)
//     const data = JSON.parse(this.response);
//     // console.log(data);

//     const HTMLResponse = document.querySelector('#app');

//     const tample = data.map((user) => `<li>${user.name} ${user.email}</li>`);
//     HTMLResponse.innerHTML = `<ul>${tample}</ul>`;
//   }
// }

// xhr.addEventListener("load", onRequest);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();