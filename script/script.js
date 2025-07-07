const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

// const mainContainer = document.querySelector('.main-container');

// const libraryHeader = document.createElement('h1');
// libraryHeader.classList.add('library-header');
// libraryHeader.textContent = 'My library';
// mainContainer.appendChild(libraryHeader);

// const libraryContainer = document.createElement('div');
// libraryContainer.classList.add('library-container');
// mainContainer.appendChild(libraryContainer);

// function displayBooks() {
//     const container = document.querySelector('.library-container');
//     container.innerHTML = '';

//     myLibrary.forEach((book) => {
//         const bookCard = document.createElement('div');
//         bookCard.classList.add('book-card');
//         bookCard.innerHTML = `
//             <h3>${book.title}</h3>
//             <p><strong>Author:</strong> ${book.author}</p>
//             <p><strong>Volume:</strong> ${book.pages}</p>
//             <p><strong>Status:</strong> ${
//                 book.isRead ? 'Already read' : 'Not read yet'
//             }</p>
//         `;

//         container.appendChild(bookCard);
//     });
// }

// addBookToLibrary(`The Master and Margarita`, `M. Bulgakov`, 528, true);
// addBookToLibrary(
//     `Harry Potter and the Philosopher's Stone`,
//     `J. K. Rowling`,
//     223,
//     true
// );
// addBookToLibrary(`Dandelion Wine`, `R. Bradbury`, 281, false);

// displayBooks();
