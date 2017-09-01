//FUNCTIONS

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//START

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var reducedComma = all.join(', ');
var reducedHyphen = all.join(' - ');

//a) and b)
console.log(boys);
console.log(girls);
console.log(all);

//c)
console.log(reducedComma);
console.log(reducedHyphen);

//d) & e)
all.unshift('Hans','Kurt');
all.push('Lone','Gitte');
console.log(all);

//f) & g)
all.shift('Hans');
all.pop('Gitte')
console.log(all);

//h)
all.splice(3,2);
console.log(all);

//i)
all.reverse();
console.log(all);

//j)
all.sort();
console.log(all);

//l)
var capitAll = [];
all.forEach(function(index) {
    index = capitalizeFirstLetter(index);
    capitAll.push(index);
});
console.log(capitAll);

//m
var filtered = [];
filtered = capitAll.filter(function(index){
    return index.charAt(0) == 'L' || index.charAt(0) == 'I';
});
console.log(filtered);
