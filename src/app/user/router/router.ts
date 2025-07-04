import express from 'express'
import { logout, userLogin, userRegister } from '../controler/UserControler'
const router=express.Router()
router.post('/register',userRegister)
router.post('/login',userLogin)
router.delete('/logout',logout)
export default router


