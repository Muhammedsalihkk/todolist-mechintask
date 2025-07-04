import express from 'express'
import { Add_todo, delete_todo, Gett_todo } from '../controller/Todocontroler'
import { authverification } from '../../middleware/authmiddleware'
const router=express.Router()

router.post('/add',authverification,Add_todo)
router.get('/get',authverification,Gett_todo)
router.delete('/delete/:id',authverification,delete_todo)
export default router
