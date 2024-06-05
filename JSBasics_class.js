module.exports = class Person
{


age = 31

//location = "Canada"
get location() // <---- this is a property
{

    return "Canada"
}
//Constructor is method which executes by default when you create object of the class
constructor(firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName

}
// Methods
fullName()
{
    console.log (this.firstName + " " + this.lastName)
}


}

/* let person = new Person("Faysal Bin", " Asad")
let person1 = new Person("Ahnaf Muttaqi", " Fayjan")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
console.log(person1.fullName()) */