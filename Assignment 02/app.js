// ============> ARRAY <===================
// Declareing and Initializing Array.

var myArray = [, 'bread', 'milk', 'apples']

console.log(myArray[0])

// Manually finding the index of the milk in the above array.
for (let index = 0; index < myArray.length; index++) {
  var element = myArray[index]
  if (element === 'milk') {
    console.log('The index of "milk" in the given Array is : ', index)
  }
}

// finding the Index of the milk in the above array with index of Method

var indexOfMilk = myArray.findIndex((item) => item === 'milk')
console.log('The index of "milk" in the given Array is : ', indexOfMilk)

// ============> FUNCTIONS <==================
// declaring function

function sum(a, b) {
  return a + b
}

var num1 = 23
var num2 = 25

// consoleing calling function fuction
console.log('The sum of the two number is : ', sum(num1, num2))

console.log('The sum of the two number is : ', sum(12, 14))

// =========> SIMPLE CALCULATOR <==============

var num3 = Number(window.prompt('Please Enter a first Number'))

var operator = window.prompt('Please Enter the operation you want to perform.')

var num4 = Number(window.prompt('Please Enter a Second Number'))

var result = 0

if (operator === '+') {
  result = num3 + num4
  console.log(`The Additiotn of the ${num3} and ${num4} is ${result}`)
} else if (operator === '-') {
  result = num3 - num4
  console.log(`The Minus of the ${num3} and ${num4} is ${result}`)
} else if (operator === '*') {
  result = num3 * num4
  console.log(`The Multiplication of the ${num3} and ${num4} is ${result}`)
} else if (operator === '/') {
  result = num3 / num4
  console.log(`The Division of the ${num3} and ${num4} is ${result}`)
} else {
  console.log("You don't select a valid operation")
}
