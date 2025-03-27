function Book(title,author){
    let book ={}
    book.title=title
    book.author=author
    book.details = function(){
        console.log(`Title: ${this.title}, Author: ${this.author}`)
    }
    return book
}

function createLibrary(){
    return {
        arr:[],
        addBook : function(book){
            this.arr.push(book)
            
        },
        removeBook: function(Title){
            let i=this.arr.findIndex(e=>e.title==Title)
            if(i>-1){
                this.arr.splice(i,1)
            }
        },
        listBooks:function(){
            this.arr.forEach((e)=>{
                console.log(`title:${e.title},Authour:${e.author}`)
            })
        }
    }
}

const library = createLibrary();
console.log(library)

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

