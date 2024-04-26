// Description: This script tests various numeric
// conversion techniques
// Author Q. Newprogrammer

"use strict";

var a = "   101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

// 1. Int

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Int results:
101;
55;
402;
//NaN
