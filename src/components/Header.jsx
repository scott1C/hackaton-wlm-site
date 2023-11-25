import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <Link className='header__logo logo' to='/'>Logo</Link>
                <div className='header__links'>
                    <a className='header__link header__link--1' href='#'>Model 1</a>
                    <a className='header__link header__link--2' href='#'>Model 2</a>
                    <a className='header__link header__link--3' href='#'>Model 3</a>
                </div>
            </div>
        </header>
    )
}

export default Header;