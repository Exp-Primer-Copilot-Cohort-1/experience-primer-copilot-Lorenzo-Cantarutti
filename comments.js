//Create web server
const express = require('express');
const router = express.Router();

//get comments
router.get('/', (req, res) => {
    res.send('get comments');
});

//add comments
router.post('/', (req, res) => {
    res.send('add comments');
});

//update comments
router.put('/:id', (req, res) => {
    res.send('update comments');
});

//delete comments
router.delete('/:id', (req, res) => {
    res.send('delete comments');
});

module.exports = router;
