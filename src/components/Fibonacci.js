import React, { useState } from 'react'

const styles = {
  wrapper: ` relative w-full h-full text-center  py-3 `,
  container: ` w-full flex-row space-y-3`,
  buttonContainer: `justify-around flex w-full`,
  button: `rounded-full border-2 px-5 py-1`,
  styles: `relative px-5 w-full`,
  inputContainer: `w-full flex relative`,
  input: `w-full border-2 outline-none px-5 flex-shrink absolute`,
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
    <div className="App">
      <h1>Fibonacci Series</h1>
      <input type="number" onChange={(e) => setInp(e.target.value)} />
      <button onClick={() => setResult(fibonacci(inp))}>Get Result</button>
      <h2>{result}</h2>
    </div>
  )
}
