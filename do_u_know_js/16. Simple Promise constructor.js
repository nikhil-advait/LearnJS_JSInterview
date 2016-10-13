/*
Q. Write Promise constructor function such that it demonstrates use of promise (in simple terms, no chaining is required)
e.g.

var p1 = new myPromise(function(resolve, reject){
    setTimeout(function(){
      resolve('Welcome ...!!');
    }, 2000);
});

p1.then(function(data){
    console.log(data); //This prints Welcome...!! after 2 seconds
});
 */


//Answer

function myPromise(fn){
  var csCb;
  var ceCB;

  function resolve(sData){csCb(sData)};
  function reject(eData){ceCb(eData)};

  setTimeout(function(){
    fn(resolve, reject);
  },0);

  return {
    then: function(sCb, eCb){
      csCb = sCb;
      ceCB = eCb;
    }

  }
}
