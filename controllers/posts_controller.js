const posts = require('../data/db')

//Create the functions for the CRUD operations


function index(req, res) {

    let filtered_posts = posts

    //filtering posts from tags 

    if(req.query.tag){

        filtered_posts = posts.filter(element => element.tags.includes(req.query.tag))
        res.json(filtered_posts)
    }



    
}


function show(req, res) {
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
}


function destroy(req, res) {
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
}


function store(req, res) {
    res.send('Post aggiunti alla lista')
    
}


function update(req, res) {
    const id = req.params.id;
    res.send(`Il post con ID: ${id} è stato aggiornato`)
}


function modify(req, res) {
    const id = req.params.id;
    res.send(`Il post con ID: ${id} è stato modificato`)
}

module.exports = {index, show, destroy, store, update, modify}