// const dancer = {
//     lastName : "Altansukh",
//     name : "Undarmaa",
//     age : 25,
//     typesOffDance : "Ballet",
//     friends : ["Anu, Zulaa, Naraa"],
//     hobby: function () {}

// };
// console.log(dancer.age);

function filteredBooks(date) {
const books = [{ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },   
    { title: "1984", author: "George Orwell", year: 1949 },  
     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },  
      { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },   
      { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }];
let filteredBooks2 = []
      for (let i=0; i<books.length; i++){
        if(books[i].year >= date){
            filteredBooks2 = [...filteredBooks2, books[i]];
        }
      }
      console.log(filteredBooks2);
    }
    filteredBooks(1960)