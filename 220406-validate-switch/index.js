const args = process.argv.slice(2)
// console.log("args", args);
let [ operation, ...strings ] = args
// console.log("operation", operation);
// console.log("strings", strings);


// const sum = (numbers) => {
//   console.log("Arrow function Sum was called")
// }

// .every()
const invalid = strings.find(string => {
  return isNaN(string)
}) 

// console.log("invalid", invalid);
if (invalid) {
  console.log(`Sorry, the argument "${invalid}" is not a number, please try again`)
  process.exit(9)
}

const numbers = strings.map(string => parseInt(string, 10))

switch (operation) {
  case "sum":
    sum(numbers)
    break
  case "avg":
    average(numbers)
    break
  default:
    // DRY 
    console.log("I cannot calculate that, please type either \"sum\" (to calculate the sum) or \"avg\" (To calculate the Average)")
    process.exit(9)
}

// console.log("Did not exit yet")

function sum(numbers) {
   console.log("Sum was called")
}


function average(numbers) {
  // console.log("Average was called")
}
