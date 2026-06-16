const userEmail = [] // it consider as a true 


if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email");
}


//+++++++++++++++++++ false value +++++++++++++++++++++// 


// false, 0, -0(zero), BigInt, "", null, undefined, NaN

//+++++++++++++++++++ true value  +++++++++++++++++++++//

// "0", 'false', " ", {}, fumction(){}



if(userEmail.length === 0){
    console.log("Array is empty");  
}

if('false'){// it consider true
    console.log("hye i am coder");
}


const emptobj = {}
if(Object.keys(emptobj).length === 0){
    console.log("object is empty");
    
} 



// Nullish Coalescing Operator (??): null undefined

let val;
val = 5 ?? 10// val store first value 
val1 = null ?? 10// val store second value because of first is null
val2 = null ?? null// null
val3 = undefined ?? undefined // undefined
val4 = null ?? undefined// undefined
val5 = undefined ?? null // null
val6 = null ?? undefined ?? 1// 1



console.log(val6);



//++++++++++ terniary operator ++++++++++++//

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
