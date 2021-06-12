const express = require ('express')
const router = express.Router()
const db = require('../db/db')

router.post('/' ,async (req, res)=> { 
    const {title, body} = req.body
    try{

        const [id] = await db('blogs').insert({title, body}).returning('id')
        res.status(200).json({code: 'success', msg: `created a blog  id: ${id}`})
    }catch(err){ 
        res.status(500).json({code : 'error', msg : err})
    }
})


router.get('/' ,async (req, res)=> { 
    try{
        const data = await db.select('title', 'body', 'id').from('blogs')
    res.status(200).json({code: 'success' , data})
          
    }catch(err){ 
                res.status(500).json({code : 'error', msg : err})

    }

})
router.get('/:id' , async (req, res)=> { 
    const {id} = req.params
    try{
        const blog = await db('blogs').where({id})
        res.status(200).json({code: 'success' , blog})
    }catch(err){ 
        console.log(err )
        res.status(500).json({code : 'error', msg : err})


    }

})

router.put('/:id' ,async (req, res)=> { 
    const {id} = req.params
    const {body, title} = req.body
    try{
        await db('blogs').where({id}).update({body, title})
        res.status(200).json({code: 'success' })

    }catch(err){ 
                res.status(500).json({code : 'error', msg : err})

    }

})

router.delete('/:id' , async (req, res)=> { 
    const {id} = req.params 
    try{
       await db('blogs').where({id}).del()
       res.status(200).json({code: 'success', msg: "deleted blog "})

    }catch(err){ 
                res.status(500).json({code : 'error', msg : err})

    }

})


module.exports = router; 