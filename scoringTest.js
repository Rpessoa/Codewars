//returns the test score
function scoreTest(str, right, omit, wrong){
//insert code here
  function adding(elem){
    if(elem === 0) {
    return right;
    } else if(elem === 1) {
    return omit;
    }else if(elem === 2) {
    return -1 * wrong;
    }
  };

var str1 = str.map(adding);
var str2 = str1.reduce(function(a, b){return a + b;});

return str2;
};
