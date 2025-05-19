// // Constructor Function 
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// // Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
// }

// const person1 = new Person('John', 'Doe', '01-01-1990');
// const person2 = new Person('Jane', 'Doe', '02-02-1992');
// const person3 = new Person('Jim', 'Beam', '03-03-1993');

// console.log(person1.getFullName());
// console.log(person1);





// Element Selectors

// Single element
// console.log(document.getElementById('my-form'));
// The first <h1> tag is selected
// console.log(document.querySelector('h1'));

// Multiple elements
// console.log(document.getElementsByClassName('item')); // HTMLCollection
// console.log(document.getElementsByTagName('li')); // HTMLCollection
// const items = document.querySelectorAll('.item'); // NodeList
// items.forEach((item) => console.log(item)); // NodeList is iterable

// const ul = document.querySelector('.items');

// ul.remove(); // Remove the <ul> element
// ul.lastElementChild.remove(); // Remove the last <li> element
// ul.firstElementChild.textContent = 'Hello'; // Change the text of the first <li> element
// ul.children[1].innerText = 'Brad'; // Change the text of the second <li> element
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // Change the HTML of the last <li> element

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // Change the background color of the button


// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault(); // Prevent the default action of the button
//     // console.log(e.target); // Log the target element of the event
//     document.querySelector('#my-form').style.background = '#ccc'; // Change the background color of the form
//     document.querySelector('body').classList.add('bg-dark'); // Add a class to the body element
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'; // Change the HTML of the last <li> element
// }); // Add a click event listener to the button

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault(); // Prevent the default action of the form

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // Add the error class to the message element
        msg.innerHTML = 'Please enter all fields'; // Change the text of the message element
        setTimeout(() => msg.remove(), 3000); // Remove the message after 3 seconds
    } else {
        const li = document.createElement('li'); // Create a new <li> element
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // Add the name and email to the <li> element
        userList.appendChild(li); // Add the <li> element to the <ul> element
        // Clear the fileds
        nameInput.value = ''; // Clear the name input field
        emailInput.value = ''; // Clear the email input field
    }
}