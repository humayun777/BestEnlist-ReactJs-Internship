cloner = (orginalArray) => {
        return orginalArray.slice();
    } 

var inputArray = [1,2,3]
var clonedArray  = cloner(inputArray)

console.log(`Original array: ${inputArray}`)
console.log(`Cloned array: ${clonedArray}`)
