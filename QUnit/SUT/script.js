//
// Demo of Associative Array like functionality in JS
// by Mindaugas B.
// 

var people = [
    { id: 1, name: 'Jonas', gender: 'male' },
    { id: 2, name: 'Petras', gender: 'male' },
    { id: 3, name: 'Ona', gender: 'female' },
	{ id: 3, name: 'Ponas X', gender: 'male' },
];

for(var i = 0; i < people.length; i++){
	for(var j = i + 1; j < people.length; j++){
		if(people[i]['gender'] != people[j]['gender']){
			console.log(people[i]['name'] + ' ' + people[j]['name']);
		}
	}
}
