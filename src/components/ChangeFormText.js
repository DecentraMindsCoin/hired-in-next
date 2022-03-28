import React from 'react'
import { useState } from 'react'

const ChangeFormText = () => {
  const [input, setValue] = useState('')
  const [name, setName] = useState('Larry')

  const handleInput = (event) => {
    setValue(event.target.value);
  }
  const updateName = (event) => {
    event.preventDefault()
    setName(input)
    setValue('')
  }

  return (
    <div className='w-full text-center space-y-5 py-10 bg-yellow-500 font-mono'>
      <h1 className='font-bold text-xl uppercase'>Hello {`"${name}"`} </h1>
      <form className="bg-purple-100 mx-5 rounded-full border-2 border-black">
        <div className="py-5">
          <label className='italic text-black' for="name-1">Update Name Feild</label>
          <div className="py-5">
            <input
              type="text"
              value={input}
              name="name-1"
              onChange={handleInput}
              className="input"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button onClick={updateName} class="button is-dark">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangeFormText
