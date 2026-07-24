// I chosed the first 
function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

// I chose the 2nd
function SumArray(ListOfNumbers) {
  return ListOfNumbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(SumArray([1, 2, 3, 4, 5])) 

// I chosed the first
function factorial(n) {
  if (n < 0) return -1
  if (n === 0 || n === 1) return 1
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result
}
console.log(factorial(5))
