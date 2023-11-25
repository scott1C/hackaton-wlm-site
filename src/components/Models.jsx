import React from 'react';
import { Link } from 'react-router-dom';

const ModelsPage = () => {
    return (
        <div className='models'>
            <div className='models__container container'>
                <h2 className='models__title'>Choose your model</h2>
                <div className='models__boxes'>
                    <Link className='models__box models__box--1' to='/'>
                        <h6 className='models__box-title'>Box number one</h6>
                        <p className='models__box-descr'>
                            Description for the box number one
                        </p>
                    </Link>
                    <Link className='models__box models__box--2' to='/'>
                        <h6 className='models__box-title'>Box number two</h6>
                        <p className='models__box-descr'>
                            Description for the box number two
                        </p>
                    </Link>
                    <Link className='models__box models__box--3' to='/'>
                        <h6 className='models__box-title'>Box number three</h6>
                        <p className='models__box-descr'>
                            Description for the box number threes
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ModelsPage;
