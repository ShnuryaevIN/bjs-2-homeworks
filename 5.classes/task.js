"use strict"

class PrintEditionItem {
    #state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(numState) {
        if(numState < 0) {
             this.#state = 0;
        } else if(numState > 100) {
             this.#state = 100;
        } else {
             this.#state = numState;
        }
    }

    get state() {
        return this.#state;
    }


}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

/*=========================== Задача 2 ========================*/   

class Library {
    constructor(name, ...books) {
        this.name = name;
        this.books = [...books];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const result = this.books.find(item => item[type] === value);
        return result || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if(!book) {
            return null;
        } else {
            this.books = this.books.filter(item => item.name !== bookName);
            return book;
        }
    }
}