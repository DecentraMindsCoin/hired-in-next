import React, { useCallback, useState } from 'react'
import Pagination from 'react-paginate'
import FilterForm from './FilterForm'

const ITEMS_PER_PAGE = 10

const ItemTable = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState([
    { id: 1, title: 'Item 1', description: 'Description 1', status: 'active', date: '2022-01-01' },
    { id: 2, title: 'Item 2', description: 'Description 2', status: 'inactive', date: '2021-12-31' },
    { id: 3, title: 'Item 3', description: 'Description 3', status: 'active', date: '2021-12-01' },
    { id: 4, title: 'Item 4', description: 'Description 4', status: 'inactive', date: '2021-11-01' },
    { id: 5, title: 'Item 5', description: 'Description 5', status: 'active', date: '2021-10-01' },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOrder, setSortOrder] = useState({
    column: 'title',
    order: 'asc',
  })
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const handleFilterChange =
    ((event) => {
      const filtered = items.filter((item) => {
        let include = true
        if (event.title) {
          include =
            include &&
            item.title.toLowerCase().includes(event.title.toLowerCase())
        }
        if (event.status) {
          include = include && item.status === event.status
        }
        if (event.date) {
          include =
            include &&
            new Date(item.date).toDateString() ===
              new Date(event.date).toDateString()
        }
        return include
      })
      setFilteredItems(filtered)
    },
    [items])

    const handleSortChange = (column) => {
      if (sortOrder.column === column) {
        setSortOrder({ column: column, order: sortOrder.order === 'asc' ? 'desc' : 'asc' });
      } else {
        setSortOrder({ column: column, order: 'asc' });
      }
    };

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleColumnVisibility = (column) => {
    if (setHiddenColumns(hiddenColumns.filter((col) => col !== column))) {
      setHiddenColumns(hiddenColumns.filter((col) => col !== column))
    } else {
      setHiddenColumns([...hiddenColumns, column])
    }
  }

  const sortedItems = filteredItems
    .sort((a, b) => {
      if (sortOrder.order === 'asc') {
        return a[sortOrder.column].localeCompare(b[sortOrder.order.column])
      } else {
        return b[sortOrder.column].localeCompare(a[sortOrder.order.column])
      }
    })
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div>
      <div>
        <FilterForm onFilterChange={handleFilterChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortChange('title')}>
              Title
              <button onClick={() => handleColumnVisibility('title')}>
                {hiddenColumns.includes('title') ? 'Show' : 'Hide'}
              </button>
            </th>
            <th onClick={() => handleSortChange('status')}>
              Status
              <button onClick={() => handleColumnVisibility('status')}>
                {hiddenColumns.includes('status') ? 'Show' : 'Hide'}
              </button>
            </th>
            <th onClick={() => handleSortChange('date')}>
              Date
              <button onClick={() => handleColumnVisibility('date')}>
                {hiddenColumns.includes('date') ? 'Show' : 'Hide'}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map(item => (
            <tr key={item.id}>
              {!hiddenColumns.includes('title') && <td>{item.title}</td>}
              {!hiddenColumns.includes('status') && <td>{item.status}</td>}
              {!hiddenColumns.includes('date') && <td>{item.date}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredItems.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ItemTable
