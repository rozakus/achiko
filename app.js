const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// routers
const router = require('./routers')
app.use('', router)
app.use('/', (req, res) => { res.status(200).json('Welcome to Achiko by rozakus') })

app.listen(PORT, () => { console.log(`RUN AT PORT : ${PORT}`) })