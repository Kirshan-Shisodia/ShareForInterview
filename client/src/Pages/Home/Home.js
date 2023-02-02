import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../components/MoviesList/MoviesList';


function Home() {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8090/movies")
        .then(res => res.json())
        .then(data => setNewMovies(data))
    },[])

  return (
    <>
        <div className='poster'>
            <Carousel showThumbs={true} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false} >
            {
                        newMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/detail/${movie._id}`} >
                                <div className="posterImage">
                                    <img src={movie && movie.backdrop_path} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title.slice(0,41) : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
            </Carousel>
            {/* {
                showMovie &&
                <MovieList setShowMovie={setShowMovie} />
            } */}
            <MovieList />
        </div>
    </>
  )
}

export default Home;