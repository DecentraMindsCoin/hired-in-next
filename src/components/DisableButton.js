import React from 'react'
import { useState } from 'react'

const DisableButton = () => {
  const [value, setValue] = useState('')

  return (
    <>
    <div className='w-full h-full mx-auto text-center bg-blue-500 py-10 space-y-5 font-mono text-xl'>
             <h3 className='font-bold uppercase underline text-xl py-5'>Disable Button Challenge</h3>
      <input className='border-2 border-black rounded-full w-3/4' type="text" onChange={(e) => setValue(e.target.value)} />
      <button className='border-2 border-black bg-gray-300 px-2 py-1 rounded-full' disabled={value.length < 1}>Submit</button> 
    </div>

    </>
  )
}

export default DisableButton
