
//Question - Write you myBind such that following code runs. myBind should behave similar to native .bind of javscript

var obj = {
  name: "john",
  getInfo: function (city, state) {
    console.log("Hello my name is " + this.name + " and i am from " + city + ", " + state);
  }
};

var newFunc = obj.getInfo.myBind({name: "jenny"}, "denver");

newFunc("colarado"); //prints: Hello my name is jenny and i am from denver, colarado"




//Answer

function myBind() {
  var argsArr = Array.prototype.slice.call(arguments);
  var fn = this;
  var newThis = argsArr.splice(0, 1)[0];
  var params = argsArr;

  return function () {
    var arr = Array.prototype.slice.call(arguments);
    return fn.apply(newThis, params.concat(arr));
  }
};

Function.prototype.myBind = myBind;