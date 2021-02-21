const router = require('express').Router();
const user = require('../controllers/user')
const search = require('../controllers/search');
const checkAuth = require('../middlewares/auth')
const admin = require("firebase-admin");
const checkOutByFirbase=require("../middlewares/authByFirebase.json");

admin.initializeApp({
    credential: admin.credential.cert(checkOutByFirbase),
    databaseURL: "https://drinksproject-8bb12.firebaseapp.com"
  });

  function checkFirebase(req, res, next) {
      console.log(req.headers.authorization)
    if (req.headers.authorization) {
        
      admin.auth().verifyIdToken(req.headers.authorization)
        .then((data) => {
            console.log(data)
          next()
        }).catch((ERR) => {
            console.log(ERR)
          res.status(403).send('Unauthorized')
        });
    } else {
        console.log("badif")
      res.status(403).send('Unauthorized')
    }
  }

router.get('/login/:email/:password',checkFirebase,user.getUserByEmailAndPassword)
router.get('/getAllUsers',user.getAllUsers)
router.post('/register',user.saveNewUser)
router.post('/saveNewSearh',checkAuth,search.saveNewSearch)
router.get('/getSearchesByUserId/:id',checkAuth,search.getSearchesByUserId)

module.exports=router;