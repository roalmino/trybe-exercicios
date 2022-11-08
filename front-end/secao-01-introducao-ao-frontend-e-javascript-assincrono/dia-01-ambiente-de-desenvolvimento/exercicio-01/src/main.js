
import validator from 'validator';
import isAlpha from 'validator/lib/isAlpha';
import isEmail from 'validator/lib/isEmail';
import isCurrency from 'validator/lib/isCurrency';
import isDate from 'validator/lib/isDate';


const text = document.querySelector('#text')
const button = document.querySelector('#button')
const display = document.querySelector('#display')
const option = document.querySelector('#options')

button.addEventListener('click', () =>{
    event.preventDefault()
    display.innerHTML = verifica(option.value, text.value)
})

function verifica (opcao, texto) {
    switch (opcao) {
        case 'email':
            return isEmail(texto)
        case  'moeda':
            return isCurrency(texto)
        case 'data':
            return isDate(texto,['DD/MM/YYYY'])
    }
}