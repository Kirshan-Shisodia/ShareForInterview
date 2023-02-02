import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';


const movieSchema = mongoose.Schema({
    original_title: String,
    type: String,
    release_date: String,
    vote_average: Number,
    overview: String,
    vote_count: Number,
    genre_type: Array,
    run_time: Number,
    tagline: String,
    backdrop_path: String,
    poster_path: String,
    screenshot_one_link: String,
    screenshot_two_link: String,
    screenshot_three_link: String,
});

// autoIncrement.initialize(mongoose.connection);
// movieSchema.plugin(autoIncrement.plugin, 'movie');

const postMovie = mongoose.model('movie', movieSchema);

export default postMovie;