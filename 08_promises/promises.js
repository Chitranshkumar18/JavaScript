//         Promise

//            │

//      Promise created
//           |
//        Pending

//       /       \

//  Success      Failure

//    │             │

//  Resolved     Rejected

//    │             │

//  then()      catch()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
const promisesOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB call, cryptography, network
    setTimeout(function(){
        //console.log('Async task is complete');
                                                                    
    },1000)                                                             
})

promisesOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
          setTimeout(function(){
             // console.log("async task 2");
              resolve()
              
          },1000)
}).then(function(){
  // console.log("Async 2 resolved");
    
})


const promisesThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "Lak@gmail.com"})
    },1000)
})

promisesThree.then(function(user){
   // console.log(user);
    
})

const promisesfour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Lakshay", password: "123"})
        }
        else{
            reject('ERROR: somthing went worng')
        }
    },1000)
})

promisesfour.then((user) => {
   // console.log(user);
    return user.username;
    
}).then((username)=>{
   // console.log(username);
}).catch(function(error){
   // console.log(error);
})//.finally(()=> console.log("the promises is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// node 08_promises/promises.js
