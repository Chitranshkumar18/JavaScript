const arr = [1,2,3,4,5,6]

// shopping card ke liye use hota hai
const mytotal = arr.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 5)


// another way
//const myTotal = arr.reduce( (acc, curr) => acc+curr, 0)

const shoppingcard = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java",
        price: 9999
    },
    {
        itemName: "python",
        price: 99
    },
]


const princetotal = shoppingcard.reduce((acc, item) => acc +item.price, 0)

console.log(princetotal);//11097
