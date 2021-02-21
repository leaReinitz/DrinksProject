const User = require('../models/User')
const Search = require('../models/Search')


const saveNewSearch = async (req,res)=>{
    console.log(req.body);
    let newSearch = new Search(req.body)
    console.log(newSearch);
    try{
    
       let search =  await newSearch.save();
       console.log(search);
        let user = await User.findById(req.body.userId)
        console.log(user);
        user.searches.push(search._id)
        await user.save()
        res.send("succes")
    }
    catch(err){
        res.send(err)
    }
}
const getSearchesByUserId=async(req,res)=>{
        try
        {
        let uWithSearches = await User.findById(req.params.id).populate("searches")
        
        res.status(200).json(uWithSearches.searches)
        }
        catch(err){
        res.status(500).json(err)
        }
        
        
}


module.exports = {saveNewSearch,getSearchesByUserId}