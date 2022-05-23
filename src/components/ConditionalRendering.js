import React from 'react'
import DataBinding from '../components/DataBinding'
import TestImage from "../components/TestImage"
import { useState } from 'react'


const style = {
  wrapper: `relative w-full h-96 bg-pink-100`,
  heading: `font-bold text-xl text-center pt-12`,
  container: `relative h-full w-full`,
  button: `rounded-full border-2 border-black px-2 absolute top-1/3 mx-auto w-full`,

}
const ConditionalRendering = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className={style.wrapper}>
      <h1 className={style.heading}>
        Conditional Rendering Image
      </h1>
     <div className={style.container}>
           <button className={style.button} onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      { isToggled && <TestImage /> }
      {/* { isToggled ? <DataBinding /> : <p>The value is false</p> } */}
     </div>
  
    </div>
  )
}

export default ConditionalRendering
