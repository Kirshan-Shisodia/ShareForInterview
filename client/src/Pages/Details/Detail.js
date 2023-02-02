import { React, useEffect, useState } from 'react';
import './Detail.css';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {

    const [movieDetail, setMovieDetail] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`http://localhost:8090/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovieDetail(data))
    }


    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`${movieDetail ? movieDetail.backdrop_path : ""}`} alt="movie_backdrop_image" />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`${movieDetail ? movieDetail.poster_path : ""}`} alt="movie_poster_image" />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movieDetail ? movieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{movieDetail ? movieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {movieDetail ? movieDetail.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{movieDetail ? `(${movieDetail.vote_count}K) votes` : ""}</span>
                        </div>
                        <div className="movie__runtime">{movieDetail ? movieDetail.run_time + " mins" : ""}</div>
                        <div className="movie__releaseDate">{movieDetail ? "Release date: " + movieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                movieDetail && movieDetail.genre_type
                                    ?
                                    movieDetail.genre_type.map(genre => (
                                        <><span className="movie__genre">{genre}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movieDetail ? movieDetail.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    // <a href='#' target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Download <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    <Link to={`/download/${movieDetail ? movieDetail.type : ""}/${movieDetail ? movieDetail.original_title : ""}/${movieDetail ? movieDetail._id : ""}`} style={{ textDecoration: "none", color: "white" }}>
                        <p>
                            <span className="movie__homeButton movie__Button">
                                Download <i className="newTab fas fa-external-link-alt"></i>
                            </span>
                        </p>
                    </Link>
                }
                {/* {
                    movieDetail && movieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                } */}
            </div>
            <div className="movie__heading">Movie Screenshots</div>
            <div className='main_div_movie_Screenshort'>
                <div className="movie__production">
                    <img className="movie_screenshort" src={`${movieDetail ? movieDetail.screenshot_one_link : ""}`} alt="screenshort_image" />
                </div>
                <div className="movie__production">
                    <img className="movie_screenshort" src={`${movieDetail ? movieDetail.screenshot_two_link : ""}`} alt="screenshort_image" />
                </div>
                <div className="movie__production">
                    <img className="movie_screenshort" src={`${movieDetail ? movieDetail.screenshot_three_link : ""}`} alt="screenshort_image" />
                </div>
            </div>
        </div>
    );
}

export default Detail;