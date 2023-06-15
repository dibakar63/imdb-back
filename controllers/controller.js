const Imdb=require("../models/model.js");

const getMovies=async(req,res,next)=>{
    let movies;
    try {
       movies= await Imdb.find()
    } catch (error) {
        console.log(error)
    }
    if(!movies){
        return res.status(400).json({message:"No movies found"})
    }
    return res.status(200).json({movies})
}

const addMovies=async(req,res,next)=>{
    const movies=new Imdb({
        name:req.body.name,
        image:req.body.image,
        actors:req.body.actors,
        producer:req.body.producer,
        year:req.body.year,
        rating:req.body.rating

    })
    try {
        const newMovies=await movies.save()
    res.status(201).json(newMovies)
    } catch (error) {
        res.status(400).json({ message: 'Unable to Add' })
    }
}
const getById=async(req,res,next)=>{
    const id =req.params.id;
    let movies;
    try {
        movies=await Imdb.findById(id);
    } catch (error) {
        console.log(error)
    }
    if(!movies){
    return    res.status(500).json({message:"No movies found"})
    }
    return res.status(202).json({movies,message:"Movie Found"})

}
  const updateMovies=async(req,res,next)=>{
    const id=req.params.id;
    const {name,image,actors,producer,year,rating}=req.body;
    let movies;
    try {
        movies=await Imdb.findByIdAndUpdate(id,{
            name,image,actors,producer,year,rating
        })
         movies=await movies.save()
        
    } catch (error) {
        console.log(error)
    }
    if(!movies){
      return  res.status(401).json({message:"Not updated"})
    }
    return res.status(201).json({movies,message:"Updated"})
  }
module.exports.addMovies=addMovies
module.exports.getMovies=getMovies
module.exports.getById=getById
module.exports.updateMovies=updateMovies