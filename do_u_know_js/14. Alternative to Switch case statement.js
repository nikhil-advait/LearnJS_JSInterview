//Q. Write alternative to switch case construct:
function caseWiseExec(type){
  var result;

  switch(type){
    case 'abc' :
      result = doAbc();
      break;
    case 'def' :
      result = doDef();
      break;

  }
  return result;
};


//Answer:

function caseWiseExec(type){
  var mapObj = {
    abc: function(){return doAbc()},
    def: function(){return doDef()}
  };

  return mapObj[type]();
};



caseWiseExec1('abc');