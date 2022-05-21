/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, result = []) {

  debugger

  if (arr.length === 0) {
    return result
  }



  const rest = arr.slice(1);
  const check = arr[0];


  if (Array.isArray(check)) {
    flatten(check, result)
  } else {
    result.push(check)
  }
  // if (check.isArray() === false) {
  //   result.push(check)
  // }
  flatten(rest, result);

  return result
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
