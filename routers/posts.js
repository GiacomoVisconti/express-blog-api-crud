
const express = require('express');
const router = express.Router();

// Importing the posts data from db.js
const posts = require('../db.js');

//Index
router.get('/', (req, res)=>{
    // res.send('List of posts');
    res.json(posts)
})

// Show
router.get('/:id', (req, res) => {
    const id = req.params.id;

    // res.send(`Post with ID ${id}`);

    posts.filter((element) =>{
        if (element.id === parseInt(id)){
            res.send(element) 

            
        }
    })
})

//Store
router.post('/', (req, res) => {
    res.send('Post aggiunti alla lista')
})

//Update
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Il post con ID: ${id} è stato aggiornato`)
})

//Modify
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Il post con ID: ${id} è stato modificato`)
})

//Destroy
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Il post con ID: ${id} è stato cancellato.`)

})
module.exports = router;

