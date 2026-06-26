const user={
    username:"Lakshay",
    age :20,
    getuser :function(){
        console.log("i am here !");
        console.log(`username: ${this.username}`);
        
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




