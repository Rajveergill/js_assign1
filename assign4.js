//tip calculator program
const myVal=process.argv;

let Arra=[];
//passing mealcost and tip-percent from command line
let myMealCost = Arra.push(Number(myVal[2]));
let myTipPercent = Arra.push(Number(myVal[3]));

const tipAmount = (Number(myVal[3]) /100) * Number(myVal[2])

const totalowning = tipAmount + Number(myVal[2]) 

const output =`your meal was $${Number(myVal[2])} + a ${Number(myVal[3])}% tip = ${totalowning}`

//console the information
console.log(output)
