import './style.css';


const button = document.querySelector('#button');
const image = document.querySelector('#image')
const title = document.querySelector('#title')

button.addEventListener('click', getCharater);

function getCharater() {
    const id = Math.floor(Math.random() * 731);
  fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
        image.src = data.images.sm
        title.textContent = data.name
    }).catch(error => console.log(error.message))
}

