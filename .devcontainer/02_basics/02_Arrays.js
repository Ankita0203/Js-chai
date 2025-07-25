const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) //not an appropriate method to combine two arrays
// console.log(marvel_heroes);
const allheroes=marvel_heroes.concat(dc_heroes)//concat uses new array
console.log(allheroes);


//const all_new_heroes = [...marvel_heroes,...dc_heroes] //spread method:combines two or more array in a appropriate way
//console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) //method to combine array
console.log(real_another_array);

console.log(Array.isArray("Ankita")) //false coz not an array
console.log(Array.from("Ankita")) // converting to an array uing from
console.log(Array.from({name:"Ankita"}))  //empty array coz we need to  specify keys or values to make array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
