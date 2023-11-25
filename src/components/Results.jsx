import React from 'react'
import DataGridDemo from './Table'
const Results = () => {
    return (
        <div className='results'>
            <div className='results__container container'>
                <div className='results__table'>
                    {DataGridDemo()}
                </div>
            </div>
        </div>
    )
}

export default Results