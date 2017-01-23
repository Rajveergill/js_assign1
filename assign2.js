//using process.argv;
const myval = process.argv;

//creating array
let arr1=[];


//console log third value

//converting the 3rd and 4th value to number
arr1.push(myval[2]);
console.log(arr1)
arr1.push(myval[3]);

//adding both the values
let a=(Number(arr1[0])) + (Number(arr1[1]));

//console log the sum
console.log(a);