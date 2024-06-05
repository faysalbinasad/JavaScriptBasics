//Object is a collection of properties

let person = {

    firstName : "Faysal Bin",
    lastName : " Asad",
    age : 31,
    fullName : function()
    {
        console.log (this.firstName + this.lastName)
    }
}
console.log("Printing the full name of the Person object")
console.log(person.fullName())
console.log("Printing the last name of the Person object")
console.log(person.lastName)
console.log(person['lastName'])

//Print the changed First Name
person.firstName = 'Mohammed'
console.log("Print the changed First Name")
console.log(person['firstName'])

//Add new property to the object
person.gender = 'Male'
console.log("Newly added property of the object")
console.log(person)

//Delete the added property
delete person.gender
console.log("Updated properties are")
console.log(person)

//Checking whether any property is present in the object or not
//Will return true if exists, false if not exists
console.log('The searched property is present in the object')
console.log('gender' in person)

//Printing every value of the keys of the object
for(let key in person)
{
    console.log(person[key])
}