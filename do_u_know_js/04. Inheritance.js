

//Inherit Employee class (constructor) from Person, such that

var p1 = new Person('john', 'doe');
console.log (p1.firstName ); //john
console.log (p1.getInfo() ); //hi i am john doe

var e1 = new Employee('jenny', 'doe', 123);
console.log (e1.getId() ); //hi my employee id is 123
console.log( e1.getInfo() ); // hi i am jenny doe



//Answer
function Person(fn, ln){
  this.firstName = fn;
  this.lastName = ln;
};

Person.prototype.getInfo = function(){
  return 'hi i am ' + this.firstName + " " + this.lastName;
};


function Employee(fn, ln, empid){
  Person.call(this, fn, ln);
  this.empid = empid;
};

Employee.prototype = Object.create(Person.protoype);

Employee.prototype.getId = function(){
  return "hi my employee id is " + empid;
};