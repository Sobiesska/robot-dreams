const stringArray = ['string1', 'string2', 'string3', 'string4', 'string5'];
const numberArray = [1, 2, 3, 4, 5];
const combinedArray = [...stringArray, ...numberArray];

export const sumArrayItems = (array: (string | number)[]): string | number => {
    if (array.every(item => typeof item === 'number')) {
        return (array as number[]).reduce((accumulator, current) => accumulator + current);
    } else if (array.every(item => typeof item === 'string')) {
        return (array as string[]).reduce((accumulator, current) => accumulator + current);
    } else {
        return array.reduce((accumulator, current) => accumulator.toString() + current.toString());
    }
};

const sumNumbers = sumArrayItems(numberArray);
const sumStringsAndNumbers = sumArrayItems(combinedArray);

console.log(sumNumbers);
console.log(sumStringsAndNumbers);
