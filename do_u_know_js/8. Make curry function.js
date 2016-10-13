/*
Question: Write a myCurry function

If we keep returning new function until all arguments of original function are not satisfied, then
its called currying.


function sum(a, b, c){
  return a+b+c;
};

console.log( myCurry(sum)(1,2,3) ); // 6
console.log( myCurry(sum)(1,2)(3) ); //6
console.log( myCurry(sum)(1)(2)(3) ); //6

So write a myCurry function.

*/


//Answer:


//Simple solution

function myCurry(fn){

  var funcArgsLen = fn.length;
  var argsArr = [];

  return function retFunc(){
    var newArgsArr = Array.prototype.slice.call(arguments);
    argsArr = argsArr.concat(newArgsArr);
    if(argsArr.length &gt;= funcArgsLen){
      return fn.apply(fn, argsArr);
    }else{
      return retFunc;
    }
  }
};



//Thorough solution

var myCurry = (function() {

  function retFuncCreator(accumulatedArgs, fn) {
    return function() {
      var newArgsArr = Array.prototype.slice.call(arguments);
      var finalArgs = accumulatedArgs.concat(newArgsArr);
      if (finalArgs.length &gt;= fn.length) {
        return fn.apply(fn, finalArgs);
      }else {
        return retFuncCreator(finalArgs, fn);
      }
    };
  }

  return function(fn) {
    if (typeof fn !== "function") {
      throw "argument should be a function";
    }

    return function() {
      var funcArgsArr = Array.prototype.slice.call(arguments);
      if (funcArgsArr.length &gt;= fn.length) {
        return fn.apply(fn, funcArgsArr);
      }else {
        return retFuncCreator(funcArgsArr, fn);
      }
    };
  };

})();