// import i from 'i';
// if (5*2 == 10) {
//     console.log("Your answer is correct")
// }
// else{
//     console.log("Your answer is incorrect")
// }

// let i = 0;
// while (i < 10){
//     console.log("Namaste")
//     i++
// }

// function cookMaggi(maggi, pani, tapeli){
//     console.log("Your maggi will be ready in "
//                     + maggi * 2
//                     + " minutes "
//                     +" and Ingredients used are: "
//                     + maggi + " Maggi "
//                     + pani + " cups of water "
//                     + "using " + tapeli + " pan")
// }

// cookMaggi(4 , 8, 1);

// let bread1 = prompt("Which bread would you like to have?");
// let veggies1 = prompt("what are your favourite veggies?");
// let sauce1 = prompt("Which sauce would you like to have?");

// function makeSandwich(bread, veggies, sauce){
//     let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich is ready ";
//     return sandwich;
// }

// let vegSandwich = makeSandwich(bread1, veggies1, sauce1);
// console.log(vegSandwich)

//Strings
var favShow = "Game of Thrones";
console.log(favShow.length)

console.log(favShow[0]);

console.log(favShow[2]);

console.log(favShow.indexOf("o"));

console.log(favShow.slice(5,7));

var srk = "My name is KhAN";
console.log(srk.toUpperCase());
console.log(srk.toLowerCase());

//Dot Notation
let animal = {
    name: "Cow",
    legs: 4,
}
//Bracket Notation
let legProp = "legs"
console.log(animal[legProp]);

//Arrays
let selectBooks = [
    "The Rudest Book Ever", "Rich Dad, Poor Dad"
]
console.log(selectBooks.length)

//Functions
function namasteWorld(name){
    console.log("Namaste " + name);
}
namasteWorld("Leena Goyal")

function addition(a, b){
    return a+b;
}
console.log(addition(5, 5))










