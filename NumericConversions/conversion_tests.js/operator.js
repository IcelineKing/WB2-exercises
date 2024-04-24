// Description: This script tests various numeric
// conversion techniques
// Author Q. Newprogrammer

"use strict";

var a = "   101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

//4. unary + operator

a = +(a);
b = +(b);
c = +(c);
d = +(d);


console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Results:
101.1
55
//NaN
//NaN