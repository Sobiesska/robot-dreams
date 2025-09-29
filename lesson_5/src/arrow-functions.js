const stringArray = ['string1', 'string2', 'string3', 'string4', 'string5'];
const numberArray = [1, 2, 3, 4, 5];
const combinedArray = [...stringArray, ...numberArray];

const sumArrayItems = (array) => {
    return array.reduce((accumulator, current) => accumulator + current);
};

const sumNumbers = sumArrayItems(numberArray);
const sumStringsAndNumbers = sumArrayItems(combinedArray);

console.log(sumNumbers);
console.log(sumStringsAndNumbers);
