export const btnAdd = document.getElementById('button');
export const table = document.getElementById('tbody');
export let btnRemove;
export let newBook;
export let dataBase = [];

// create class //

export class Book {
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

