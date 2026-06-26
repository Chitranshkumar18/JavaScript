// class User{
//     constructor(username, email, password){
//        this.username = username;
//         this.email = email;
//         this.password = password

//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
 
// const code = new User("Lakshay", "lak@gmail.com", "12345")
//console.log(code.encryptPassword());
//console.log(code.changeUsername());

//+++++++++ behind the scene+++++++++++++++++++

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("chitransh", "Lakshay@google.com", "12389")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());