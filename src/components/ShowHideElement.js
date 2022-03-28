import React from 'react'
import { useState } from 'react'

const ShowHideElement = () => {
  const [show, setShow] = useState()
  return (
    <>
    <div className='text-center w-full font-mono mx-auto  h-full py-7 bg-black bg-opacity-50 hover:bg-opacity-90 font-bold uppercase tracking-wider italic cursor-pointer space-y-5'>
              <button className="font-bold text-xl" onClick={() => setShow(!show)}>
        {show ? 'Hide Element Below' : 'Show Element Below'}
      </button>
<div className='bg-cyan-500 border-2 p-3   w-1/2 mx-auto rounded-full'>
          {show && <div>Toggle Challenge</div>}
</div>

    </div>

    </>
  )
}

export default ShowHideElement
