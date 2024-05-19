import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMovieFromList } from '../../redux/action';
import Navbar from '../../shared/components/Navbar';

const MyList = () => {
    const myList = useSelector((state) => state.movies.myList);
    const dispatch = useDispatch()

    const removeMovie = (movie) => {
        dispatch(removeMovieFromList(movie))
    }

    return (
        <>
            <Navbar />
            <div className="my-list container-fluid">
                <h2>My List</h2>
                <div className="movie-list row">
                    {myList.map((movie) => (
                        <div key={movie.id} className="movie-item text-center fs-6 col-6 col-lg-2 my-3 position-relative">
                            <div className="position-absolute top-0 bg-danger p-2 text-white" style={{ right: '2.2rem', cursor: 'pointer' }} onClick={() => removeMovie(movie)}>Remove</div>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            <div>{movie.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyList;
