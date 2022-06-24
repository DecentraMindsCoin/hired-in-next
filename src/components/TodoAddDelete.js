import React, { useState } from 'react'

const styles = {
  wrapper: `bg-fuchsia-200 h-96 relative w-full `,
  container: `absolute top-1/3 px-5 flex  justify-around w-full space-x-5`,
  input: `border-2 border-black `,
  button: `border-2 w-full`,
  list: ``
}

const TodoAddDelete = () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState('')

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const submitHandler = () => {
    setList([...list, value])
    setValue('')
  }

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
        </button>{' '}
      </div>
      <hr />
      <ul className={styles.list}>
        {list.length > 0 &&
          list.map((item) => {
            return <li onClick={() => deleteHandler(item)}>{item}</li>
          })}
      </ul>
    </div>
  )
}

export default TodoAddDelete
