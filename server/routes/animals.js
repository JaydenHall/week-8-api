const express = require('express')
const db = require('../db/animals')
const router = express.Router()


router.get('/', (req, res) => {
    console.log('from routes 1')
    
    db.getAnimals()
        .then(animals => {
            res.send(animals)
        })
        .catch(err => {
            (res.status(500).send.err.message)
        })
    })

router.post('/', (req, res) => {
    console.log(req.body);
    const animal = req.body
    db.addAnimal(animal)
        .then((animal) => {
            res.send(animal)
        })
})    

module.exports = router