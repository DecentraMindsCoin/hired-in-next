import React, { useState } from 'react'


const Phonebook = () => {
  const [entries, setEntries] = useState([])
  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry].sort((a, b) =>
      a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1)
    )
  }
  return (
    <div className="h-96">
      <div className="">
        <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
        <DisplayEntries entries={entries} />
      </div>
    </div>
  )
}

export default Phonebook
const EntryForm = ({ addEntryToPhoneBook }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addEntryToPhoneBook({ firstName, lastName, phoneNumber })
  }

  return (
    <form onSubmit={handleSubmit} className="flex-row">
      <input
        className="w-full"
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="w-full"
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="w-full"
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        placeholder="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="w-full" type="submit">
        Submit
      </button>
    </form>
  )
}

const DisplayEntries = ({ entries }) => {
  return (
    <table>
      <thead>
        <tr >
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
