import Movie from '../model/movie.js';


export const getMovies = async (request, response) => {
    const qType = request.query.type;
    try{
        let movies;
        if (qType) {
            movies = await Movie.find({
              type: {
                $in: [qType],
              },
            });
        }else {
            movies = await Movie.find();
        }
        response.status(200).json(movies);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addMovie = async (request, response) => {
    
    const movie = request.body;
    console.log("inside")

    const newMovie = new Movie(movie);
    try{
        await newMovie.save();
        response.status(201).json(newMovie);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const getMovieById = async (request, response) => {
    try{
        const movie = await Movie.findById(request.params.id);
        response.status(200).json(movie);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const editMovie = async (request, response) => {
    let movie = await Movie.findById(request.params.id);
    movie = request.body;

    const editMovie = new Movie(movie);
    try{
        await Movie.updateOne({_id: request.params.id}, editMovie);
        response.status(201).json(editMovie);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


export const deleteMovie = async (request, response) => {
    try{
        await Movie.deleteOne({_id: request.params.id});
        response.status(201).json("movie deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}



