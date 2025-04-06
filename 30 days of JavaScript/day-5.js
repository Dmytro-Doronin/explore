//1-part

let emptyArray = [];


console.log(numbers.length); // => 7

console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);


let mixedDataTypes = ['Text', 100, true, null, undefined, { key: 'value' }, [1, 2, 3]];
console.log(mixedDataTypes.length);


let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0]); // Facebook
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // Apple
console.log(itCompanies[itCompanies.length - 1]); // Amazon

for (let company of itCompanies) {
    console.log(company);
}

for (let company of itCompanies) {
    console.log(company.toUpperCase());
}

console.log(`${itCompanies.join(', ')} are big IT companies.`);

let searchCompany = 'Google';
if (itCompanies.includes(searchCompany)) {
    console.log(searchCompany);
} else {
    console.log('Company not found');
}
let companiesWithTwoOs = [];
for (let company of itCompanies) {
    let count = company.toLowerCase().split('o').length - 1;
    if (count > 1) {
        companiesWithTwoOs.push(company);
    }
}
console.log(companiesWithTwoOs);
console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

let midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    console.log(itCompanies.slice(midIndex - 1, midIndex + 1));
} else {
    console.log(itCompanies.slice(midIndex, midIndex + 1));
}

itCompanies.shift();
console.log(itCompanies);

let middle = Math.floor(itCompanies.length / 2);
itCompanies.splice(middle, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies = [];
console.log(itCompanies); // []

//part 2

export const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
export const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');

console.log(words);
console.log(words.length); // 13

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log(countries);
}

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

