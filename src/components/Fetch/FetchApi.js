import React, { useEffect, useState } from 'react'

const FetchApi = () => {
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users/'
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData)
        console.log(apiData)
      })
  }, [])

  return (
    <div className="h-96 overflow-y-scroll ml-32">
      <ul>
        {data.map((user) => {
          return (
            <div className='py-5' key={user.id}>
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

export default FetchApi
