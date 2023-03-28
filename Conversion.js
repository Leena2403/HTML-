let a = 12;
let b = '6';
// let c = a/b;
console.log(a / b)

let number = "number";
let num1 = 15;
let num2 = 3;
let sum = number + num1 + num2;
console.log(sum)

var num = 13;
var num0 = 3;
var numb = "number";
var sum1 = num + num0 + numb;
console.log(sum1);

console.log([1] > null);

console.log('true' == true);

console.log('false' === false);

// let lecture = 10;
// let section = 3;
// let title = 'JavaScript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: "JavaScript",
//     notes: {
//         introduction: "Welcome to JS Course",
//     },
//     enrol() {
//         console.log('You are successfully enrolled');
//     }
// }

// function enrol(){
//     console.log('You are successfully enrolled')
// }

// course.enrol()
// console.log(course);

// course.price = 999;
// console.log(course)

//Factory Function - Camel Case
function createCourse(title) {
    return {
        title: title,
        enrol() {
            console.log('You are successfully enrolled');
        }
    }
}

// const course = createCourse("JavaScript");
// course.enrol();

// console.log(course);

//constructor Function - Pascal Case

function Course(title){
    this.title = title,
    this.enrol = function(){
        console.log('You are successfully enrolled');
    }
}

const course = new Course('JavaScript');
console.log(course.constructor);
console.log(newCourse.constructor);
// delete course.title;
course.checkEnrollment = function(){
    console.log('30 users are in')
}

course.enrol()
console.log(course);

// const course = new Course('JS');











