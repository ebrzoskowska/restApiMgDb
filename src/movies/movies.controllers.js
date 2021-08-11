const Movie = require('./movies.model');

exports.createMovie = async (req, res) => {
  try 
  {
    const movie = new Movie(req.body);
    const saveMovie = await movie.save();
    res
      .status(200)
      .send({movie: saveMovie, message: 'Movie crated in database'});
  }
  catch (error)
  {
    res.status(500).send(error)
  }
}
