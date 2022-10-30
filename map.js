  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5]

let results = []
for (let num of nums) {
  results.push(num*2)
}
console.log(results)

// Using map()
const multByTwo = function (num) {
  return num * 2
}
const mapResults = nums.map(multByTwo)
console.log('mapResults',mapResults)

// Simplified w/ map()
    // my own try
    // let timesThree = nums.map(num=>num*3)
    // console.log('timesThree', timesThree)


const simplified = nums.map(function (num) { return num * 2 })
console.log('simplified', simplified)


// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map(num=> num * 2)
console.log('simplifiedArrow', simplifiedArrow)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentWithIds = students.map(student=>[student.name, student.id])

//Desired result: [['Mark', 1],['Ariel', 2],['Jason',3]]
console.log(studentWithIds)


//THE LESSON CHALLENGE

let students2 = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

let [john, ...rest] = students2.map(student =>[student.name, student.results]);
console.log(john);
console.log(rest);

const mapper = (itm) => [itm.name, itm.results];
let [john2, ...rest2] = students2.map(mapper);
console.log(john2);
console.log(rest2);

// const ages = [24,35,42,25]
// for (let idx in students2) {
//   console.log(idx)
//   let student = students2[idx]
//   student["nej_nej_here"] = ages[idx]
// }
// console.log(students2)

const ages = [24,35,42,25]

let studentsAges = students2.map(function(student, idx){

  student.age = ages[idx]
})

console.log('students2', students2)
