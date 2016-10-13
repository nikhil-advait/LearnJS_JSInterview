//Question:
//Write myCompose function such that:



function square(a){
  return a*a;
}

function add10(x){
  return x+10;
}

function twice(y){
  return y*2;
}

squareAdd10Twice = myCompose(twice, add10, square);

console.log( squareAdd10Twice(2) ); //28



//Answer

function myCompose() {
  var argsArr = Array.prototype.slice.call(arguments);

  return function() {
    var firstTimeArgs = arguments;
    var tempResult;

    for (var i=(argsArr.length - 1), len=i; i >= 0; i-- ) {
      var func = argsArr[i];
      if (i === len) {
        tempResult = func.apply(func, firstTimeArgs);
      }else {
        tempResult = func(tempResult);
      }
    }

    return tempResult;
  };

};