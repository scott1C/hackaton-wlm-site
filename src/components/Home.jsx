import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className='home'>
            <div className='home__container container'>
                <h1 className='home__title'>
                    Empowering journalists to combat human trafficking.
                </h1>
                <Link className='home__button' to='/models'>
                    See how it works
                </Link>
            </div>
        </div>
    )
}

export default Main