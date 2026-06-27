const user={
    username:"Lakshay",
    age :20,
    getuser :function(){
        console.log("i am here !");
        console.log(`username: ${this.username}`);
        //JavaScript me agar function kuch return nahi karta, to wo automatically:undefined return kr deta hai
        return(`age is:${this.age}`)// ab humne age return kr de hai isliye undefined return ni hoga 
    }
}
console.log(user.age);
console.log(user.getuser());


function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
}
const userOne = new User("Lakshay", 18, true)
const userTwo = new User("CHitransh", 17, true)
console.log(userOne);
console.log(userTwo);



//+++++++++++++++++  new    +++++++++++++++++++++++++
//              new User("Lakshay", 18, true)
//                             │
//                             ▼
// ┌──────────────────────────────────────────────┐
// │ Step 1: Create a new empty object            │
// │                                              │
// │ {}                                           │
// └──────────────────────────────────────────────┘
//                             │
//                             ▼
// ┌──────────────────────────────────────────────┐
// │ Step 2: Link the object to User.prototype    │
// │                                              │
// │ object.__proto__ = User.prototype            │
// └──────────────────────────────────────────────┘
//                             │
//                             ▼
// ┌──────────────────────────────────────────────┐
// │ Step 3: Bind `this` to the new object and    │
// │ execute the constructor function             │
// │                                              │
// │ this.username = "Lakshay"                    │
// │ this.loginCount = 18                         │
// │ this.isLoggedIn = true                       │
// └──────────────────────────────────────────────┘
//                             │
//                             ▼
// ┌──────────────────────────────────────────────┐
// │ Step 4: Automatically return the new object  │
// └──────────────────────────────────────────────┘
//                             │
//                             ▼
//                   userOne
//                   {
//                     username: "Lakshay",
//                     loginCount: 18,
//                     isLoggedIn: true
//                   }




