// module.exports.counter = function(arr){
//   return 'There are ' + arr.length + ' Element in this array';
// };

// module.exports.adder = function(a,b){
//   return `The sum of the 2 numbers is ${a+b}`;
// }

// module.exports.pi = 3.142

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


// Another way to exports: up

// another way
var counter = function(arr){
  return 'There are ' + arr.length + ' Element in this array';
};

var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};