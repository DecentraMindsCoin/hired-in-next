import React, { useState } from 'react'
import { useEffect } from 'react'
import useSWR from 'swr'
// create a function that fetches data from an api
// yarn add swr
// requires optional chaining ? or use wrap with Suspense from react
const fetcher = (...args) => fetch(...args).then((resp) => resp.json())

function UseSWR() {
  const url = 'https://jsonplaceholder.typicode.com/users/'
  const { data } = useSWR(url, fetcher)
  console.log(data)
  return (
    <div className="ml-32 h-96 overflow-y-scroll">
      <ul>
        {data?.map((user) => {
          let street = user.address.street
          let name = user.name
          let email = user.email

          return (
            <div className="py-5" key={user.id}>
              <li>{name} </li>
              <li>{street}</li>
              <li>{email}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default UseSWR
