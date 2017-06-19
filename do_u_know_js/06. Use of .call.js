//Demonstrate use of .call

//Question: Make use of getName function in obj such that it prints 'Hello my name is jenny and i am from
//denver'. Make sure obj is not changed in any way.


var obj = {
    name: 'john',
    getInfo: function(city){
      console.log('Hello my name is ' + this.name + ' and i am from ' + city);
    }
};



//Answer
obj.getInfo.call({name: 'jenny'}, 'denver');
