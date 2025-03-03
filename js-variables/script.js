let x = 10;
console.log(x);
let a = true
console.log(a);


console.log(typeof(x));
console.log(typeof(a));

let c = 'string c';
let v = "string v";
let b = `string b`;

console.log(typeof(c));
console.log(typeof(v));
console.log(typeof(b));

// concat (+)

let naam = "likhitha";
let kaam = "intern";
let state = "AP";

console.log("Hi my name is " + naam + " i am a " + kaam + " and i put up in " + state);

// String template literals
console.log(`Hi my name is ${naam} i am a ${kaam} and i put up in ${state}`);

let = str1 = "my name is ";
let str2 = "likhitha";
let out3 = str1.concat(str2);
console.log(out3);


let naam1 = "likhitha";
let naam2 = "         likhitha  ";

console.log(naam2.length);
let naam3 = naam2.trim();
console.log(naam3.length);

let str = "sLikdtaSDFfgf"
console.log(str.toUpperCase());
console.log(str.toLowerCase());



// Number
let q = 10;
let w = -10.5;
let e = 10.3;

console.log(typeof(q));
console.log(typeof(w));
console.log(typeof(e));


let r = 20;
let t = 10;
console.log(r + t);
console.log(t - r);
console.log(t*r);
console.log(t/r);

// remainder
console.log(r%6);
//exp/power
console.log(20**3);

console.log(1/0);
console.log(typeof(1/0));
console.log(-1/0);
console.log(0/0);
console.log(typeof(0/0));


// Math Methods

console.log(Math);
console.log(Math.floor(9.3), Math.floor(9.9999));
console.log(Math.ceil(9.000009), Math.ceil(9.999));
console.log(Math.round(9.4), Math.ceil(9.9999));
console.log(Math.sqrt(8));
console.log(Math.min(1, 4, 8, 0));
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.ceil(Math.random()*10))
console.log(Math.random()*98)

console.log(Math.floor(Math.log()))