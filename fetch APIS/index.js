const HTMLResponse = document.querySelector('#app');

const API_URL = "https://jsonplaceholder.typicode.com";




    fetch(`${API_URL}/photos`)
    .then(response => response.json())
    .then(photos => {
      const tample = photos.map((photo) => `<h2>${photo.title}</h2> <img src="${photo.thumbnailUrl}"`);
      HTMLResponse.innerHTML = `<div>${tample}</div>`;
      console.log(photos);
    });