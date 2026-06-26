let myHero = ["thor", "virat"]

let heroPower = {
    thor: "hammer",
    virat: "bat",
    getpower: function(){
        console.log(`power is ${this.virat}`);
        
    }
}

console.log(heroPower.getpower());


Object.prototype.Lakshay = function(){// agar hum object mai kuch bhi add karte hai toh vo sb automaticaly sb mai chala jata hai because javascript mai sb cheez object hi hai 
    console.log(`lakshay says hello`);
}

heroPower.Lakshay()
console.log(myHero.Lakshay())

// but agar hum kuch array mai add kre toh vo sirf array mai hi add hoga object mai nhi 



//+++++++++++++++++++++++++++++. inheritance. ++++++++++++++++++++++++++++++++++//


const User = {
    name: "chai", 
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
   // __proto__: User// TASupport inherite property. => old way
}
 //morder syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideo);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let anotherUsername = "Lakshay     "



String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Chitransh".trueLength()
"cricket".trueLength()