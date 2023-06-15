const express=require('express');

const router=express.Router();
const routerController=require('../controllers/controller')

router.post('/',routerController.addMovies)
router.get('/',routerController.getMovies)
router.get('/:id',routerController.getById)
router.put("/:id",routerController.updateMovies)

module.exports=router;