const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: '*'
}

// register cors middleware
app.use(cors(corsOptions))

// register middleware untuk parsing json yang diterima dari body request
app.use(express.json())

//membuat routes
app.get('/', (req,res) => {
    res.json({message: 'helloads kfjadkfjafk ajkf'})
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server run on port ${PORT}`))

