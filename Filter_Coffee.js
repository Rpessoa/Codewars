function search(budget, prices) {
var arr = [];
prices.map(function(elem) {
    (elem <= budget ? arr.push(elem) : "")
});
return arr.sort(function(a, b) {return a - b;}).join(",");
}
