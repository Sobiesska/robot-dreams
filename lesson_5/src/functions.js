const stringArray = ['string1', 'string2', 'string3', 'string4', 'string5'];
const numberArray = [1, 2, 3, 4, 5];
const combinedArray = [...stringArray, ...numberArray];

function sumArrayItems(array) {
    return array.reduce((accumulator, current) => accumulator + current);
}

console.log(sumArrayItems(numberArray));
console.log(sumArrayItems(combinedArray));
