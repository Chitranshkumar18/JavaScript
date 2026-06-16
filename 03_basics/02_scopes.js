// if(true){
//     let a=1;
//     const b=2;
//     var c=3;//var block se bhar bhi accesable hai isliye hum var ko use nhi karte hai 
//     console.log(a);
//     console.log(b);
// }
// console.log(c);



function one(){// parent
    const username = "Lakshay"

    function two(){//child
        const password = "123"
      //  console.log(username);
    }
   // console.log(password); // nested function parent child ko access nhi kr shakta hai jb child parent ko access kr shakta hai 
    two();
}
one();




if(true){
    const person = "Lakshay"
    if(person==="Lakshay"){
        const pass = " 123456789"
        //console.log(person + pass);
    }
   // console.log(pass); 
}
//console.log(person);




//++++++++++++++++++++++++ interesting  ++++++++++++++++++++++++++++++//

newone(5)
function newone (num){
    return num;
}
//newone(5)


hello(7)//Cannot access 'hello' before initialization 
const hello = function newtwo (num){
    return num;
}
//hello(6)