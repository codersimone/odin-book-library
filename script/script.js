let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

function deleteBook(id) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    displayBooks();
}

function displayBooks() {
    const container = document.querySelector('.library-container');

    container.innerHTML = '';

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.id = book.id;

        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = book.title;

        const сardBody = document.createElement('div');
        сardBody.classList.add('card-body');

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = `<strong>Author:</strong> ${book.author}`;

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.innerHTML = `<strong>Volume:</strong> ${book.pages} pages`;

        const status = document.createElement('p');
        status.classList.add('status');
        status.innerHTML = `<strong>Status:</strong><span> ${
            book.isRead ? 'Already read' : 'Not read yet'
        }</span>`;

        const toggleReadStatusBtn = document.createElement('button');
        toggleReadStatusBtn.classList.add('toggle-read-status-btn');
        toggleReadStatusBtn.textContent = 'Change status';
        toggleReadStatusBtn.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks();
        });

        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.classList.add('delete-book-btn');
        deleteBookBtn.textContent = 'Delete book';
        deleteBookBtn.addEventListener('click', () => {
            deleteBook(book.id);
        });

        bookCard.appendChild(title);
        bookCard.appendChild(сardBody);

        сardBody.appendChild(author);
        сardBody.appendChild(pages);
        сardBody.appendChild(status);
        сardBody.appendChild(toggleReadStatusBtn);
        сardBody.appendChild(deleteBookBtn);

        container.appendChild(bookCard);
    });
}

addBookToLibrary(`The Master and Margarita`, `M. Bulgakov`, 528, true);
addBookToLibrary(
    `Harry Potter and the Philosopher's Stone`,
    `J. K. Rowling`,
    223,
    true
);
addBookToLibrary(`Dandelion Wine`, `R. Bradbury`, 281, false);

const newBookBtn = document.querySelector('.new-book-btn');
const newBookDialog = document.querySelector('.new-book-dialog');
const newBookForm = document.querySelector('.new-book-form');
const cancelBtn = document.querySelector('.cancel-btn');

newBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    newBookDialog.close();
});

newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(newBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const isRead = formData.get('isRead') === 'on';

    addBookToLibrary(title, author, pages, isRead);

    newBookForm.reset();
    newBookDialog.close();
});
