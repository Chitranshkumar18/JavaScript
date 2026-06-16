const user = {
    username: "Lakshay",
    password: "1818",

    welcome: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//{ username: 'Lakshay', password: '1818', welcome: [Function: welcome] }
    }
}
// user.welcome();
// user.username = "Chitransh"
// user.welcome();// username changed 


// console.log(this);


// function chai(){
//     let username = "Lakshay"
//     console.log(this.username); 
// }
// chai();

// const chai = function(){
//     let username = "Chitransh"
//     console.log(this.username);
// }
// chai();


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => (num1 +num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3,4))

