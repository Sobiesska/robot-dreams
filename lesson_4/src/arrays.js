const stringArray = ['string', 'string2', 'string3', 'string4', 'string5'];
const copyStringArray = [];
const numberArray = [-1, 17, 0, -4, 18];
const booleanArray = [true, false, true, false, true];
const anyArray = ['string', 1, true, { name: 'Lilia', age: 37 }, [1, 2, 3]];

// forEach
stringArray.forEach((item) => {
    copyStringArray.push(item);
});
console.log('Copied stringArray now contains', copyStringArray, 'array');

// filter
const filteredNumberArray = numberArray.filter((num) => num >= 0);
console.log('Filtered numberArray is', filteredNumberArray);

// map
const mappedArray = numberArray.map((num) => num * 2);
console.log('mappedArray = ', mappedArray);

// set
const setArray = new Set(booleanArray);
console.log(Array.from(setArray.values()));

// toString
const anyArrayAsString = anyArray.toString();
console.log('Return anyArray as string =>', anyArrayAsString);

// indexOf
const indexOfItem = stringArray.indexOf(`${stringArray[3]}`);
console.log(`Index of "${stringArray[3]}" is`, indexOfItem);

// includes
const includedItem = stringArray.includes(`${stringArray[2]}`);
console.log(`Does stringArray include "${stringArray[2]}"?`, includedItem);

// reduce
const sumOfNumbers = numberArray.reduce((accumulator, current) => accumulator + current);
console.log('Summary of items in numberArray =', sumOfNumbers);

// slice
const slicedStringArray = stringArray.slice(1, 3);
console.log('Sliced stringArray:', slicedStringArray);

// sort
const sortedStrings = [...booleanArray].sort();
console.log('Alphabetically sorted items in booleanArray:', sortedStrings);

const sortedNumbersAsc = [...numberArray].sort((a, b) => a - b);
console.log('Numbers sorted ASC in numberArray:', sortedNumbersAsc);

// concat
const concatenatedStringArray = stringArray.concat(['string6', 'string7']);
console.log('Concatenated strings in stringArray:', concatenatedStringArray);
