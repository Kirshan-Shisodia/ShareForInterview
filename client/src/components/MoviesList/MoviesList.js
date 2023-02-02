import React, { useEffect, useState } from "react"
import "./MoviesList.css"
import Cards from "../Card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "../SearchField/Search";

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    // const [searchInputData, setSearchInputData] = useState('');
    // const [searchApiData, setSearchApiData] = useState([]);
    const { type } = useParams()

    // useEffect(() => {
    //     getData()
    // }, [])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:8090/movies?type=${type ? type : "movie"}`);
            const dataStore = res.data;
            setMovieList(dataStore);
            // setSearchApiData(dataStore);
        }
        getData()
    }, [type])

    // const onSearchChange = (e) => {
    //     if (e.target.value === '') {
    //         setMovieList(searchApiData)
    //     } else {
    //         const filerData = searchApiData.filter(item => item.original_title.toLowerCase().includes(e.target.value.toLowerCase()));
    //         setMovieList(filerData);
    //     }
    //     setSearchInputData(e.target.value);
    //     // console.log(searchInputData);
    // }


    return (
        <div className="movie__list">
            {/* {
                type === "movie" || type === "webseries" ? (
                    <div className='inputfiled'>
                        <input type="text" placeholder='Search...' onInput={(e) => onSearchChange(e)} value={searchInputData} />
                    </div>
                ) : ""
            } */}

            {/* <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
            </form> */}
            <h2 className="list__title">{(type ? type : "MOVIE").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;