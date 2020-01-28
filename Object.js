// property of object
let user = {    
    name: "John",  
    age: 30        
  };
  alert( user.name ); 
  alert( user.age );

// change property
user.name = "Alex";
alert(user.name);

// property = function of addition of two digits
let user = {    
  name: "John",  
  age: 30        
};

user.age = function summa(a,b) {
  return (a+b);
}
alert(user.age (10,20) );
