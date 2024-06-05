//function

console.log("Adding numbers using function")

function add(a,b)
{
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Function, do not have name => Anonymous function--Function expression

console.log("Printing the total values using anonymous function")

let sumOfIntegers = (c,d) => c+d

sumOfIntegers(4,5)

console.log(sumOfIntegers(4,5))

//--------------------------------------------------------------------//

const greet = "Evening"

if(1 == 1)
{
    let greet = "Afernoon"
}

function add(a,b)
{

    let greet = "Morning"
    return a+b
}

let sum1 = add(2,3)
console.log(sum1)
console.log(greet)