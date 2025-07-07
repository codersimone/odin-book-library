const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function () {
        let readStatus = this.isRead ? 'already read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}
