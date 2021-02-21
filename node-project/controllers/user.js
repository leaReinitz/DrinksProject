const User = require("../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const getUserById = async (req, res) => {
    try {
        console.log(req.params.id)
        let user = await User.findById(req.params.id);
        res.status(200).json({ user: user })
    }
    catch (err) {
        res.status(500).json({ err: err })
    }

}
const getAllUsers = async (req, res) => {
    try {
        let user = await User.find();
        res.status(200).json({ user: user })
    }
    catch (err) {
        res.status(500).json({ err: err })
    }

}
const saveNewUser = async (req, res) => {
    let user = new User(req.body);
    console.log(user)
    try {
        let token = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECRET)
       
        user.password = await bcrypt.hash(user.password, 10)
        let myUser = await user.save();
        myUser.password=req.body.password
        console.log(myUser.password)
        res.status(200).json({ user:myUser, token:token })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ err: err })
    }
}
const deleteUserById = async (req, res) => {
    try {
        console.log(req.params.id)

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("succes")
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}
const updateUserById = async (req, res) => {
    try {
        console.log(req.params.id)

        let user = await User.findByIdAndUpdate(req.params.id, req.body)
        await user.save();
        res.status(200).json("succes")
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}

const getUserByEmailAndPassword = async (req, res) => {
    try {
        let token = jwt.sign({ email: req.params.email, password: req.params.password }, process.env.SECRET)
        console.log(token)
        let user = await User.findOne({email:req.params.email})
        console.log(user.password)
        const result = await bcrypt.compare(req.params.password, user.password)
        console.log(result)
        if (result) {
            console.log("getgood")
            user.password=req.params.password
            console.log(user)
            res.status(200).json({ user:user, token:token }) 
        }
        else{
            console.log("getbad")
            res.status(404)
        } 
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
}


module.exports = { getUserById, getAllUsers, saveNewUser, deleteUserById, updateUserById, getUserByEmailAndPassword }