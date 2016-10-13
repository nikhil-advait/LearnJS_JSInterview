//Make event system which can handle multiple events of same type (e.g. multiple clicks or moves)
//e.g.

  $ = {};

$.on("click", function(){
  console.log("Hello Dude your clicked me");
});

$.on("click", function(){
  console.log("Hello Dude your clicked me second time");
});

$.fire("click");

//should print
//"Hello Dude your clicked me"
//"Hello Dude your clicked me second time



//Answer

var ds = {};

var $ = {

  on: function(event, cb){
    if(ds[event] === undefined){ //first time not present
      ds[event] = [];
      ds[event].push(cb);
    }else{
      var arr = ds[event];
      arr.push(cb);
    }
  },

  fire: function(event){
    var arr = ds[event];
    arr.forEach(function(cb){
      cb();
    })
  }

};
