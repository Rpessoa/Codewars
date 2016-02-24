/**
* Functional Programming: We use the methods provided by the language
* First you filter the values divisible by 2
* Second you multiply by 2 the values divisible by 2
* Finally you add the obtained values using reduce method the values
*/


const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter(function (elem) {
    if (elem % 2 === 0) {
        return elem;
    }
})
    .map(function (elem) {
        return elem * 2;
    })
    .reduce(function (elem, curr) {
        return elem + curr;
    });

console.log(arr); // [1, 2, 3, 4, 5]
console.log(newArr);  // 12
