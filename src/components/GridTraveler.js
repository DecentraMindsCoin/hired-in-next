const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n
  // are the arguments in the memo
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  //manual recursive calculation memo object
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}
console.log(gridTraveler(4, 3))

// memoization recipe
// make it work
// make it efficient
