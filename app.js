const express = require('express')
const path = require('path')

const query = require('./query')
const { log } = require('console')

const app = express()
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')))

// Define API routes or other server logic
app.post('/api/data', async (req, res) => {
  const { testo1, testo2, email, tld, domain } = req.body

  const filter = {}
  if (testo1) filter.TESTO1 = testo1
  if (testo2) filter.TESTO2 = testo2
  if (email) filter.EMAIL = email
  if (tld) filter.TLD = tld
  if (domain) filter.DOMAIN = domain

  console.log(filter)

  secrets = await query(filter)
  res.send(secrets)
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
