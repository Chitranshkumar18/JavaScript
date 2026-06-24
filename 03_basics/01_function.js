
// Why Do We Use Functions?

// Without functions:

// console.log("Hello Chitransh");
// console.log("Hello Chitransh");
// console.log("Hello Chitransh");

// Same code baar-baar likhna padega.

// With functions:

// function greet() {
//     console.log("Hello Chitransh");
// }

// greet();
// greet();
// greet();

// ✅ Code reusable ho jata hai.
// ✅ Code readable hota hai.
// ✅ Maintenance easy ho jati hai.







function hello(){
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");
}

hello() // hello is only refrence and () is execution


function addtwo(number1, number2){//(number1, number2) is parameter
    console.log(number1 + number2);
}
addtwo(3,4)//(3,4) is argument



// another way through the return
function add(number1, number2){
 return number1 + number2;
}
 const result = add(2,3)
 console.log(result);




 function loginUserMessage(username = "Lakshay"){//(username = "Lakshay") is override if any value pass inside the argument
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
  console.log(loginUserMessage("chitransh"))
 



  function calculate(...num1){
    return num1;
  }
  const num=calculate(100, 200, 300, 400, 500);
  console.log(num);//[ 100, 200, 300, 400, 500 ] follow array format


 function calculatenum(val1, val2, val3, ...num1){
    return num1;
  }
  const num0=calculatenum(100, 200, 300, 400, 500);
  console.log(num0);//[ 400, 500 ]




  // object ko function se access karna
  const user={
    username:"Lakshay",
    password:"12345",
  }
  function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
  }
  handleobject(user)



  const arr = [100, 200, 300, 400]
  function arrvalue(getarray){
    console.log(getarray[1]);
  }
  arrvalue(arr);
 // console.log(returnSecondValue([200, 400, 500, 1000]));
