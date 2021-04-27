Learn about Functional Programming


// Only change code below this line
const tea4TeamFCC = getTea(40); // :(
// Only change code above this line




Understanding Functional Programming Terminology

// Only change code below this line

const tea4GreenTeamFCC=getTea(prepareGreenTea, 27); // :)

const tea4BlackTeamFCC=getTea(prepareBlackTea, 13); // :)

// Only change code above this line



Avoid Mutations and side effects using Functional Programming


  // Only change code below this line

         return fixedValue +1;
  // Only change code above this line




Pass Arguments to Avoid External Dependence in a Function

// Only change code below this line
function incrementer (value) {
return fixedValue +1;

  // Only change code above this line
}




Refactor Global Variables Out of Functions ***(like our class example)

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);



Use the map Method to Extract Data from an Array

const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));