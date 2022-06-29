import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss'



const Rating = (props) => {
    const { rating } = props
    const { absoluteRating, count } = rating
    return (
        absoluteRating > 0 ?
            < div className="rating" >
                < FontAwesomeIcon className={`rating-star active`
                } icon={faStar} size={"xs"} />
                <p> {absoluteRating} </p>
                <p> ({count}) </p>

            </div > : null
    )
}

export default Rating