const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        status:"l'API fonctionne",
        message:" l'api fonctionne correctement et moi je suis content "
    })
})

let userController = require('../controllers/user.controller')

router.route('/User')
    .get(userController.index)
    .post(userController.new)

router.route('/User/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete)

module.exports = router