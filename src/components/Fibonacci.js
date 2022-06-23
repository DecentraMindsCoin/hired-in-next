import React, { useState } from 'react'

const styles = {
 
    wrapper: `text-center w-full font-mono mx-auto  h-full py-7 bg-pink-500 bg-opacity-50  font-bold uppercase tracking-wider italic cursor-pointer space-y-5`,
  
  container: `w-full flex-row space-x-3 `,
 
  button: `rounded-full border-2 px-2  py-1`,

  input: `border-2 outline-none px-5 rounded-xl border-2 border-black`,
  result: `break-words`
}

export default function Fibonacci() {
  const [inp, setInp] = useState(null)
  const [result, setResult] = useState([])
  function fibonacci(n) {
    let n1 = 0
    let n2 = 1
    let sum
    const fibo = [1]
    for (let i = 0; i < n; i++) {
      sum = n1 + n2
      n1 = n2
      n2 = sum
      fibo.push(n2)
    }
    return fibo.join(',')
  }

  return (
    <div className={styles.wrapper}>
      <h1>Fibonacci Series</h1>
      <div className={styles.container}>
         <input className={styles.input} type="number" onChange={(e) => setInp(e.target.value)} />
      <button className={styles.button} onClick={() => setResult(fibonacci(inp))}>Get Result</button>
      </div>
     
      <h2 className={styles.result}>{result}</h2>
    </div>
  )
}

// fib in vanilla javascript using memoized functions
// add memo argument
const fib = (n, memo = {}) => {
    // add base case for memoized key from object
  if (n in memo) return memo[n] 
  if (n <= 2) return 1
  // add stored logic and passes memo object.
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(6))
