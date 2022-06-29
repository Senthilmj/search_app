import React from 'react'
import './Common.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
const ScrollTop = () => {
    return (
        <div className="scrolltop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            < FontAwesomeIcon icon={faAngleUp} size={"lg"} />
        </div>
    )
}

export default ScrollTop
