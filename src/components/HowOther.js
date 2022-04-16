import React from 'react'
import Test from '../components/TestImage'
import { useState } from 'react'

const HowOther = () => {
  const [showComponent, setShowComponent] = useState(true)
  const styles = {
    container: 'relative w-full',
    buttons: 'flex w-full justify-between',
    button: 'rounded-xl ring-2 ring-emerald bg-gray-200',
    image: '',
  }
  const tw = styles
  return (
    <div className={tw.container}>
      <div className={tw.buttons}>
        <button className={tw.button} onClick={() => setShowComponent(false)}>
          {' '}
          Hide Component
        </button>
        <button className={tw.button} onClick={() => setShowComponent(true)}>
          {' '}
          Show Component
        </button>
      </div>
      <div className={tw.image}>{showComponent && <Test />}</div>
    </div>
  )
}

export default HowOther
