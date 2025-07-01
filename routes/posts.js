
const express = require('express');
const router = express.Router();
const posts_controller = require('../controllers/posts_controller')

// Importing the posts data from db.js
const posts = require('../data/db');

//Index
router.get('/', posts_controller.index)

// Show
router.get('/:id', posts_controller.show)

//Store
router.post('/', posts_controller.store)

//Update
router.put('/:id', posts_controller.update)

//Modify
router.patch('/:id', posts_controller.modify)

//Destroy
router.delete('/:id', posts_controller.destroy)
module.exports = router;

