for (let a = 0; a < 10; a++) {
    console.log('a = ', a);
}

let b = 0;
do {
    console.log('b = ', b);
    b += 1;
} while (b < 10);

let c = 0;
while (c < 10) {
    console.log('c = ', c);
    c++;
}

for (let d = 100; d >= 0; d -= 10) {
    console.log('d = ', d);
}

let e = 100;
do {
    console.log('e = ', e);
    e -= 10;
} while (e >= 0);

let f = 100;
while (f >= 0) {
    console.log('f = ', f);
    f -= 10;
}
