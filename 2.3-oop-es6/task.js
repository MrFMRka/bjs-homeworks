// Задача 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      return this.state = this.state * 1.5;
    }
    
    set state(newCondition) {
      if (newCondition < 0) {
          this._state = 0;
      } else if (newCondition > 100) {
          this._state = 100;
      } else {
          this._state = newCondition;
        }
    }
    get state() {
      return this._state;
    }
  
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);    
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix(); 
console.log(sherlock.state);  
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine";
    }    
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "book";  
    }
}  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "novel";      
    }
}  
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) { 
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic";
    }
}  
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "detective";
    }
}
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
console.log(picknick.type);
console.log(picknick.releaseDate);
console.log(picknick.pagesCount);
picknick.fix();
console.log(picknick.state);
  
// Задача 2  
class Library  {
    constructor(name, books) { 
    this.name = name;
    this.books = [];
    }  

    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
 
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i ++) { 
        if (this.books[i][type] === value) {
          return this.books[i];
        } 
      }
      return null;
    }

    giveBookByName(bookName) {
      for (let n = 0; n < this.books.length; n ++) {
        if (this.books[n].name === bookName) {
          return this.books.splice(n, 1)[0];          
        }
      }
      return null;
    } 
}
  
const library = new Library("Библиотека имени Ленина");
  
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
  
console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);  
console.log("Количество книг до выдачи: " + library.books.length);

library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);
  
// Задача 3
class StudentLog{
    constructor(name){
        this.studentName = name;
        this.subjects = {}
    }
    getName(){
        return this.studentName;
    }
    addGrade(grade, subject){
        if (grade <= 5 && grade >= 1 && typeof(grade) === 'number'){
            if (this.subjects[subject]){
                this.subjects[subject].push(grade)
            } else {
                this.subjects[subject] = []
                this.subjects[subject].push(grade)
            }             
            return this.subjects[subject].length;
        } else {            
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.subjects[subject] ? this.subjects[subject].length : 0 
        }      
       
    }
    getAverageBySubject(subject){
        
        let count = 0;
        if (this.subjects[subject]){
            for (let mark of this.subjects[subject]){
                count += mark;
            }
            if (count > 0){
                return count / this.subjects[subject].length;
            } else {
                return 0;
            }   
        } else {
            return 0;
        }
        
    }
    getTotalAverage(){
        if (Object.keys(this.subjects).length === 0){
            return 0;
        }
        let count = 0;
        for (let subject in this.subjects){
            count += this.getAverageBySubject(subject)
        }
        return count / Object.keys(this.subjects).length;
    }
}

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade('отлично!', 'math');
log.addGrade(25, 'geometry');

console.log(log.getAverageBySubject('geometry')); 
console.log(log.getAverageBySubject('algebra')); 
console.log(log.getAverageBySubject('math')); 

console.log(log.getTotalAverage());