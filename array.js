// output of each element
var month = ["Декабрь", "Январь", "Февраль"];
month.forEach(function(item) {
    console.log( item );
});
// conversion to string and to array
var numbers = [1, 2, 3, 4];
console.log(numbers.join('-'));
var str = '1-2-3-4';
console.log(str.split('-'));
// hello after each element
var name = ['Вася', ' Петя', ' Маша'];
name.push('');
var str = name.join(' Hello');
console.log(str);
// number array to boolean
var res = [];
var arr = ['10', '12', '14'];
arr.forEach(function(item,i) {
    res[i]=Boolean(item) });
    console.log(res);

