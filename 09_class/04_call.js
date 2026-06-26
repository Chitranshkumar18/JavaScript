function SetUserName(username){
    this.username=username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUserName.call(this, username)// without call ye possible hi nhi hai 
    this.email=email
    this.password=password
}
const chai = new createUser("chai", "Lak@gamil.com", "123")
console.log(chai);

//node 09_class/03_prototype.js