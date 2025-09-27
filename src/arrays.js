const stringArray = ['string', 'string2', 'string3', 'string4', 'string5'];
const copyStringArray = [];
const numberArray = [-1, 17, 0, -4, 18];
const booleanArray = [true, false, true, false, true];
const anyArray = ['string', 1, true, { name: 'Lilia', age: 37 }, [1, 2, 3]];

stringArray.forEach((item) => {
    copyStringArray.push(item);
});
console.log('Copied stringArray now contains', copyStringArray, 'array');

const filteredNumberArray = numberArray.filter((num) => num >= 0);
console.log('Filtered numberArray is', filteredNumberArray);

const mappedArray = numberArray.map((num) => num * 2);
console.log('mappedArray = ', mappedArray);

const setArray = new Set(booleanArray);
console.log(Array.from(setArray.values()));

console.log('Return anyArray as string =>', anyArray.toString());
console.log(`Index of "${stringArray[3]}" is`, stringArray.indexOf(`${stringArray[3]}`));
