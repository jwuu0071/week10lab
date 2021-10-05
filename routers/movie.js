var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
  getAll: function (req, res) {
    Movie.find(function (err, movies) {
      if (err) return res.status(400).json(err);
      res.json(movies);
    });
  },
  createOne: function (req, res) {
    let newMovieDetails = req.body;
    newMovieDetails._id = new mongoose.Types.ObjectId();
    Movie.create(newMovieDetails, function (err, movie) {
      if (err) return res.status(400).json(err);
      res.json(movie);
    });
  },
  getOne: function (req, res) {
    Movie.findOne({ _id: req.params.id })
      .populate('actors')
      .exec(function (err, movie) {
        if (err) return res.status(400).json(err);
        if (!movie) return res.status(404).json();
        res.json(movie);
      });
  },
  updateOne: function (req, res) {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();
      res.json(movie);
    });
  },
  deleteOne: function (req, res) {
    Movie.findOneAndRemove({ _id: req.params.id }, function (err) {
      if (err) return res.status(400).json(err);
      res.json();
    });
  },
  deleteMovieByTitle: function (req, res) {
    title = req.params
    Movie.deleteOne(title).exec();
  },
  deleteMovieByYear: function (req,res){
    query = {year: { $gte: req.params.year1 } ,  year: { $lte: req.params.year2 }}
    Movie.deleteMany(query).exec();
    res.json();
  },
  addActorToMovie: function (req,res){
    Movie.findOne({_id:req.params.movieId},function (err,movie){
      console.log("movie")
      if (err) return res.status(400).json(err);
      if (!movie) return res.status(404).json();
      Actor.findOne({_id:req.params.actorId},function (err,actor){
        console.log("actor")
        if (err) return res.status(400).json(err);
        if (!actor) return res.status(404).json();
        movie.actors.push(req.params.actorId);
        movie.save(function (err){
          if (err) return res.status(500).json(err);
          res.json(movie);
        });
      });
    });
  }
}
