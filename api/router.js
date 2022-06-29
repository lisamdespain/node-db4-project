const express = require('express');
const Recipes = require('./model')

const router = express.Router();

router.get('/recipes/:id', (req, res, next) =>{
    Recipes.getById(req.params.id)
    .then(recipe =>{
        res.status(200).json(recipe)
    })
    .catch(next);
})

router.get('/recipes', (req, res, next) =>{
    Recipes.get()
    .then(recipe =>{
        res.status(200).json(recipe)
    })
    .catch(next);
})

module.exports = router;