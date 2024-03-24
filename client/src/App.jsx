import { useEffect, useState } from 'react'
import axios from 'axios'

import { Table } from './components/Table'
import { Pagination } from './components/Pagination'

const App = () => {
  const [data, setData] = useState(null)
  const [inputs, setInputs] = useState({})
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(null)
  const [docCount, setDocCount] = useState(null)
  const [pageInput, setPageInput] = useState(1)

  const fetchData = async (query = {}) => {
    try {
      const response = await axios.post('/api/data', query)
      setData(response.data.result)
      setPageCount(response.data.pages)
      setDocCount(response.data.count)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetchData({ ...inputs, page: 1 })
    setPage(1)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const changePage = async (e) => {
    let newPage = 1
    if (e.target.name === '+') newPage = page + 1
    if (e.target.name === '-') newPage = page - 1
    if (
      e.target.name === 'pageButton' &&
      !isNaN(pageInput) &&
      pageInput >= 1 &&
      pageInput <= pageCount
    )
      newPage = pageInput

    fetchData({
      ...inputs,
      page: newPage,
    })
    setPage(newPage)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className=' py-2 md:px-40'>
      <Pagination
        changePage={changePage}
        page={page}
        pageCount={pageCount}
        docCount={docCount}
        setPageInput={setPageInput}
      />
      <form onSubmit={handleSubmit}>
        <button className='btn btn-block btn-square' type='submit'>
          Search
        </button>
        <Table data={data} handleInputChange={handleInputChange} />
      </form>
    </main>
  )
}

export default App
