const readline = require('readline-sync'); // pulls in the readline-sync functions for user input

let phrase = readline.question("Enter a word or phrase: "); // prompt user for a string
let index = readline.questionInt("Enter an index number to check: "); // prompt for an integer index; questionInt validates it's a number
console.log(typeof index); // confirms index is a real number, not a string

let character = phrase[index]; // use bracket notation to access the character at that index
console.log("The character at index " + index + " is: " + character); // print the result to the user