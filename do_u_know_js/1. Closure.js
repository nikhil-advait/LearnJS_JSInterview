
//Aim of this question/exercise is to learn concepts of closure.


//Q: Write adder function such that following code runs


var add5 = adder(5);
var add7 = adder(7);

console.log( add5(5) ); //prints: 10
console.log( add7(8) ); //prints: 15




//Answer: using ES5

function adder(a) {
  return function (b) {
    return a + b;
  };
}


//Answer: using ES6

const adder = (a) => (b) => a + b;
