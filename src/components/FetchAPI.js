import { useState } from 'react'
import { useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users/2 '
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/


export default function FetchApi() {
  const [userData, setUserData] = useState({})

  const getUserData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setUserData(jsonData)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="w-full text-center font mono space-y-5 py-10 bg-purple-500 text-white">
      <h2 className='font-bold uppercase underline'>User Data</h2>

      <p>
        <strong className='text-black' >Name:</strong> {userData.name}
      </p>
      <p>
        <strong className='text-black'>Website:</strong> {userData.website}
      </p>
      <p>
        <strong className='text-black'>Email:</strong> {userData.email}
      </p>
      <p>
        <strong className='text-black'>Phone:</strong> {userData.phone}
      </p>
    </div>
  )
}

