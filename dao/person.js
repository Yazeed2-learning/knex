const db = require('../db/db.js')

const create =async (firstName, lastName, email,username) =>{
    const [id] = await db('person').insert({
        email, 
        first_name: firstName, 
        last_name: lastName,
        username
    }).returning('id')
    return id
} 

module.exports = {create}