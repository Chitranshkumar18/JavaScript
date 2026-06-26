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
