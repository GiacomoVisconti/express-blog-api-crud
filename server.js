const express = require('express')
const app = express()
const port = 3000
const post_router = require('./routes/posts.js')

// Importing the posts data from db.js
const posts = require('./data/db.js')

//Set Body Parser
app.use(express.json())

// Set the router for the posts API
app.use('/api/posts', post_router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


app.get('/', (req, res) => {
    // res.json(posts)
    res.send('Post Page')
})

