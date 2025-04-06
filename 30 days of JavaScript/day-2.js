//1 part

let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number


console.log(typeof '10' === typeof 10); // false

console.log(parseInt('9.8') === 10); // false

console.log(Boolean(1));         // true
console.log(Boolean('hello'));  // true
console.log(Boolean([]));       // true

console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

console.log(4 > 3);       // true
console.log(4 >= 3);      // true
console.log(4 < 3);       // false
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false

let python = 'python';
let jargon = 'jargon';

console.log(python.length === jargon.length); // true
console.log(python.length !== jargon.length); // false (falsy statement)


console.log(4 > 3 && 10 < 12);         // true
console.log(4 > 3 && 10 > 12);         // false
console.log(4 > 3 || 10 < 12);         // true
console.log(4 > 3 || 10 > 12);         // true
console.log(!(4 > 3));                 // false
console.log(!(4 < 3));                 // true
console.log(!false);                  // true
console.log(!(4 > 3 && 10 < 12));      // false
console.log(!(4 > 3 && 10 > 12));      // true
console.log(!(4 === '4'));             // true

console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false


const now = new Date();

console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1);
console.log('Date:', now.getDate());
console.log('Day:', now.getDay());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds since 1970:', Math.floor(now.getTime() / 1000));

//Part 2

let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
let perimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

let length = prompt("Enter length:");
let width = prompt("Enter width:");
let rectArea = length * width;
let rectPerimeter = 2 * (Number(length) + Number(width));
console.log(`Area: ${rectArea}, Perimeter: ${rectPerimeter}`);

let radius = prompt("Enter radius:");
const pi = 3.14;
let circleArea = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`Area: ${circleArea}, Circumference: ${circumference}`);

// y = 2x - 2
console.log('Slope:', 2);
console.log('Y-intercept:', -2);
console.log('X-intercept:', 1);

let slope = (10 - 2) / (6 - 2); // = 8 / 4 = 2
console.log('Slope between points:', slope);

console.log('Slopes are equal:', 2 === 2); // true

let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
let salary = hours * rate;
console.log(`Your weekly earning is ${salary}`);


let name = prompt("Enter your name:");
if (name.length > 7) {
    console.log("Your name is long");
} else {
    console.log("Your name is short");
}
