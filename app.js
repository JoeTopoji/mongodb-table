const express = require('express')
const path = require('path')

const { FIELDS: field } = require('./appconfig.json')
const query = require('./query')

const app = express()
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')))

// Define API routes or other server logic
app.post('/api/data', async (req, res) => {
  console.log(field)
  const { page } = req.body
  const filter = {}
  filter[field[0]] = req.body[field[0]]
  filter[field[1]] = req.body[field[1]]
  filter[field[2]] = req.body[field[2]]
  filter[field[3]] = req.body[field[3]]
  filter[field[4]] = req.body[field[4]]

  const newfilter = removeEmptyFields(filter)
  // console.log(filter)
  // console.log(newfilter)

  const limit = 15
  const skip = limit * (page - 1)

  const { result, count } = await query(newfilter, skip, limit)
  const pages = Math.ceil(count / limit)
  res.send({ result, count, pages })
})

// All other requests return the React app, so it can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}/`)
})

//funzione per creare il filter
function removeEmptyFields(obj) {
  const newObj = {}
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
