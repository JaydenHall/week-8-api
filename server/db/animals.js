const connection = require('./connections')

module.exports = {
    getAnimals,
    addAnimal
}

function getAnimals(db = connection) {
    return db('animals').select()
}

function addAnimal(animal, db = connection) {
    return db('animals').insert({
        name: animal.name
    })
}