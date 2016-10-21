/* This one didn't work because at the point I iterated i, it became a number.
var myArray = [true, true, true, true, true, true, true, true, true, true];

for( i = null; i <= myArray.length; i++ ){
  if( i === null )  {}
  else              { console.log(i); }

}
*/

// Attempt #2 ... a long way
/*
var arrA = [ true ];
console.log( arrA.length );
var arrB = [ true, true ];
console.log( arrB.length );
var arrC = [ true, true, true ];
console.log( arrC.length );
var arrD = [ true, true, true, true ];
console.log( arrD.length );
var arrE = [ true, true, true, true, true ];
console.log( arrE.length );
var arrF = [ true, true, true, true, true, true ];
console.log( arrF.length );
var arrG = [ true, true, true, true, true, true, true ];
console.log( arrG.length );
var arrH = [ true, true, true, true, true, true, true, true ];
console.log( arrH.length );
var arrI = [ true, true, true, true, true, true, true, true, true ];
console.log( arrI.length );
var arrJ = [ true, true, true, true, true, true, true, true, true, true ];
console.log( arrJ.length );
*/
/*
console.log(0001); // 1
console.log(0010); // 2
console.log(0011); // 3
console.log(0100); // 4
console.log(0101); // 5
console.log(0110); // 6
console.log(0111); // 7
console.log(1000); // 8
console.log(1001); // 9
console.log(1010); //10
*/

console.log(false, false, false, true); // 1
console.log(false, false, true, false); // 2
console.log(false, false, true, true); // 3
console.log(false, true, false, false); // 4
console.log(false, true, false, true); // 5
console.log(false, true, true, false); // 6
console.log(false, true, true, true); // 7
console.log(true, false, false, false); // 8
console.log(true, false, false, true); // 9
console.log(true, false, true, false); //10
