//Intention of exercise is know you understand callbacks


//Q1. Write myMap function such that:

var arr2 = myMap([1,2,3], function(el){
  return el * el;
});

console.log( arr2 ); // [1,4,9]


//Answer 1:

function myMap(arr, cb){
  var tempArr = []
  for(var i=0, len=arr.length; i<len; i++){
    tempArr.push(cb(arr[i]));
  }
  return tempArr;
}

//********************************************************************************************************************


// Do you understand how prototype works

//Q2. Modify code such that


var arr3 = [1,2,3].myMap(function(el){
  return el * el;
});


console.log( arr3 ); // [1,4,9]


//Answer 2

Array.prototype.myMap = function myMap(cb){
  var arr = this;
  var tempArr = [];
  for(var i=0, len=arr.length; i<len; i++){
    tempArr.push(cb(arr[i]));
  }
  return tempArr;
};