
const express = require('express');
const router = express.Router();

// Importing the posts data from db.js
const posts = require('../data/db');

//Index
router.get('/', (req, res)=>{
    
    let filtered_posts = posts

    //filtering posts from tags 

    if(req.query.tag){

        filtered_posts = posts.filter(element => element.tags.includes(req.query.tag))
        res.json(filtered_posts)
    }



    
})

// Show
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id) ;

    const post = posts.find( post => post.id === id)

    if(!post){
        res.status(404)
        return res.json({
            error: 'True',
            message:`The post with ID: ${id} is not present`
        })
    }

    res.json(post)
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
    const id = parseInt(req.params.id) ;

    console.log(posts);
    

    const post = posts.find( post => post.id === id)

    if(!post){
        res.status(404)
        return res.json({
            error: 'True',
            message:`The post with ID: ${id} is not present`
        })
    }

    posts.splice(posts.indexOf(post), 1)
    console.log(posts);
    
    res.sendStatus(204)

})
module.exports = router;

