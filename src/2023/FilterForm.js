import React, { useState } from 'react'

const FilterForm = ({ onFilterChange }) => {
  const [formData, setFormData] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    onFilterChange(formData)
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Status:
        <select name="status" onChange={handleChange}>
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" name="date" onChange={handleChange} />
      </label>
      <button type="submit">Filter</button>
    </form>
  )
}

export default FilterForm
