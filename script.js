/*
Codewars JS training
*/

/* Best Practices answer:

function candies(kids){
  if (kids.length < 2) return -1;

  var max = Math.max.apply(null, kids);
  var extraCandies = kids.reduce(function (total, kid) {
    return total + max - kid;
  }, 0);
  return extraCandies;
}
*/





function candies(kids) {
  var saved = 0;
  var sum = 0;

// return -1 when 0 or 1 kid
if (kids.length < 2){

  return -1;

} else {
// return the largest number in the Array
  kids.filter(function(elem) {

    if (elem > saved) {

      saved = elem;

      return saved;
    }
  });
}
// return the sum of the results of the differences
  kids.forEach(function(elem) {

    sum += saved - elem;

    return sum;

  });

return sum;

}

console.log(`[5,8,6,4] should return: 9 : ${candies([5,8,6,4])}`);
console.log(`[1,2,4,6] should return: 11 : ${candies([1,2,4,6])}`);
console.log(`[] should return: -1 : ${candies([])}`);
console.log(`[1,6] should return: 5 : ${candies([1,6])}`);
console.log(`[none, none] should return: -1 : ${candies(["none", "bus", "car"])}`);
console.log(`[6] should return: -1 : ${candies([6])}`);
