class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}abc`
    }

    set password(value){
        this._password = value
    }
}

const code = new User("hh@google.ai", "abc")
console.log(code.email);