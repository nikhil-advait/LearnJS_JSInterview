[### Question 1. Closure](./1.%20Closure.js)
Aim of this question/exercise is to learn concepts of closure.
Q: Write adder function such that following code runs

    var add5 = adder(5);
    var add7 = adder(7);
    console.log( add5(5) ); //prints: 10
    console.log( add7(8) ); //prints: 15


### Question 2. Create .map equivalent method .myMap
Intention of exercise is know you understand callback
Q1. Write myMap function such that:

    var arr2 = myMap([1,2,3], function(el){
      return el * el;
    });

    console.log( arr2 ); // [1,4,9]


### Question 3. Object.create related question
How to set one object prototype of other object?

    var obj1 = {
      name: "john",
      lastName: "doe"
    };

Q1. Write code here (someFunction) such that

    var obj2 = someFunction(obj1);
    console.log ( obj2.name ); //prints "john"

Please note you are not allow to copy the props of obj1 on obj2. In fact obj1 should become prototype of obj2


### Question 4. Inheritance:
Inherit Employee class (constructor) from Person, such that

    var p1 = new Person('john', 'doe');
    console.log (p1.firstName ); //john
    console.log (p1.getInfo() ); //hi i am john doe

    var e1 = new Employee('jenny', 'doe', 123);
    console.log (e1.getId() ); //hi my employee id is 123
    console.log( e1.getInfo() ); // hi i am jenny doe




### Question 5. Composition over inheritance:

Q. Write code such that getInfo functionality is shared among createPerson and createEmployee
a) Use "Composition over inheritance"
b) If you haven't heard of "Composition over inheritance" then "Solve following exercise without use of "new" or "this" or "prototype" keywords.

    // Question code

    var p1 = createPerson('john', 'doe');
    console.log (p1.getInfo() ); //hi i am john doe

    var e1 = createEmployee('jenny', 'doe', 123);
    console.log (e1.getId() ); //hi my employee id is 123
    console.log( e1.getInfo() ); // hi i am jenny doe




### Question 6. Demostrate use of .call:

  Demonstrate use of .call

Question: Make use of getName function in obj such that it prints 'Hello my name is jenny and i am from
denver'. Make sure obj is not changed in any way.


    var obj = {
        name: 'john',
        getInfo: function(city){
           console.log('Hello my name is ' + this.name + ' and i am from ' + city);
        }
    };


### Question 7. Make your own .bind:


//Question - Write you myBind such that following code runs. myBind should behave similar to native .bind of javscript

    var obj = {
      name: "john",
      getInfo: function (city, state) {
        console.log("Hello my name is " + this.name + " and i am from " + city + ", " + state);
      }
    };

    var newFunc = obj.getInfo.myBind({name: "jenny"}, "denver");

    newFunc("colarado"); //prints: Hello my name is jenny and i am from denver, colarado"


### Question 8. Make your own curry function:

Question: Write a myCurry function

If we keep returning new function until all arguments of original function are not satisfied, then
its called currying.


    function sum(a, b, c){
      return a+b+c;
    };

    console.log( myCurry(sum)(1,2,3) ); // 6
    console.log( myCurry(sum)(1,2)(3) ); //6
    console.log( myCurry(sum)(1)(2)(3) ); //6

So write a myCurry function.


### Question 9. Make your own compose function:

Write myCompose function such that:

    function square(a){
      return a*a;
    }

    function add10(x){
      return x+10;
    }

    function twice(y){
      return y*2;
    }

    squareAdd10Twice = myCompose(twice, add10, square);
    console.log( squareAdd10Twice(2) ); //28


### Question 10. Make event system - Part1:
Question: Create simple event system
Write .on and .fire method such that


    var $ = {};

    $.on("click", function () {
      console.log("Hello Dude you clicked me");
    });

    $.on("move", function () {
      console.log("Hello Dude you moved over me");
    });

    $.fire("click"); //should print "Hello Dude you clicked me"
    $.fire("move"); //should print "Hello Dude you moved over me"


### Question 11. Make Event system - Part 2:

Make event system which can handle multiple events of same type (e.g. multiple clicks or moves)
e.g.

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

### Question 12. Make Event system - Part 3:

Make event system. Write .on and .fire method such that:

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
    //"Hello Dude you moved on john"

    $("jenny").fire("move");

    //should print "Hello Dude you moved over jenny"


   ### Question 13. Write a function to make deepClone of data

   ### Question 14. Write alternative to switch case construct:

   ### Question 15. Subclass Array
   Question:
  Create Subclass MyArray such that it has all methods of array and add and addAll methods.
  add method should be similar to push and addAll method should append to new Array to original array.
  e.g.

     var collection = new MyArray(1,2,3,4);

     collection.add(5); //Should give [1, 2, 3, 4, 5]
     collection.addAll([6,7,8); //Should give [1,2,3,4,5,6,7,8]

 ### Question 16. Make your own simple Promise constructor
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



