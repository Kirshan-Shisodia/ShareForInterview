import { React, useEffect, useState } from 'react';
import './Download.css';
import { useParams } from 'react-router-dom';


function Download() {
    const [movieDetail, setMovieDetail] = useState();
    const { id, type } = useParams();
    const episodeLink = ['snaskjsk', 'asdjhsjkdsk', 'askdhdkasd', 'smdnsjdjsdksak', 'sjdsjhdsajhdjash']

    useEffect(() => {
        const getData = () => {
            fetch(`http://localhost:8090/movies/${id}`)
                .then(res => res.json())
                .then(data => setMovieDetail(data))
        }
        getData();
    }, [])

    return (

        <div className='black-div-outer'>
            {type === 'movie' ? (
                <div className='main_div'>
                    <div className='movie_size_show'>
                        <p>720p [1.20GB] ; 1080p [2.98GB]</p>
                    </div>
                    <hr className='hr_line' />
                    <div className='movie_download_image'>
                        <img src='https://i.postimg.cc/ZqN5qSTg/UgB7qbx.png' alt='720p' />
                    </div>
                    <div className='download_btn_div'>
                        <button className='downlaod_btn'>Download</button>
                    </div>
                    <hr className='hr_line' />
                    <div className='movie_download_image'>
                        <img src='https://i.postimg.cc/J75tJMbC/lsTwuOI.png' alt='720p' />
                    </div>
                    <div className='download_btn_div'>
                        <button className='downlaod_btn'>Download</button>
                    </div>
                    <hr className='hr_line' />
                </div>
            ) : (
                <div className='main_div'>
                    <div className='movie_size_show'>
                        <p>720p [1.20GB] ; 1080p [2.98GB]</p>
                    </div>
                    <hr className='hr_line' />
                    <div className='movie_download_image'>
                        <img src='https://i.postimg.cc/ZqN5qSTg/UgB7qbx.png' alt='720p' />
                    </div>
                    <hr className='hr_line' />
                    {episodeLink.map((links,index) => (
                        <>
                            <div className='download_btn_div'>
                                <h3 className='download_episode_heading'>[Episode - {index + 1}]</h3>
                                <button className='downlaod_btn'>Download</button>
                            </div>
                            <hr className='hr_line' />
                        </>
                    ))}
                    <div className='movie_download_image'>
                        <img src='https://i.postimg.cc/J75tJMbC/lsTwuOI.png' alt='1080p' />
                    </div>
                    <hr className='hr_line' />
                    <div className='download_btn_div'>
                        <h3 className='download_episode_heading'>[Episode - 1]</h3>
                        <button className='downlaod_btn'>Download</button>
                    </div>
                    <hr className='hr_line' />
                    <div className='download_btn_div'>
                        <h3 className='download_episode_heading'>[Episode - 2]</h3>
                        <button className='downlaod_btn'>Download</button>
                    </div>
                    <hr className='hr_line' />
                    <div className='download_btn_div'>
                        <h3 className='download_episode_heading'>[Episode - 3]</h3>
                        <button className='downlaod_btn'>Download</button>
                    </div>
                    <hr className='hr_line' />
                </div>
            )}
        </div>

    )
}

export default Download;