import { useEffect, useState } from 'react'
import axios from 'axios'

import { Table } from './components/Table'
import { Pagination } from './components/Pagination'

function App() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/data')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const filter = {
      ['testo1']: e.target['testo1'].value,
      ['testo2']: e.target['testo2'].value,
      ['email']: e.target['email'].value,
      ['tld']: e.target['tld'].value,
      ['domain']: e.target['domain'].value,
    }
    try {
      const response = await axios.post('/api/data', filter)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    // console.log(filter)
  }

  return (
    <main className=' py-2 md:px-40'>
      <form action='/api/data' method='get' onSubmit={handleSubmit}>
        <button className='btn btn-block btn-square' type='submit'>
          Search
        </button>
        <Table data={data} />
      </form>
      <Pagination />
    </main>
  )
}

export default App
