//  const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach( (item) => {
//     //console.log(item);  
//     return item;
// })
// console.log(values);



// const nums = [1,2,3,4,5,6,7,8]
// const newNums = nums.filter( (num)=>(num>4) ) // yha pr humane without return statement ke num ko print kara liya hai 
// console.log(newNums)


const mynum = [1,2,3,4,5,6,7,8]
const arr = mynum.filter( (num)=>{
    return (num>4)// yha pr humane return statement ka use krk num ko print kar rhe hai because kya {} aa gye hai 
} ) 
//console.log(arr);



const arr1 = [9,8,7,6,5,4,3,2]
const arr2=[]
arr1.forEach( (val)=>{

    if(val>4){
       arr2.push(val)
    }

} )
//console.log(arr2);





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let userBooks = books.filter( (bk)=> bk.genre === 'History' )
  //console.log(userBooks);

  let userbooks = books.filter( (bk)=> bk.genre=== 'Science' && bk.publish >=1999 )
  
 console.log(userbooks);















