//Make event system. Write .on and .fire method such that:

var $ = function(){};

$("john").on("click", function(){
  console.log("Hello Dude you clicked john");
});

$("john").on("click", function(){
  console.log("Hello Dude you clicked john twice");
});

$("john").on("move", function(){
  console.log("Hello Dude you moved on john");
});

$("jenny").on("move", function(){
  console.log("Hello Dude you moved on jenny");
});

$("john").fire("click");

//should print

//"Hello Dude your clicked john"
//"Hello Dude your clicked john twice"

$("jenny").fire("move");

//should print "Hello Dude you moved over jenny"

var ds = {};

var $ = function(actor){

  return {

    on: function(event, cb){
      if(ds[actor] === undefined){
        var actorObj = ds[actor] = {};
        actorObj[event] = [];
        actorObj[event].push(cb);
      }else{
        if(ds[actor][event] === undefined){ //first time not present
          ds[actor][event] = [];
          ds[actor][event].push(cb);
        }else{
          var arr = ds[actor][event];
          arr.push(cb);
        }
      }
    },

    fire: function(event){
      var arr = ds[actor][event];
      arr.forEach(function(cb){
        cb();
      })
    }
  };

};
