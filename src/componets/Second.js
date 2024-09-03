import React from 'react'
import { Link } from 'react-router-dom'
import Sec from './Sec'
import Sec2 from './Sec2'

function Second() {
    return (
        <>
            <div className="second">
                <h1>Compound interest Calculator</h1>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/">Finance calculator</Link>
                    <Link to="/">Compound interest</Link>
                </div>
                <div className="btn">
                    <button className='mvtn' style={{ backgroundColor: "rgb(109, 230, 178)" }}>Compound interest</button>
                    <button className='mvtn'>Simple interest</button>
                    <button className='mvtn'>Daily compound</button>
                    <button className='mvtn'>Forex compound</button> 
                </div>
            </div>
            <div className="flex1">
                <Sec />
                <Sec2 />
            </div>
        </>
    )
}

export default Second
