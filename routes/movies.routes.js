const Movie = require('./Movie.model')
const router = require('express').Router()

router.get('/movies',(req,res)=>{

    Movie.find()
    .then((allMovies)=>{
        res.render('movies',{allMovies})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router