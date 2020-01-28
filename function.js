// digits addition
function sum(a,b) {
    return (a + b);
}
console.log(sum (4,5));
// name + Hello
var userName = 'Ната';
function user() {
    userName = 'Ната';
    var message = 'Привет,' + userName;
    console.log(message);
}
user();
// type of argument
function data_type(value) {
var dtypes = [Function, RegExp, Number, String, Boolean, Object], num, len;
if (typeof value === "object" || typeof value === "function") {
     for (num = 0, len = dtypes.length; num < len; num++) {
         if (value instanceof dtypes[x]) {
             return dtypes[num];
            }
      }
    }
    return typeof value;
}
console.log(data_type(12));
console.log(data_type('w3resource'));
console.log(data_type(false));
// even elements of array
let help = [20, 16, 14, 5, 3];
function showMessage(array) {
let arr = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        arr.push(array[i]) 
    }
  }
  return arr
}
console.log(showMessage(help));


