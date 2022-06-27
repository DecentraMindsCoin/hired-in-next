import React, { useState } from 'react'

const AutoComplete = () => {
  let array = [
    'Tom',
    'John',
    'Bob',
    'Sarah',
    'Mike',
    'Kate',
    'Adam',
    'Chris',
    'Richard',
    'Carol',
    'Tim',
  ]

  let suggestions = []
  const [value, setValue] = useState()
  const [list, setList] = useState()

  const setInputValue = (e, name) => {
    setValue(name)
    setList(list.length === 0)
  }

  const autoComplete = (event) => {
    setValue(event.target.value)
    array.forEach((name) => {
      if (
        name.substring(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestions.push(name)
        console.log(suggestions)
        setList(
          suggestions.map((name, index) => {
            return (
              <div>
                <p key={index} onClick={(e) => setInputValue(e, name)}>
                  {name}
                </p>
              </div>
            )
          })
        )
      }
      if (event.target.value.length === 0) {
        setList('')
      }
    })
  }

  console.log(value)
  return (
    <div>
      <input type="text" value={value} onChange={(e) => autoComplete(e)} />
      <div>{list}</div>
    </div>
  )
}

export default AutoComplete
