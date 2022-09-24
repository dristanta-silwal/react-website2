import React from 'react'
import '../index.css'
import './Home.css'
import Profile from '../profile.JPG'

const Home = () => {
    return (
        <section className='header'>
            <img className="profile" src={Profile} alt="Profile Picture" />
            <h2 class="bio b0">Dristanta</h2>
            <h2 class="bio b1">Silwal</h2>
            <p class="bio b2">Future Data Scientist</p>
        </section>
    )
}

export default Home;