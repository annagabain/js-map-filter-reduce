  
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




