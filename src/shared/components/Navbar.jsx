import '../../index.css'
import './navbar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/')
    }

    const navigateToMyList = () => {
        navigate('/my-list')
    }

  return (
    <div className='navbar px-3 custom-bg-primary d-flex justify-content-between'>
        {/* When clicked the page doesn't navigate to the path. Fix it later */}
        <div className='logo'  onClick={navigateToHome} style={{cursor: 'pointer'}}>
            <span className='fw-bold fs-1 custom-text-primary'>MOVİE-K</span>
        </div>
        <div className='show-my-list fs-2 custom-text-primary border rounded-pill px-3' onClick={navigateToMyList}>My List</div>
    </div>
  )
}

export default Navbar