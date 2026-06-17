const mynum = [1,2,3,4,5,6,7,8]

const newnum = mynum.map( (item)=>{ return item+10} )
//console.log(newnum);

//++++++chain++++++++//

const arr1=mynum
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >=40)


console.log(arr1);
