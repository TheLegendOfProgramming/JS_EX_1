//FUNCTIONS

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//START

//1)
var arr1 = ['Lars', 'jan', 'Peter', 'Bo', 'Frederik', "lin" , "Goa", "George"];

var arr2 = [];
arr1.forEach(function(index) {
    if(index.length <= 3)
        arr2.push(index);
});
console.log(arr2);

//2)

var arr3 = arr1.map(capitalizeFirstLetter);

console.log(arr3);

//3)
