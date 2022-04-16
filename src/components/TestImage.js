import React, { useEffect } from 'react'
import Image from 'next/image'

const TestImage = () => {
  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component will unmount')
    }
  }, [])
  return (
    <div className="relative h-20 w-20">
      <Image className="absolute" src="/dog.jpeg" layout="fill" />
    </div>
  )
}

export default TestImage
