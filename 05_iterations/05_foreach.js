//forEach => Array, Map, Set

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){
//    // console.log(val);  
// })

//+++++ with arrows++++++++//

// coding.forEach((item) => {
//     //console.log(item);  
// })

// another way
function printme(num){
    //console.log(num);  
}
coding.forEach(printme)


coding.forEach((val, index, arr) => {
    console.log(val, index, arr);
})


const mycoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]


mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})

