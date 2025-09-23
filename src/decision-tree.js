const a = 2;
const b = '5';
const c = 'six';
const d = true;

if (a < b) {
  console.log('a is greater than b');
}

if (c >= a || b < a) {
  console.log('c is greater than or equal to a or b is greater than a');
} else {
  console.log('c is smaller than a or b is greater than a');
}

if (d === c) {
  console.log('d is equal to c');
} else if (b > a && d !== c) {
  console.log('b is greater than a and d is not equal to c');
} else {
  console.log('b is smaller than a and d is equal to c');
}
