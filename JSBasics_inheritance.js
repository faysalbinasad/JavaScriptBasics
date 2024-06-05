const Person = require("./JSBasics_class");

class Pet extends Person
{
    get location()
    {

        return "BlueCross"
    }


    constructor(firstName, lastName)
    {

        //call parent class constructor

        super(firstName, lastName)

    }

}

let pet = new Pet("Mini", "Kini")

pet.fullName()
console.log(pet.location)