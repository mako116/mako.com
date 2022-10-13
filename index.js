// // single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// // multiple Element
// // console.log(document.querySelectorAll('item'));
// console.log(document.getElementsByClassName('item'));
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = '<h1>hello man</h1>';



// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover ', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h5>get out</h5>'
// });

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users')

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`$
       {nameInput.value}  : ${emailInput.value}`));

        userlist.appendChild(li);
        //    clear field

        nameInput.value = '';
        emailInput.value = '';

    }
}
// console.log('success');
// console.log(nameInput.value);

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);



function randomWholeNum() {

    return Math.floor(Math.random);

}

console.log(randomWholeNum());