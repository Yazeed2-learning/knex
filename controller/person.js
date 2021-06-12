const person = require('../dao/person')

const create = async(req, res ) => { 
    const {firstName, lastName, email, username}  = req.body; 
    try{

        await person.create(firstName, lastName, email,username)
        res.send('done')
        return 
    }catch (err) { 
        res.status(500).json(err)
        return
    }
}


module.exports = {create}