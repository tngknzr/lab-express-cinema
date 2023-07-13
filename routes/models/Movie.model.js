const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title:String,
    director:String,
    description:String,
    image: String,
    stars:Array,
    showtime:Array
})
const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie