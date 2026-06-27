//++++++++++++++++++++++++++ PROTOTYPE   ++++++++++++++++++++++++++++//

    // Prototype ek object hai jisse dusre objects properties aur methods inherit karte hain.
   //Jab kisi object me koi property nahi milti, JavaScript uske prototype me dhoondti hai.
   // JavaScript Class-based language nahi hai. Ye Prototype-based language hai.
   // ES6 me class aayi, lekin internally JavaScript aaj bhi prototype hi use karti hai.
                            //        user

                            //         │

                            //         ▼

                            //  User.prototype

                            //         │

                            //         ▼

                            // Object.prototype

                            //         │

                            //         ▼

                            //        null


function multipleBy(num){// function, function bhi hai or object bhi hai 
    return num*5
}
multipleBy.power = 2 

console.log(multipleBy(5));
console.log(multipleBy.power);
console.log(multipleBy.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment =function(){
    this.score++;
}
createUser.prototype.printMe =function(){
 console.log(`price is ${this.score}`);

}

const tea = new createUser("tea", 25)
tea.increment()
tea.printMe()
