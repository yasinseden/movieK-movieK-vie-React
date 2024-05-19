import React, { useEffect, useState } from 'react'
import Navbar from '../../shared/components/Navbar'
import PreviewCategory from './components/Preview-category'
import restService from '../../services/rest-service'

const Home = () => {

    useEffect(() => {
        getCategories()
    }, [])

    const [genreList, setGenreList] = useState([])

    const getCategories = () => {
        restService.get('/3/genre/movie/list')
            .then((res) => {
                setGenreList(res.genres)
            })
    }


    return (

        <>
            <Navbar />
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center flex-column" style={{ fontSize: '50px' }}>
                        <span>I LIKE TO MOVİEK MOVİEK</span>
                        <span>YOU LIKE TO MOVİEK MOVİEK</span>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <img src="src\assets\images\lion-alex.png" style={{ width: '50%' }} />
                    </div>
                </div>
                {
                    genreList.map((genre) => {
                        return <PreviewCategory key={`preview-${genre.id}`} genreId={genre.id} genreName={genre.name} />
                    })
                }
            </div>

        </>
    )
}

export default Home