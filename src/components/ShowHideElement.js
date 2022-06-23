import React from 'react'
import { useState } from 'react'

const styles = {
  wrapper: `text-center w-full font-mono mx-auto  h-full py-7 bg-green-100 font-bold uppercase tracking-wider italic cursor-pointer space-y-5`,
}

const ShowHideElement = () => {
  const [show, setShow] = useState()
  return (
    <>
      <div className={styles.wrapper}>
        <button className="text-xl font-bold" onClick={() => setShow(!show)}>
          {show ? 'Hide Element Below' : 'Show Element Below'}
        </button>
        <div className="mx-auto w-1/2 rounded-full   border-2 bg-cyan-500 p-3">
          {show && <div>Toggle Challenge</div>}
        </div>
      </div>
    </>
  )
}

export default ShowHideElement
