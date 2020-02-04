// property of object
let user;
user = {
    name: "John",
    age: 30
};
console.log(user.name);
console.log(user.age);
// change property
user.name = "Alex";
console.log(user.name);
// property = function of addition of two digits
let man = {
name: "John",  
age: 50
};
man.age = function sum(a, b) {
return (a + b);
}
console.log(man.age (30,20));
