// function fn(parameter) {
//   console.log("parameter", parameter);
//   // > parameter argument
// }

// fn("argument")

// process.argv = command from Terminal pane as an array
// [
//   <absolute path to node app>,
//   <absolute path to file being executed>,
//   <other data may go here (as strings)...>
// ]

// node index.js » ["path/to/node", "path/to/index.js"]

// node index.js sum 1 2 3 4 » [
//   "path/to/node",
//   "path/to/index.js",
//   "sum",
//   "1",
//   "2",
//   "3",
//   "4"
// ]

const args = process.argv.slice(2)
let [operation, ...numbers] = args
console.log("arguments", args);
console.log("operation", operation);
console.log("numbers before map", numbers);
numbers = numbers.map(string  => {
  // '1'
  return parseInt(string, 10) // 1 (the number)
}).filter(number => {
  return !isNaN(number)
})
console.log("numbers after map", numbers);

function getSumUsingForLoop(array) {
  let result = 0
  
  var total = array.length
  for ( let ii = 0; ii < total; ii += 1 ) {
    result += array[ii]
  }
  
  return result
}


function getSum(array) {
  // Using reduce
  // Search on Google:
  // https://www.google.com/search?q=js+reduce
  // First result (MDN)
  //
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  return array.reduce((accumulator, nextNumber) => {
    return accumulator + nextNumber
  }, 0)
}

const result = getSum(numbers)
console.log("result", result);

// // In the Terminal window
// $ node index.js sum 1 2 3 4
// arguments [ 'sum', '1', '2', '3', '4' ]
// operation sum
// numbers before map [ '1', '2', '3', '4' ]
// numbers after map [ 1, 2, 3, 4 ]
// result 10