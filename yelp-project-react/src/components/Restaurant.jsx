import React, { Component } from 'react';
import Reviews from './Reviews';

const Restaurant = (props, {reviews}) => {
    return(
        <div className="restaurantsDiv">
            <div className="restaurantInfo">
            <p className="restaurantName">{props.name}</p>
            <p className="restaurantAddress">{props.address}</p>
            <p className="restaurantDescription">{props.description}</p>
            <p className="ratings">{props.ratings}</p>
            <div className="reviews">
                {reviews.map((review,i) => (
                    <Reviews review={review} key={i}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Restaurant;