/* Question:
  Create Subclass MyArray such that it has all methods of array and add and addAll methods.
  add method should be similar to push and addAll method should append to new Array to original array.
  e.g.
 var collection = new MyArray(1,2,3,4);

 collection.add(5); //Should give [1, 2, 3, 4, 5]
 collection.addAll([6,7,8); //Should give [1,2,3,4,5,6,7,8]
 */


function MyArray(){
  var arr = [];
  arr.push.apply(arr,arguments);

  arr.add = function(el){
    this.push(el);
    return this;
  };

  arr.addAll = function(newArr){
    this.push.apply(this, newArr);
    return this;
  };

  return arr;

};

