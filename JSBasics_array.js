//var marks = Array(6)
//var Marks = new Array (70,75,85,90,68,88)

var marks = [70,75,85,90,68,88]
subMarks = marks.slice(2,5)
console.log(subMarks)

console.log(marks[2])
marks[3] = 92
console.log(marks)
console.log(marks.length) //6

marks.push(99) //adding element to arrray
console.log(marks)

marks.pop() //deletes last element of the arrray
console.log(marks)

marks.unshift(17) //adding element at the beginning of the array
console.log(marks)

console.log(marks.indexOf(88)) //prints the index no.

console.log(marks.includes(80)) //checks the elements is present in the array or not


console.log("Printing the values using for loop")

for(let i = 0; i<marks.length; i++)
{
    console.log(marks[i])
}
 //--------------------------------------------------//

console.log("Summing the values using for loop")

var sum = 0;
for(let i = 0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
 console.log(sum)

 //--------------------------------------------------//

console.log("Summing the values using reduce method")

let total = marks.reduce((sum, mark)=> sum+mark, 0)

console.log(total)

 //--------------------------------------------------//

//Create new array with even number of scores array 

console.log("New array having even values")

var scores = [12,13,14,16]

var evenScores = []

for(let i = 0; i<scores.length; i++)
{
   
    if (scores[i] % 2 == 0)
    {
        evenScores.push(scores[i])

    }

}
console.log(evenScores)

//Create new array with even number of scores array with filter

console.log("New array having even values using filter")

let filterEvenScores = scores.filter(score => score % 2 == 0)
console.log(filterEvenScores)

//Create new array with even number and multiply the new values with 3 using map

console.log("Multiplying the even values with 3 using map ")

let mappedArray = filterEvenScores.map(score => score*3)
console.log(mappedArray)

//Add the multiplied values using reduce

console.log("Add the multiplied values using reduce ")

let addMappedValue = mappedArray.reduce((sum, val) => sum + val, 0)

console.log(addMappedValue)

//Find even values, multiply with 3 and add the new values using chaining

console.log("Find even values, multiply with 3 and add the new values using chaining")

let totalValue = scores.filter(score => score % 2 == 0).map(score => score*3).reduce((sum, val) => sum+val, 0)
console.log(totalValue)

//--------------------------------------------------//

//Sorting fruits name
console.log ("Sorting fruits name")
let fruits = ["Banana", "Grape", "Apple", "Pineapple"]

fruits.sort()
console.log(fruits)

//Sorting fruits name in reverse order
console.log("Sorting fruits name in reverse order")
fruits.reverse()
console.log(fruits)

//Sorting numbers
console.log ("Sorting numbers")

var scores1 = [12, 3, 19, 16, 14, 3]

console.log(scores1.sort((a,b) => a-b))
