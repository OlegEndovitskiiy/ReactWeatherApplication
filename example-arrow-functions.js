// var names = ['Andrew', 'Oleg', 'Alexander', 'Vladimir', 'Ivan', 'Irina'];

// names.forEach(function(name){
//     console.log(name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name;
// names.forEach((name) => console.log(returnMe(name)));

// var person = {
//     name: 'Boris',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         })
//     }
// };
// person.greet();

var addExpression = (a, b) => a + b;
var addStatement = (a, b) => {
    return a + b;
};
console.log(addExpression(3, 1));
console.log(addExpression(9, 0));
console.log(addStatement(8, -9));