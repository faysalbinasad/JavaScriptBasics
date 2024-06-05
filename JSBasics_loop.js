/* const flag = true

if(!flag)
{
    console.log("Condition is satisfied")

}
else
{
    console.log(flag)
    console.log("Condition is not satisfied")
}    
//---------------------------------------------------------------------//
let i = 0
while(i>10)
{
    i++
    console.log(i)
}
//---------------------------------------------------------------------//
do
{

    i++
}while(i>10);
console.log(i)
//---------------------------------------------------------------------//
for(let k = 0; k<=10; k++)
{

    console.log(k)
}
//---------------------------------------------------------------------//  */

//From 1 to 10, give me the numbers which are multiple of 2 and 5

console.log("These numbers are multiple of 2 and 5")

let n = 0;

for(let k = 1; k<=100; k++)
{

    if(k%2 == 0 && k%5 == 0) // k%2 == 0 || k%5 == 0 (Any one of the conditions)
    {
        n++
        
        console.log(k)

        if (n == 3)
        break
    }

}