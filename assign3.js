// using process.argv
const myval = process.argv;

//creating array
let arr1=[];

//adding values to array
arr1.push(Number(myval[2]));
arr1.push(Number(myval[3]));

// console log the array
console.log(arr1);




//checking the values using if-else
if(Number(myval[2]),Number(myval[3])<10)

{ console.log(' entered values are less than 10')}

else if(Number(myval[2]),Number(myval[3])>10 && Number(myval[2]),Number(myval[3])<100)
{

console.log('entered values are greater than 10 but less than 100')    
}

else if(Number(myval[2]),Number(myval[3])>100 && Number(myval[2]),Number(myval[3])<1000)

{
    
    console.log('entered values are greater than 100 and less than 1000')
} else 

{
    console.log("entered values are greater than 1000")
}
