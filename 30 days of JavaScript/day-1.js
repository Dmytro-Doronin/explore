//Part 1

// 1. Declare a variable named challenge and assign it
let challenge = '30 Days Of JavaScript';

// 2. Print the string
console.log(challenge);

// 3. Print the length of the string
console.log(challenge.length);

// 4. Convert to uppercase
console.log(challenge.toUpperCase());

// 5. Convert to lowercase
console.log(challenge.toLowerCase());

// 6. Cut out the first word using substr or substring
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 2));

// 7. Slice out 'Days Of JavaScript'
console.log(challenge.substr(3));
console.log(challenge.substring(3));

// 8. Check if 'Script' is in the string
console.log(challenge.includes('Script'));

// 9. Split the string into an array
console.log(challenge.split(''));

// 10. Split at space
console.log(challenge.split(' '));

// 11. Split company names
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace JavaScript with Python
console.log(challenge.replace('JavaScript', 'Python'));

// 13. Character at index 15
console.log(challenge.charAt(15));

// 14. Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. First occurrence of 'a'
console.log(challenge.indexOf('a'));

// 16. Last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// 17–19. Find "because" in sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

// 20. Remove whitespace
let stringWithSpaces = ' 30 Days Of JavaScript ';
console.log(stringWithSpaces.trim());

// 21. Check if starts with '30'
console.log(challenge.startsWith('30'));

// 22. Check if ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// 23. Match all 'a'
console.log(challenge.match(/a/g));

// 24. Concat strings
let str1 = '30 Days of ';
let str2 = 'JavaScript';
console.log(str1.concat(str2));

// 25. Repeat string 2 times
console.log(challenge.repeat(2));


//Part 2

// 1. Print quote by John Holmes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print quote by Mother Teresa
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// 3. Check if '10' === 10 and convert
console.log(typeof '10' === 10);               // false
console.log(Number('10') === 10);             // true

// 4. Check parseFloat('9.8') == 10
console.log(parseFloat('9.8') === 10);        // false
console.log(Math.round(parseFloat('9.8')) === 10);  // true

// 5. Check if 'on' is in both python and jargon
console.log('python'.includes('on') && 'jargon'.includes('on'));  // true

// 6. Check if 'jargon' is in the sentence
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));  // true

// 7. Random number between 0 and 100 inclusive
console.log(Math.floor(Math.random() * 101));

// 8. Random number between 50 and 100 inclusive
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Random number between 0 and 255 inclusive
console.log(Math.floor(Math.random() * 256));

// 10. Access random character in 'JavaScript'
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * js.length);
console.log(js.charAt(randomIndex));

// 11. Print pattern with escape characters
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12. Slice 'because because because'
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let first = longSentence.indexOf('because');
let last = longSentence.lastIndexOf('because') + 'because'.length;
console.log(longSentence.substring(first, last));


//part 3

let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveMatches = text.match(/love/gi);
console.log(loveMatches.length);

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseMatches = sentence.match(/because/gi);
console.log(becauseMatches.length);

