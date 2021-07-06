import React, { Component } from 'react';

const Reviews = ({review}) => {
    return(
        <div className='reviewContainer'>
            <p className='review'>{review}</p>
        </div>
    )
}

export default Reviews;