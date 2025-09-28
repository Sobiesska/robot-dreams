const b = 2;
const e = '5';
const f = 'six';
const g = true;
const h = null;
const i = undefined;
const j = NaN;
const k = { num1: 1, num2: 2 };
const l = [1, 2, 3, 4, 5];

const logicOne = b < e && b > 1;
const logicTwo = b >= e || b <= 3;
const logicThree = f === g;
const logicFour = h !== i;
const logicFive = !(j > k);
const logicSix = !(l[0] >= k.num1);

console.log('logicOne = ', logicOne);
console.log('logicTwo = ', logicTwo);
console.log('logicThree = ', logicThree);
console.log('logicFour = ', logicFour);
console.log('logicFive = ', logicFive);
console.log('logicSix = ', logicSix);
