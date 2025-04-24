// Examine the document object

// console.dir(document); // logs the document object

// console.log(document.domain); // logs the domain of the document
// console.log(document.URL); // logs the URL of the document
// console.log(document.title); // logs the title of the document
// console.log(document.doctype); // logs the head element of the document
// console.log(document.all[10]); // logs all the elements in the document
// // document.all[10].textContent = "Hello"; // changes the text content of the 10th element in the document
// console.log(document.forms); // logs all the forms in the document
// console.log(document.links); // logs all the links in the document
// console.log(document.images); // logs all the images in the document
// console.log(document.scripts); // logs all the scripts in the document

// Get elements by ID

// let headerTitle = document.getElementById("header-title"); // gets the element with the id of header-title
// let header = document.getElementById("main-header"); // gets the element with the id of main-header
// header.style.borderBottom = 'solid 3px #000'; // adds a border to the bottom of the header title

/* Get elements by class name */
// let items = document.getElementsByClassName("list-group-item"); // gets all the elements with the class of list-group-item
// console.log(items); // logs the elements with the class of list-group-item
// console.log(items[1]); // logs the second element with the class of list-group-item
// items[1].textContent = "Hello 2"; // changes the text content of the second element with the class of list-group-item
// items[1].style.fontWeight = 'bold'; // changes the font weight of the second element with the class of list-group-item
// items[1].style.backgroundColor = 'yellow'; // changes the background color of the second element with the class of list-group-item

// // Give error
// // items.style.backgroundColor = '#f4f4f4'; // changes the background color of all the elements with the class of list-group-item

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'; // changes the background color of all the elements with the class of list-group-item
// }

/* QuerySelector */
// let header = document.querySelector('#main-header'); // gets the element with the id of main-header
// header.style.borderBottom = 'solid 3px #000'; // adds a border to the bottom of the header title

// let input = document.querySelector('input'); // gets the first input element in the document
// input.value = 'Hello World'; // changes the value of the input element

// let submit = document.querySelector('input[type="submit"]'); // gets the first input element with the type of submit in the document
// submit.value = 'SEND'; // changes the value of the submit element

// let item = document.querySelector('.list-group-item'); // gets the first element with the class of list-group-item in the document
// item.style.color = 'red'; // changes the color of the first element with the class of list-group-item in the document

// let lastItem = document.querySelector('.list-group-item:last-child'); // gets the last element with the class of list-group-item in the document
// lastItem.style.color = 'blue'; // changes the color of the last element with the class of list-group-item in the document

// let secondItem = document.querySelector('.list-group-item:nth-child(2)'); // gets the last element with the class of list-group-item in the document
// secondItem.style.color = 'green'; // changes the color of the last element with the class of list-group-item in the document

/* QuerySelectorAll */
// let titles = document.querySelectorAll('.title'); // gets all the elements with the class of title in the document
// console.log(titles); // logs the elements with the class of title in the document
// titles[0].textContent = 'Hello'; // changes the text content of the first element with the class of title in the document

// let odd = document.querySelectorAll('li:nth-child(odd)'); // gets all the odd elements in the list

// let even = document.querySelectorAll('li:nth-child(even)'); // gets all the even elements in the list

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'; // changes the background color of all the odd elements in the list
// }

// for (let i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = '#ccc'; // changes the background color of all the odd elements in the list
// }

/* Traversing the dom */
// let itemList = document.querySelector('#items'); // gets the element with the id of items
// parentNode
// console.log(itemList.parentNode); // logs the parent node of the itemList element
// itemList.parentNode.style.backgroundColor = '#f4f4f4'; // changes the background color of the parent node of the itemList element
// console.log(itemList.parentNode.parentNode); // logs the parent node of the parent node of the itemList element

// parentElement (Be interchangeable with parentNode)
// console.log(itemList.parentNode); // logs the parent node of the itemList element
// itemList.parentElement.style.backgroundColor = '#f4f4f4'; // changes the background color of the parent node of the itemList element
// console.log(itemList.parentElement.parentElement); // logs the parent node of the parent node of the itemList element

// childnodes (include text nodes, comments, etc.)
// console.log(itemList.childNodes); // logs the child nodes of the itemList element

// console.log(itemList.children); // logs the child elements of the itemList element
// console.log(itemList.children[1]); // logs the second child element of the itemList element
// itemList.children[1].style.backgroundColor = 'yellow'; // changes the background color of the second child element of the itemList element

// firstChild (include text nodes, comments, etc.)
// console.log(itemList.firstChild); // logs the first child node of the itemList element

// firstElementChild (only include element nodes)
// console.log(itemList.firstElementChild); // logs the first child element of the itemList element
// itemList.firstElementChild.textContent = 'Hello 1'; // changes the text content of the first child element of the itemList element

// nextSibling (include text nodes, comments, etc.)
// console.log(itemList.nextSibling); // logs the next sibling node of the itemList element
// // nextElementSibling (only include element nodes)
// console.log(itemList.nextElementSibling); // logs the next sibling element of the itemList element

// previousSibling (include text nodes, comments, etc.)
// console.log(itemList.previousSibling); // logs the previous sibling node of the itemList element
// // previsousElementSibling (only include element nodes)
// console.log(itemList.previousElementSibling); // logs the previous sibling element of the itemList element
// itemList.previousElementSibling.style.color = 'green'; // changes the color of the previous sibling element of the itemList element

// createElement

// // create a div
// let newDiv = document.createElement('div'); // creates a new div element

// // add class
// newDiv.className = 'hello'; // adds a class to the new div element

// // add id
// newDiv.id = 'hello1'; // adds an id to the new div element

// // add attribute
// newDiv.setAttribute('title', 'Hello Div'); // adds an attribute to the new div element

// // Create text node
// let newDivText = document.createTextNode('hello world'); // creates a new text node
// // Append text to div
// newDiv.appendChild(newDivText); // appends the text node to the new div element

// let container = document.querySelector('header .container'); // gets the element with the class of container in the header
// let h1 = document.querySelector('header h1'); // gets the h1 element in the header

// newDiv.style.fontSize = '30px'; // changes the font size of the new div element

// console.log(newDiv); // logs the new div element

// // insert the new div before the h1 element
// container.insertBefore(newDiv, h1); // inserts the new div element before the h1 element

