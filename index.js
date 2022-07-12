import { DateTime } from './modules/luxon.js';
import {
  btnAdd, table,
} from './modules/book.js';
import {
  addLink, addNew, contact, contactLink, list, listLink,
} from './modules/action.js';

const dateTime = document.getElementById('date');
let btnRemove;
let newBook;
let dataBase = [];

// create the date //
dateTime.innerHTML = DateTime.now();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    dataBase.push(this);
  }

  displayBook() {
    const row = document.createElement('tr');
    table.appendChild(row);
    const information = document.createElement('td');
    information.textContent = `"${this.title}" by ${this.author}`;
    row.appendChild(information);
    const dataRemove = document.createElement('td');
    row.appendChild(dataRemove);
    btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    dataRemove.appendChild(btnRemove);

    btnRemove.addEventListener('click', (e) => {
      const parentBtn = e.target.parentNode;
      dataBase = dataBase.filter((x) => (x.author !== this.author) || (x.title !== this.title));
      parentBtn.parentElement.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }
}

btnAdd.addEventListener('click', () => {
  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;
  newBook = new Book(nameTitle, nameAuthor);
  newBook.addBook();
  newBook.displayBook();

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    newBook = new Book(dataBase[i].title, dataBase[i].author);
    newBook.displayBook();
  }
}

let includeActive;

// Add click event for list link - Make section-table appears //

listLink.addEventListener('click', () => {
  for (let i = 0; i < list.classList.length; i += 1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === false) {
    list.classList.add('active');
  }

  // review if section-add have the class 'active'//
  for (let i = 0; i < addNew.classList.length; i += 1) {
    if (addNew.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    addNew.classList.remove('active');
  }

  // review if section-content have the class 'active'//
  for (let i = 0; i < contact.classList.length; i += 1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    contact.classList.remove('active');
  }
});

// Add click event for Add new link - Make section-add appears //
addLink.addEventListener('click', () => {
  for (let i = 0; i < addNew.classList.length; i += 1) {
    if (addNew.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === false) {
    addNew.classList.add('active');
  }

  // review if section-table has the class 'active'//
  for (let i = 0; i < list.classList.length; i += 1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    list.classList.remove('active');
  }

  // review if section-contact has the class 'active' //
  for (let i = 0; i < contact.classList.length; i += 1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    contact.classList.remove('active');
  }
});

// Add click event for Contact link - Make section-contact appears //

contactLink.addEventListener('click', () => {
  for (let i = 0; i < contact.classList.length; i += 1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }
  if (includeActive === false) {
    contact.classList.add('active');
  }

  // review if section-table has the class 'active' //
  for (let i = 0; i < list.classList.length; i += 1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }
  if (includeActive === true) {
    list.classList.remove('active');
  }

  // review if section-add has the class 'active' //
  for (let i = 0; i < addNew.classList.length; i += 1) {
    if (addNew.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }
  if (includeActive === true) {
    addNew.classList.remove('active');
  }
});
