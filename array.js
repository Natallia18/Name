// output of each element
var arr = [1, 2, 3, 4, 5]

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result );

var arr = ["Декабрь", "Январь", "Февраль"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

// conversion to string and to array
var a = [1, 2, 3, 4];
alert(a.join('-'));

var str = '1-2-3-4';
alert(str.split('-'));

// hello after each element
let arr = ['Вася', ' Петя', ' Маша'];
arr.push('');
let str = arr.join(' Hello'); 
alert(str);

// number array to boolean
var res = [];
var arr = ['10', '12', '14'];
arr.forEach(function(item,i) {
    res[i]=Boolean(item) });
    alert(res);

