import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// yarn add axios
const Axios = () => {
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users/'
  useEffect(() => {
    axios.get(url).then((resp) => {
      setData(resp.data)
      console.log(resp.data)
    })
  }, [])
  return (
    <div className="ml-32 h-96 overflow-y-scroll">
      <ul>
        {data.map((user) => {
          return (
            <div className="py-5" key={user.id}>
              <li>{user.name}</li>
              <li>{user.address.street}</li>
              <li>{user.email}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Axios
