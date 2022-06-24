import React, { useState } from 'react'

const styles = {
  wrapper: `bg-fuchsia-200 h-96 relative w-full `,
  container: `pt-10 px-5 flex  justify-around w-full space-x-5`,
  input: `border-2 border-black `,
  button: `border-2 w-full bg-black text-white rounded-xl py-2`,
  list: `pt-5 text-left  w-1/2 mx-auto mr-10 space-y-5`,
  listItem: `cursor-pointer uppercase text-light hover:text-bold`,
}

const TodoAddDelete = () => {
  // state for list in array and state for value of input
  const [list, setList] = useState([])
  const [value, setValue] = useState('')

  // handle input text as being typed
  const changeHandler = (e) => {
    setValue(e.target.value)
  }
//submit functionality for adding todo to the list 
  const submitHandler = () => {
    setList([...list, value])
    setValue('')
  }
// delete functionality for deleting item from list
  const deleteHandler = (item) => {
    setList(list.filter((ele) => ele != item))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={changeHandler}
        />{' '}
        <button className={styles.button} onClick={submitHandler}>
          Add
        </button>
      </div>
      <ul className={styles.list}>
        {list.length > 0 &&
          list.map((item, index) => {
            return (
              <li key={index}>
                <p
                  onClick={() => deleteHandler(item)}
                  className={styles.listItem}
                >
                  {item}
                </p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default TodoAddDelete
