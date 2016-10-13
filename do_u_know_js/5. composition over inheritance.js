/*

Q. Write code such that getInfo functionality is shared among createPerson and createEmployee

a) Use "Composition over inheritance"

b) If you haven't heard of "Composition over inheritance" then "Solve following exercise without use of "new" or "this"
  or "prototype" keywords.

*/



// Question code

var p1 = createPerson('john', 'doe');

console.log (p1.getInfo() ); //hi i am john doe


var e1 = createEmployee('jenny', 'doe', 123);
console.log (e1.getId() ); //hi my employee id is 123
console.log( e1.getInfo() ); // hi i am jenny doe





//Answer:

//taking this function out of createPerson will make sense when its huge and complicated one

function getInfo(firstName, lastName){
  return 'hi i am ' + firstName + " " + lastName;
}



function createPerson(fn, ln){
  return {
    getInfo: function(){ return getInfo(fn, ln)}
  };

}


function getId(empid){
  return "hi my employee id is " + empid;
}



/* createEmployee makes use of composition. Its' simple. Any function which makes use of other
functions to compose functionality is said to be making use of //composition. We all use it many
times.
*/

  function createEmployee(fn, ln, empid){

  return {
    getId : function(){ return getId(empid);},
    getInfo: function(){ return getInfo(fn, ln);}
  };

}

var p1 = createPerson('john', 'doe');

console.log (p1.getInfo() ); //hi i am john doe


var e1 = createEmployee('jenny', 'doe', 123);
console.log (e1.getId() ); //hi my employee id is 123
console.log( e1.getInfo() ); // hi i am jenny doe
