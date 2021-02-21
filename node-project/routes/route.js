const router = require('express').Router();
const user = require('../controllers/user')
const search = require('../controllers/search');
const checkAuth = require('../middlewares/auth')

router.get('/login/:email/:password',user.getUserByEmailAndPassword)
router.get('/getAllUsers',user.getAllUsers)
router.post('/register',user.saveNewUser)
router.post('/saveNewSearh',checkAuth,search.saveNewSearch)
router.get('/getSearchesByUserId/:id',checkAuth,search.getSearchesByUserId)

module.exports=router;