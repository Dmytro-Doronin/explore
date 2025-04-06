//part 1

let age = prompt("Enter your age:");
let ageNum = Number(age);

if (ageNum >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - ageNum;
    console.log(`You are left with ${yearsLeft} year${yearsLeft > 1 ? 's' : ''} to drive.`);
}

let myAge = 25;
let yourAge = prompt("Enter your age:");
yourAge = Number(yourAge);

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} year(s) older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} year(s) older than you.`);
} else {
    console.log("We are the same age!");
}

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);


let number = prompt("Enter a number:");
number = Number(number);

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

//part 2

let score = prompt("Enter student score:");
score = Number(score);

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score");
}

let month = prompt("Enter month:").toLowerCase();

if (["september", "october", "november"].includes(month)) {
    console.log("The season is Autumn.");
} else if (["december", "january", "february"].includes(month)) {
    console.log("The season is Winter.");
} else if (["march", "april", "may"].includes(month)) {
    console.log("The season is Spring.");
} else if (["june", "july", "august"].includes(month)) {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month name.");
}

let day = prompt("What is the day today?").toLowerCase();

if (["saturday", "sunday"].includes(day)) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (
    ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)
) {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
    console.log("Invalid day name.");
}