"use struct"

class PrintEditionItem {
    state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    setState(num) { // почему то не верно, хотя работает
        if(num < 0) {
            this.state = 0;
        } else if(num > 100) {
            this.state = 100;
        } else {
            this.state = num;
        }
    }

    fix() {
        this.setState(this.state *= 1.5);
    }

    getState() {
        return this.setState(); // почему то не верно, хотя работает
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem { //почему то не верно, хотя работает
    type = "book";

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = name;
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


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(this.setState(this.state) > 30) { // не пойму как указать проверку
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        this.books.find((type, value) => {
            if(type === true && value === true){ // думаю как то так, но не правильно
                this.books;
            }
        })
      
     
    }
      
    giveBookByName(bookName) {
        this.books.forEach(bookName => {
            if(includes(bookName)) {
                delete this.books.bookName; // тоже не верно
                return bookName;
            } else {
                return null;
            }
        }) 

    }
}
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100


   const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


  const library = new Library("Библиотека имени Ленина");

  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
   );
   library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
   );


library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"


