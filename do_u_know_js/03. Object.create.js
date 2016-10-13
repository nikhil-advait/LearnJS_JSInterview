//How to set one object prototype of other object?

var obj1 = {
  name: "john",
  lastName: "doe"
};

//Q1. Write code here (someFunction) such that

var obj2 = someFunction(obj1);

console.log ( obj2.name ); //prints "john"

//Please note you are not allow to copy the props of obj1 on obj2. In fact obj1 should become prototype of obj2

//Answer1:

var obj2 = Object.create(obj1);

//or

function someFunction(obj1){
  return Object.create(obj1);
};


//***************************************************************************************************************

//Q2. Make a function myCreate which is roughly equivalent to Object.create

//Answer2:

function myCreate(obj1){
  var noop = function(){};
  noop.prototype = obj1;
  return new noop();
};