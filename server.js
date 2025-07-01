const express = require('express')
const app = express()
const port = 3000
const post_router = require('./routers/posts.js')

// Importing the posts data from db.js
const posts = require('./db.js')

app.use('/api/posts', post_router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    // res.json(posts)
    res.send('Post Page')
})

