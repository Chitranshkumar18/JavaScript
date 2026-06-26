class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username ${this.username}`); 
    }
    static createId(){
        return `123`
    }
}


const Lakshay = new User("Lakshay")
Lakshay.logMe()

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const i = new Teacher("iphone", "i@google.com")
console.log(i.createId);
i.logMe()


//node 09_class/07_static.js