// digits addition

function summa(a,b) {
    return (a+b);
}
alert(summa (4,5) );

// name + Hello
var userName = 'Ната';

function showMessage(){
    userName = 'Ната';
    var message = 'Привет,' + userName;
    alert(message);
}
showMessage();

// type of argument
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));


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
alert(showMessage(help));


