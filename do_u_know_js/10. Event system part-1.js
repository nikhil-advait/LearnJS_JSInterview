//Question: Create simple event system

//write .on and .fire method such that


var $ = {};

$.on("click", function () {
  console.log("Hello Dude you clicked me");
});

$.on("move", function () {
  console.log("Hello Dude you moved over me");
});

$.fire("click"); //should print "Hello Dude you clicked me"
$.fire("move"); //should print "Hello Dude you moved over me"



//Answer:

var ds = {};

var $ = {

  on: function (event, cb) {
    ds[event] = cb;
  },

  fire: function (event) {
    var eventFunction = ds[event];
    eventFunction();
  }

};