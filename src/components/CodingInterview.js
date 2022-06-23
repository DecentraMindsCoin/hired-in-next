

const str = 'test'
// Function to reverse string
function ReverseString(str) {
  return str.split('').reverse().join('').toUpperCase()
}
// Function call
// document.write(ReverseString('House'))

console.log(ReverseString(str))