import React from 'react'
import { useState } from 'react'
const DataBinding = () => {
  const [value, setValue] = useState()
  return (
    < >
    <div className='w-full mx-auto text-center py-10 space-y-5 font-mono'>
            <h1 className='font-bold uppercase text-xl underline py-5 decoration-wavy'>
2 way Data Binding
    </h1>
      <input
      className='py-3 text-center'
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>

    </>
  )
}

export default DataBinding
