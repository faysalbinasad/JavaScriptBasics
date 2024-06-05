const Person = require('./JSBasics_class') //importing class Person

// Printing String length
let day = "Tuesday "

console.log("Length of the string")
console.log(day.length)

// Printing sub-string
let subDay = day.slice(0,4)

console.log("Sub-day is: ")
console.log(subDay)

//Printing the character of a string
console.log("The second character of string is: ")
console.log(day[1])


//Splitting the character (Tue day)
let splitDay = day.split("s")

console.log("Splitted character")
console.log(splitDay[1].length)

console.log(splitDay[1].trim().length)

//Converting strings to number
console.log("Converting strings to number and find difference")
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()
console.log(diff)

//Concatenating of two strings
console.log("Concatenating of two strings")
let newQuote = day + "is Funday day"
console.log(newQuote)
console.log("The starting index/location of character")
let val = newQuote.indexOf("day", 5)
console.log(val)

//Counting the occurrence of a specific word/character

let count = 0
let val1 = newQuote.indexOf("day")
while(val1 !== -1)
    {
        count++
        val1 = newQuote.indexOf("day", val1+1)
    }
    console.log("The occurrence of day")
    console.log(count)

let person = new Person("Bangladesh", "Television")
console.log(person.fullName())