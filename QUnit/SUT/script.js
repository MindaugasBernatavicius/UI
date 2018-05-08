//
// Demo of Associative Array like functionality in JS
// by Mindaugas B.
// 

var people = [
    { id: 1, name: 'Jonas', gender: 'male' },
    { id: 2, name: 'Petras', gender: 'male' },
    { id: 3, name: 'Ona', gender: 'female' },
];

people.forEach(function(person, iteration){
    console.log(people[iteration+1]['gender']);
});
