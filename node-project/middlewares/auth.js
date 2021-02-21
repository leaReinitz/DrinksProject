const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
    try {
        console.log(req.headers.authorization) 
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET)
        next()
    }
    catch (err) {
        res.status(401).json({ err: "authorization failed" })
    }
}
module.exports = checkAuth