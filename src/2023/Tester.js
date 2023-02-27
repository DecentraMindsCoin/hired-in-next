import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Tester = () => {
  const [table, setTable] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4b3b4b4b4b4b4b4b4b4b4b4b4b4b4b4b'
      )
      setTable(response.data)
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul>
        {table.map((data, index) => {
          <li key={data.id}>{data.id}</li>
        })}
      </ul>
    </div>
  )
}

export default Tester
