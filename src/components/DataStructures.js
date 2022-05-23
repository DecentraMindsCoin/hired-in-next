// For of loop, iterating through the array of names

const names = ['max', 'tom', 'john', 'bob', 'sarah']

console.log(names)
console.log(names[0] + ' ' + 'loves pudding!')

for (let el of names) {
  console.log(el.toUpperCase())
}

names.push('julie')
console.log(names.length)

const findTom = names.findIndex((el) => el === 'tom')
console.log(findTom)
