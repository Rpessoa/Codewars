//FizzBuzz App

function fizzBuzz() {
  let i = 0;
  for(i; i < 101; i++){
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
};

fizzBuzz();
