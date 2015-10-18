function chain(input, fs) {
var result = 0;
var args = Array.prototype.slice.call(arguments);

for (var i = 1; i < args.length; i++) {
  var argsI = args[i];

  var argsJ = argsI[0](input);

  for (var j = 1; j < argsI.length; j++) {
    argsJ = argsI[j](argsJ);

  }
  return argsJ;
}

}

function add(x) {
	return x + 10;
}

function mult(x) {
	return x * 30;
}

function div(x) {
	return x / 2;
}

function sub(x) {
	return x - 10;
}

chain(2, [add, mult, div, sub]);
