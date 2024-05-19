import React, { useEffect, useState } from 'react'
import restService from '../../../services/rest-service'
import './preview-category.css'
import { useDispatch } from 'react-redux'
import { addMovieToList } from '../../../redux/action'

const PreviewCategory = ({ genreId, genreName }) => {

    const genre = genreName.toUpperCase()
    const [movieList, setMovieList] = useState([])
    const [selectedMovieId, setSelectedMovieId] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        getMovies()
    }, [genreId])

    const getMovies = () => {
        const genreParam = genreId ? `with_genres=${genreId}` : ''
        restService.get(`/3/discover/movie?${genreParam}`)
            .then((res) => {
                setMovieList(res.results);
                console.log(res.results);
            })
    }

    const toggleMovieDetails = (movieId) => {
        setSelectedMovieId(selectedMovieId => selectedMovieId === movieId ? null : movieId)
    }

    const addMovie = (movie) => {
        dispatch(addMovieToList(movie));
        toggleMovieDetails(movie.id)
    }

    return (
        <>
            <div className='row d-flex justify-content-center my-5'>
                <div className='genre-title fs-0'>{genre}</div>
                {
                    movieList.map((movie) => {
                        const img = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        return (
                            <div key={`movie-${movie.id}`} className="movie-poster col-6 col-lg-2 p-3 d-flex flex-column align-items-center">
                                <img src={img} alt="" />
                                <div className='show-details p-3 bg-primary text-center w-75 fs-5 text-white' onClick={() => toggleMovieDetails(movie.id)}>show Details</div>
                                {
                                    selectedMovieId === movie.id && (
                                        <div className='custom-bg-primary movie-details position-fixed top-50 start-50 w-75 rounded'>
                                            <div className="close-button d-flex justify-content-center align-items-center p-2 position-absolute top-0 end-0 text-danger rounded-circle border border-3 border-danger fw-bold fs-4" onClick={() => toggleMovieDetails(movie.id)}>
                                                X
                                            </div>
                                            <div className="row p-5">
                                                <div className="poster col-12 col-lg-3">
                                                    <img src={img} alt="" />
                                                </div>
                                                <div className="col-12 col-lg-9">
                                                    <div className="d-flex justify-content-between text-white">
                                                        <div className='fs-1 fw-bold'>{movie.title}</div>
                                                        <div className='vote border border-2 border-white text-white p-3 rounded-pill text-center d-flex flex-column justify-content-center align-items-center'>
                                                            <div>
                                                                <span className='fs-3 fw-bold'>
                                                                    {movie.vote_average}
                                                                </span>
                                                                <span className='fs-5 fw-normal'>/10</span>
                                                            </div>
                                                            <div className='fs-6'>{movie.vote_count} voted</div>
                                                        </div>
                                                    </div>
                                                    <div className='my-4 text-white fs-5'>
                                                        Release Date:  {movie.release_date}
                                                    </div>
                                                    <div className='my-2 text-white fs-5'>
                                                        {movie.overview}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="add-my-list-button position-absolute py-1 px-2 bg-warning rounded fs-6" onClick={() => addMovie(movie)}><span className='fs-6 fw-bold'>+</span> Add My List</div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PreviewCategory
