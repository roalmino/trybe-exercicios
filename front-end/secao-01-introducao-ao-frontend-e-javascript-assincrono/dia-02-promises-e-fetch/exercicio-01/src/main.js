import './style.css';


const button = document.querySelector('#button');
const image = document.querySelector('#image')
const title = document.querySelector('#title')

button.addEventListener('click', getCharater);

function getCharater() {
    const id = Math.floor(Math.random() * 731);
  fetch(`https://superheroapi.com/api.php/6292894400725945/${id}`)
    .then((response) => response.json())
    .then((data) => {
        image.src = data.image.url
        title.textContent = data.name
    });
}

