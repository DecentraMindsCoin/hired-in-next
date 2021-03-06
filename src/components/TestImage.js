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
    <div className="relative h-48 w-full">
      <Image className="absolute object-cover" src="/dog.jpeg" layout="fill" />
    </div>
  )
}

export default TestImage
