// named function example
function calcTax(subTotal) {
  // calculate hst
  return subTotal * 0.13;
}

var tax;

tax = calcTax(100);

console.log(tax);

// try anonymous function for async code
var tax = function(subTotal) {
  return subTotal * 0.13;
};

console.log(tax(100));
