import {Router,Request,Response} from 'express'
import * as HomeController from '../controllers/homeController'
import * as infoController from '../controllers/infocontroller'
import * as userController from '../controllers/userController'


const router = Router()

//ROTA HOME
router.get('/',HomeController.home)
router.get('/contato',infoController.contato)
router.get('/sobre',infoController.sobre)
router.get('/nome', userController.nome)
//GET exibe a página
router.get('/idade', userController.idade)
//POST processa as informações
router.post('/idade-resultado', userController.idadeResultado)


export default router